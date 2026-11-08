/*
  Client behaviour of /request: location suggestions, swap, the airport-only Flight number, passengers,
  contact method, validation and the send (lib/request/send.ts). Prefilling is done earlier by the inline script in
  RequestPage.astro, so this file only reads the fields as they already are.

  Nothing typed here is stored. Only From / To / Date are written back to the shared `lt-starter`
  sessionStorage journey (so the homepage strips agree), and that journey is cleared after a successful send.
*/
import { initCombobox, initSwap, localDate, readLocations } from './location-combobox';
import { initVehicleSelect } from './vehicle-select';
import { clearJourney, writeJourney } from './journey-store';
import { looksLikeAirport } from '../lib/request/airport';
import { cleanLine, parsePassengers } from '../lib/request/normalize';
import { sendRequest } from '../lib/request/send';
import type { ErrorCode, FieldErrors, FieldKey, Method, RequestPayload } from '../lib/request/types';
import { validateField, validateRequest } from '../lib/request/validation';

type Control = HTMLInputElement | HTMLTextAreaElement;
type Mode = 'blur' | 'submit';

interface Field {
  key: FieldKey;
  cell: HTMLElement;
  control: Control;
  err: HTMLElement;
  validate: (mode: Mode) => string | null;
  /** False while the field is not part of the form (the Flight number when it is hidden). */
  active: () => boolean;
}

interface Config {
  lang: string;
  htmlLang: string;
  vehicles: Record<string, string>;
  contact: { whatsappUrl: string | null; phoneTel: string | null; phoneDisplay: string };
  homeHref: string;
  copy: {
    errors: Record<'from' | 'to' | 'date' | 'datePast' | 'dateFar' | 'passengers' | 'flight' | 'countOne' | 'count', string>;
    methods: Record<Method, { option: string; label: string; placeholder: string; empty: string; invalid: string }> & {
      fieldChanged: string;
    };
    passengersLabel: string;
    flight: { added: string; removed: string };
    notes: { shortened: string; remaining: string; limit: string };
    submit: string;
    sending: string;
    retry: string;
    success: {
      title: string;
      documentTitle: string;
      text: string;
      rows: Record<'journey' | 'date' | 'passengers' | 'vehicle' | 'flight' | 'contact' | 'notes', string>;
    };
  };
}

const form = document.querySelector<HTMLFormElement>('[data-request-form]');
const configEl = document.getElementById('request-config');
if (form && configEl) init(form, JSON.parse(configEl.textContent ?? '{}') as Config);

