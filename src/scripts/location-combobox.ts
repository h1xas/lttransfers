/*
  The From / To suggestion combobox and the swap control, shared by the homepage starters (RouteStarter) and the
  request page. Markup comes from LocationField.astro; the owning <form> carries the translated status strings as
  data-airports / data-cities / data-available / data-none and a <script type="application/json" data-locations>.
*/
import { fold } from '../utils/text';

export interface Loc {
  v: string; // value placed in the input / request URL
  l: string; // display name
  c: string; // IATA code, '' for cities
  k: 'a' | 'c'; // airport | city
  y: string; // country name
  f: string; // folded search key
  x: string[]; // every folded spelling of the place, in every language (see journey-store localizePlace)
}

const MAX_RESULTS = 8;
const DEFAULT_CITIES = 5;

function search(all: Loc[], query: string): Loc[] {
  const q = fold(query.trim());
  if (!q) {
    return [...all.filter((x) => x.k === 'a'), ...all.filter((x) => x.k === 'c').slice(0, DEFAULT_CITIES)];
  }
  const scored: { loc: Loc; score: number; index: number }[] = [];
  all.forEach((loc, index) => {
    let score = 0;
    if (loc.c && loc.c.toLowerCase() === q) score = 100;
    else if (loc.f.startsWith(q)) score = 80;
    else if (loc.f.split(/[\s-]+/).some((w) => w.startsWith(q))) score = 60;
    else if (loc.f.includes(q)) score = 40;
    if (score) scored.push({ loc, score, index });
  });
  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  return scored.slice(0, MAX_RESULTS).map((x) => x.loc);
}

export function readLocations(form: HTMLElement): Loc[] {
  const raw = form.querySelector('script[data-locations]')?.textContent ?? '[]';
  return JSON.parse(raw) as Loc[];
}

export function initCombobox(
  form: HTMLElement,
  input: HTMLInputElement,
  all: Loc[],
  status: HTMLElement | null,
) {
  const field = input.closest<HTMLElement>('[data-field]')!;
  const list = field.querySelector<HTMLUListElement>('[role="listbox"]')!;
  let results: Loc[] = [];
  let active = -1;

  const setActive = (index: number) => {
    active = index;
    list.querySelectorAll('[role="option"]').forEach((el, i) => {
      const on = i === index;
      el.setAttribute('aria-selected', String(on));
      if (on) {
        input.setAttribute('aria-activedescendant', el.id);
        (el as HTMLElement).scrollIntoView({ block: 'nearest' });
      }
    });
    if (index < 0) input.removeAttribute('aria-activedescendant');
  };

  const close = () => {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
  };

  const render = () => {
    results = search(all, input.value);
    list.replaceChildren();
    if (!results.length) {
      close();
      if (status) status.textContent = input.value.trim() ? (form.dataset.none ?? '') : '';
      return;
    }
    const showGroups = results.some((r) => r.k === 'a') && results.some((r) => r.k === 'c');
    let lastKind = '';
    results.forEach((loc, i) => {
      if (showGroups && loc.k !== lastKind) {
        const group = document.createElement('li');
        group.setAttribute('role', 'presentation');
        group.className = 'group';
        group.textContent = loc.k === 'a' ? (form.dataset.airports ?? '') : (form.dataset.cities ?? '');
        list.append(group);
      }
      lastKind = loc.k;
      const option = document.createElement('li');
      option.setAttribute('role', 'option');
      option.id = `${list.id}-opt-${i}`;
      option.setAttribute('aria-selected', 'false');
      option.dataset.index = String(i);
      const name = document.createElement('span');
      name.textContent = loc.l;
      const meta = document.createElement('span');
      meta.className = loc.c ? 'meta code' : 'meta';
      meta.textContent = loc.c || loc.y;
      option.append(name, meta);
      list.append(option);
    });
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    active = -1;
    if (status) status.textContent = (form.dataset.available ?? '').replace('{n}', String(results.length));
  };

  const choose = (index: number) => {
    const loc = results[index];
    if (!loc) return;
    input.value = loc.v;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true })); // shared state listens for this
    close();
    if (status) status.textContent = '';
  };

  input.addEventListener('focus', render);
  input.addEventListener('input', render);
  input.addEventListener('click', () => {
    if (list.hidden) render();
  });

  input.addEventListener('keydown', (e) => {
    const open = !list.hidden;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) render();
        if (results.length) setActive((active + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) render();
        if (results.length) setActive(active <= 0 ? results.length - 1 : active - 1);
        break;
      case 'Enter':
        if (open && active >= 0) {
          e.preventDefault();
          choose(active);
        }
        break;
      case 'Escape':
        if (open) {
          e.preventDefault();
          close();
        }
        break;
      case 'Tab':
        close();
        break;
    }
  });

  // Keep focus in the input while the pointer works the list.
  list.addEventListener('mousedown', (e) => e.preventDefault());
  list.addEventListener('click', (e) => {
    const option = (e.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (option) {
      choose(Number(option.dataset.index));
      input.focus();
    }
  });
  list.addEventListener('mousemove', (e) => {
    const option = (e.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (option && Number(option.dataset.index) !== active) setActive(Number(option.dataset.index));
  });

  field.addEventListener('focusout', (e) => {
    if (!field.contains(e.relatedTarget as Node | null)) close();
  });

  return close;
}

/** Wires the ⇄ control: swaps the two inputs and tells the form's listeners it changed. */
export function initSwap(form: HTMLElement, inputs: HTMLInputElement[], closers: (() => void)[]) {
  const swap = form.querySelector<HTMLButtonElement>('[data-swap]');
  if (!swap || inputs.length !== 2) return;
  swap.hidden = false;
  swap.addEventListener('click', () => {
    const [from, to] = inputs;
    [from.value, to.value] = [to.value, from.value];
    from.dispatchEvent(new Event('input', { bubbles: true }));
    to.dispatchEvent(new Event('input', { bubbles: true }));
    from.dispatchEvent(new Event('change', { bubbles: true }));
    closers.forEach((close) => close()); // after the events: `input` re-renders the list
  });
}

/** Today in the visitor's local time as YYYY-MM-DD, optionally shifted by whole years. */
export function localDate(addYears = 0): string {
  const now = new Date();
  now.setFullYear(now.getFullYear() + addYears);
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}