function init(form: HTMLFormElement, cfg: Config) {
  const q = <T extends HTMLElement>(selector: string) => form.querySelector<T>(selector)!;
  const page = document.querySelector<HTMLElement>('.rq')!;
  const copy = cfg.copy;

  // ---------- Elements ----------
  const fromInput = q<HTMLInputElement>('#req-from');
  const toInput = q<HTMLInputElement>('#req-to');
  const dateInput = q<HTMLInputElement>('#req-date');
  const paxInput = q<HTMLInputElement>('#req-pax');
  const paxDec = q<HTMLButtonElement>('[data-pax-dec]');
  const paxInc = q<HTMLButtonElement>('[data-pax-inc]');
  const paxMore = q<HTMLElement>('#req-pax-more');
  const flightRow = q<HTMLElement>('[data-flight-row]');
  const flightInput = q<HTMLInputElement>('#req-flight');
  const vehicleInput = q<HTMLInputElement>('#req-vehicle'); // hidden: the real `vehicle` value
  initVehicleSelect(q<HTMLElement>('[data-vehicle-select]'));
  const contactInput = q<HTMLInputElement>('#req-contact');
  const contactLabel = q<HTMLElement>('[data-contact-label]');
  const methodRadios = [...form.querySelectorAll<HTMLInputElement>('input[data-method]')];
  const notes = q<HTMLTextAreaElement>('#req-notes');
  const notesHint = q<HTMLElement>('#req-notes-hint');
  const notesCount = q<HTMLElement>('[data-notes-count]');
  const countEl = q<HTMLElement>('[data-count]');
  const failure = q<HTMLElement>('[data-failure]');
  const submit = q<HTMLButtonElement>('[data-submit]');
  const submitText = q<HTMLElement>('[data-submit-text]');
  const say = (() => {
    // A polite region of our own: the combobox writes its "suggestions available" text into [data-status].
    const region = document.createElement('div');
    region.className = 'sr-only';
    region.setAttribute('role', 'status');
    region.setAttribute('aria-live', 'polite');
    form.append(region);
    let timer = 0;
    return (text: string) => {
      region.textContent = '';
      window.clearTimeout(timer);
      timer = window.setTimeout(() => (region.textContent = text), 60);
    };
  })();

  // ---------- Location fields: the homepage combobox and swap, unchanged ----------
  const all = readLocations(form);
  const status = form.querySelector<HTMLElement>('[data-status]');
  const locationInputs = [fromInput, toInput];
  locationInputs.forEach((input) => (input.maxLength = 120));
  const closers = locationInputs.map((input) => initCombobox(form, input, all, status));
  initSwap(form, locationInputs, closers);

  dateInput.min ||= localDate();
  dateInput.max ||= localDate(2);

  // ---------- Airport-related journeys show the Flight number ----------
  // (the airport rule itself lives in lib/request/airport.ts: the same one normalisation applies to the payload)
  function syncFlight(reason: 'input' | 'commit', silent = false) {
    const match = looksLikeAirport(fromInput.value) || looksLikeAirport(toInput.value);
    if (match && flightRow.hidden) {
      flightRow.hidden = false;
      if (!silent) {
        flightRow.classList.add('is-entering');
        say(copy.flight.added);
      }
    } else if (!match && !flightRow.hidden && reason === 'commit') {
      // Hidden only once the visitor has left the field, so typing "Riga Airp…" never flickers.
      flightRow.hidden = true;
      flightRow.classList.remove('is-entering');
      clearError(fieldsByKey.flight);
      refreshCount();
      say(copy.flight.removed);
    }
  }
  flightRow.addEventListener('animationend', () => flightRow.classList.remove('is-entering'));
  locationInputs.forEach((input) => {
    input.addEventListener('input', () => syncFlight('input'));
    input.addEventListener('change', () => syncFlight('commit'));
    input.addEventListener('blur', () => syncFlight('commit'));
  });

  // ---------- Passengers: 1 → 8 → 8+ ----------
  function syncPax() {
    const value = parsePassengers(paxInput.value);
    paxDec.setAttribute('aria-disabled', String(value === '1'));
    paxInc.setAttribute('aria-disabled', String(value === '8+'));
    paxMore.hidden = !(value === '8' || value === '8+');
    describe(fieldsByKey.passengers);
  }
  function stepPax(direction: 1 | -1) {
    const current = parsePassengers(paxInput.value);
    let next: string;
    if (current === null) next = '1';
    else if (direction === 1) next = current === '8+' ? '8+' : current === '8' ? '8+' : String(Number(current) + 1);
    else next = current === '1' ? '1' : current === '8+' ? '8' : String(Number(current) - 1);
    paxInput.value = next;
    syncPax();
    revalidateIfInvalid(fieldsByKey.passengers);
  }
  paxDec.addEventListener('click', () => stepPax(-1));
  paxInc.addEventListener('click', () => stepPax(1));
  paxInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      stepPax(e.key === 'ArrowUp' ? 1 : -1);
    }
  });
  paxInput.addEventListener('input', syncPax);
  paxInput.addEventListener('blur', () => {
    const value = parsePassengers(paxInput.value);
    if (value) paxInput.value = value; // 12 becomes 8+
    syncPax();
  });

  // ---------- Contact method: one input, one remembered value per kind (page memory only) ----------
  const remembered = { tel: '', email: '' };
  let method: Method = (methodRadios.find((r) => r.checked)?.value as Method | undefined) ?? 'whatsapp';
  const kindOf = (m: Method) => (m === 'email' ? 'email' : 'tel');

  function applyMethod(next: Method, announce: boolean) {
    remembered[kindOf(method)] = contactInput.value;
    method = next;
    const m = copy.methods[next];
    contactLabel.textContent = m.label;
    contactInput.type = kindOf(next) === 'email' ? 'email' : 'tel';
    contactInput.inputMode = kindOf(next) === 'email' ? 'email' : 'tel';
    contactInput.autocomplete = kindOf(next) === 'email' ? 'email' : 'tel';
    contactInput.placeholder = m.placeholder;
    contactInput.value = remembered[kindOf(next)];
    clearError(fieldsByKey.contact);
    refreshCount();
    if (announce) say(copy.methods.fieldChanged.replace('{label}', m.label));
  }
  methodRadios.forEach((radio) =>
    radio.addEventListener('change', () => {
      if (radio.checked) applyMethod(radio.value as Method, true);
    }),
  );

  // ---------- Notes ----------
  const NOTES_MAX = 500;
  let notesLength = notes.value.length;
  let pasting = false;
  const autosize = () => {
    notes.style.height = 'auto';
    notes.style.height = `${notes.scrollHeight}px`;
  };
  notes.addEventListener('paste', (e) => {
    const incoming = e.clipboardData?.getData('text') ?? '';
    const selected = notes.selectionEnd - notes.selectionStart;
    if (notes.value.length - selected + incoming.length > NOTES_MAX) {
      notesHint.textContent = copy.notes.shortened;
      notesHint.hidden = false;
      describe({ cell: notes.closest('.field') as HTMLElement, control: notes } as Field);
      say(copy.notes.shortened);
    }
    pasting = true;
    window.setTimeout(() => (pasting = false), 0);
  });
  notes.addEventListener('input', () => {
    autosize();
    const length = notes.value.length;
    notesCount.hidden = length < 400;
    notesCount.textContent = `${length} / ${NOTES_MAX}`; // not a live region: no per-keystroke announcement
    if (!pasting && !notesHint.hidden) {
      notesHint.hidden = true;
      describe({ cell: notes.closest('.field') as HTMLElement, control: notes } as Field);
    }
    if (length >= NOTES_MAX && notesLength < NOTES_MAX) say(copy.notes.limit);
    else if (length >= 450 && notesLength < 450) say(copy.notes.remaining.replace('{n}', String(NOTES_MAX - length)));
    notesLength = length;
  });

  // ---------- Fields and validation ----------
  // The rules are lib/request/validation.ts . Here: which message a code gets, and
  // the page's rhythm: nothing while typing, format errors on blur, everything on Send request.
  const dateWindow = () => ({ min: dateInput.min || localDate(), max: dateInput.max || localDate(2) });

  function messageFor(key: FieldKey, code: ErrorCode): string | null {
    const e = copy.errors;
    switch (key) {
      case 'from':
        return e.from;
      case 'to':
        return e.to;
      case 'date':
        return code === 'past' ? e.datePast : code === 'too_far' ? e.dateFar : e.date;
      case 'passengers':
        return e.passengers;
      case 'flight':
        return e.flight;
      case 'contact':
        return code === 'required' ? copy.methods[method].empty : copy.methods[method].invalid;
      default:
        return null; // method is always one of three radios; notes stop at 500: neither has a message
    }
  }

  const fieldDefs: Field[] = [];
  const fieldsByKey = {} as Partial<Record<FieldKey, Field>> & Record<'from' | 'to' | 'date' | 'passengers' | 'flight' | 'contact', Field>;
  function register(
    key: Exclude<FieldKey, 'method' | 'notes'>,
    control: Control,
    value: () => string,
    opts: { active?: () => boolean; flagEmptyOnBlur?: () => boolean } = {},
  ) {
    const cell = control.closest<HTMLElement>('.field')!;
    const validate = (mode: Mode) => {
      const code = validateField(key, value(), { method, dates: dateWindow() });
      if (!code) return null;
      // Leaving an empty field is not an error yet; Send request is.
      if (mode === 'blur' && code === 'required' && !opts.flagEmptyOnBlur?.()) return null;
      return messageFor(key, code);
    };
    const field: Field = {
      key,
      cell,
      control,
      err: cell.querySelector<HTMLElement>('.err')!,
      validate,
      active: opts.active ?? (() => true),
    };
    fieldDefs.push(field);
    fieldsByKey[key] = field;
  }

  register('from', fromInput, () => cleanLine(fromInput.value));
  register('to', toInput, () => cleanLine(toInput.value));
  register('date', dateInput, () => dateInput.value, { flagEmptyOnBlur: () => dateInput.validity.badInput }); // half-typed date
  register('passengers', paxInput, () => cleanLine(paxInput.value), { flagEmptyOnBlur: () => true });
  register('flight', flightInput, () => cleanLine(flightInput.value), { active: () => !flightRow.hidden });
  register('contact', contactInput, () => cleanLine(contactInput.value));

  /** aria-describedby lists whichever hint and error messages are showing in the cell right now. */
  function describe(field: Pick<Field, 'cell' | 'control'> & { key?: string }) {
    const ids = [...field.cell.querySelectorAll<HTMLElement>('.hint:not([hidden]), .err:not([hidden])')]
      .map((el) => el.id)
      .filter(Boolean);
    // The 8+ guidance sits below the journey block, not in the cell, but still describes the passengers input.
    if (field.key === 'passengers' && !paxMore.hidden) ids.push(paxMore.id);
    if (ids.length) field.control.setAttribute('aria-describedby', ids.join(' '));
    else field.control.removeAttribute('aria-describedby');
  }
  function setError(field: Field, message: string) {
    field.err.textContent = message;
    field.err.hidden = false;
    field.cell.setAttribute('data-invalid', '');
    field.control.setAttribute('aria-invalid', 'true');
    describe(field);
  }
  function clearError(field: Field) {
    field.err.hidden = true;
    field.err.textContent = '';
    field.cell.removeAttribute('data-invalid');
    field.control.removeAttribute('aria-invalid');
    describe(field);
  }
  const isInvalid = (field: Field) => field.cell.hasAttribute('data-invalid');

  let attempted = false;
  function refreshCount() {
    if (!attempted) return;
    const n = fieldDefs.filter((f) => f.active() && isInvalid(f)).length;
    countEl.textContent = n === 0 ? '' : n === 1 ? copy.errors.countOne : copy.errors.count.replace('{n}', String(n));
  }
  /** After an error: the message clears as soon as the value becomes valid, while typing. */
  function revalidateIfInvalid(field: Field) {
    if (!isInvalid(field)) return;
    const message = field.validate('submit');
    if (message) setError(field, message);
    else clearError(field);
    refreshCount();
  }

  fieldDefs.forEach((field) => {
    const check = () => revalidateIfInvalid(field);
    field.control.addEventListener('input', check);
    field.control.addEventListener('change', check);
    // Leaving a field shows format errors only; an empty field is not flagged until Send request.
    field.control.addEventListener('blur', () => {
      if (!field.active()) return;
      if (field.key === 'passengers') syncPax(); // normalises first (12 → 8+)
      const message = field.validate('blur');
      if (message) setError(field, message);
      refreshCount();
    });
  });

  // ---------- Journey values go back to the homepage strips (and nothing else is stored) ----------
  form.addEventListener('change', (e) => {
    const target = e.target as HTMLElement;
    if (target === fromInput || target === toInput || target === dateInput) {
      writeJourney({ from: cleanLine(fromInput.value), to: cleanLine(toInput.value), date: dateInput.value });
    }
  });

  // ---------- Send ----------
  let sending = false;
  const setSending = (on: boolean) => {
    sending = on;
    submit.setAttribute('aria-disabled', String(on));
    form.setAttribute('aria-busy', String(on));
    if (on) submitText.textContent = copy.sending;
  };

  /** The form's current values, exactly as typed: lib/request normalises and validates them. */
  const rawRequest = () => ({
    from: fromInput.value,
    to: toInput.value,
    date: dateInput.value,
    passengers: paxInput.value,
    vehicle: vehicleInput.value,
    flight: flightInput.value, // dropped by normalisation unless the journey is airport-related
    method,
    contact: contactInput.value,
    notes: notes.value,
    lang: cfg.lang,
  });

  /** Shows field errors from a validation result and focuses the first one. */
  function showFieldErrors(errors: FieldErrors): boolean {
    const shown = fieldDefs.filter((field) => {
      const code = errors[field.key];
      const message = code && field.active() ? messageFor(field.key, code) : null;
      if (message) setError(field, message);
      return Boolean(message);
    });
    if (!shown.length) return false;
    attempted = true;
    refreshCount();
    focusField(shown[0]);
    return true;
  }
  function focusField(field: Field) {
    field.control.focus();
    // Focus arrived from validation, not from the visitor: keep the suggestion sheet from covering the errors.
    field.control.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  }
  function showFailure() {
    submitText.textContent = copy.retry;
    failure.hidden = false;
    submit.focus({ preventScroll: true });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // the form never navigates, so nothing can reach a URL
    if (sending) return;
    attempted = true;
    failure.hidden = true;

    const invalid = fieldDefs.filter((field) => {
      if (!field.active()) return false;
      const message = field.validate('submit');
      if (message) setError(field, message);
      else clearError(field);
      return Boolean(message);
    });
    refreshCount();
    if (invalid.length) {
      focusField(invalid[0]);
      return;
    }

    // Normalise and validate, then hand the canonical request to the transport (sendRequest → Formspree).
    const validated = validateRequest(rawRequest(), dateWindow());
    if (!validated.ok) {
      if (!showFieldErrors(validated.errors)) showFailure();
      return;
    }

    setSending(true);
    const result = await sendRequest(validated.request);
    setSending(false);
    if (result.status === 'success') showSuccess(validated.request);
    else showFailure(); // values stay in the form; "Try again" resubmits
  });
  submit.addEventListener('click', (e) => {
    if (sending) e.preventDefault();
  });

  // ---------- Success: the form region is replaced; the values live in page memory only ----------
  function showSuccess(p: RequestPayload) {
    const title = document.querySelector<HTMLElement>('[data-title]')!;
    const s = copy.success;
    title.textContent = s.title;
    document.querySelector<HTMLElement>('[data-lead]')!.textContent = s.text;
    document.querySelector<HTMLElement>('[data-aside]')!.hidden = true;
    document.querySelector<HTMLElement>('[data-success-actions]')!.hidden = false;
    document.querySelector<HTMLElement>('[data-talk]')?.setAttribute('hidden', '');
    page.querySelector<HTMLElement>('.masthead')!.classList.add('is-entering');

    const [y, m, d] = p.date.split('-').map(Number);
    const date = new Date(y, m - 1, d).toLocaleDateString(cfg.htmlLang === 'lt' ? 'lt-LT' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const rows: [string, string][] = [
      [s.rows.journey, `${p.from} → ${p.to}`],
      [s.rows.date, date],
      [s.rows.passengers, p.passengers],
      [s.rows.vehicle, cfg.vehicles[p.vehicle] ?? p.vehicle],
    ];
    if (p.flight) rows.push([s.rows.flight, p.flight]);
    rows.push([s.rows.contact, `${copy.methods[p.method].option} · ${p.contact}`]);
    if (p.notes) rows.push([s.rows.notes, p.notes]);

    const ledger = document.querySelector<HTMLElement>('[data-ledger]')!;
    ledger.replaceChildren(
      ...rows.map(([label, value]) => {
        const row = document.createElement('div');
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = label;
        dd.textContent = value; // text, never markup
        row.append(dt, dd);
        return row;
      }),
    );

    form.hidden = true;
    document.querySelector<HTMLElement>('[data-recap]')!.hidden = false;
    document.title = s.documentTitle;
    clearJourney(); // the homepage strips start empty again
    window.scrollTo(0, 0);
    title.focus({ preventScroll: true });
  }

  // ---------- Initial state (values may already be filled by the prefill script) ----------
  // A journey that arrived through the URL is kept for the session too, so the language switch (a plain link) can
  // carry From / To / Date to the other language's page. Same three values as ever; nothing else is stored.
  if (fromInput.value || toInput.value || dateInput.value) {
    writeJourney({ from: cleanLine(fromInput.value), to: cleanLine(toInput.value), date: dateInput.value });
  }
  applyMethod(method, false);
  syncPax();
  syncFlight('commit', true);
  autosize();
  notesCount.hidden = notes.value.length < 400;
  if (!notesCount.hidden) notesCount.textContent = `${notes.value.length} / ${NOTES_MAX}`;
}
