/*
  The vehicle preference selector: a disclosure button plus an inline listbox.

  The list is ordinary content in the page flow (never a popover), so opening it pushes the contact group down.
  The real form value is the hidden `vehicle` input; this script keeps it, the visible value and `aria-selected`
  in step. Focus moves into the listbox while it is open (aria-activedescendant) and returns to the button.

  Keys, in the list: ArrowDown / ArrowUp, Home / End, Enter or Space to select, Escape to close. Tab leaves
  naturally and closes the list. On the button: Enter / Space toggle, ArrowDown / ArrowUp open.
*/
export function initVehicleSelect(root: HTMLElement) {
  const trigger = root.querySelector<HTMLButtonElement>('[data-vehicle-trigger]')!;
  const list = root.querySelector<HTMLElement>('[data-vehicle-list]')!;
  const shown = root.querySelector<HTMLElement>('[data-vehicle-value]')!;
  const field = root.querySelector<HTMLElement>('.field')!;
  const input = root.querySelector<HTMLInputElement>('input[name="vehicle"]')!;
  const options = [...list.querySelectorAll<HTMLElement>('[role="option"]')];

  let active = 0;
  let ignoreFocusOut = false;

  const selectedIndex = () => Math.max(0, options.findIndex((o) => o.getAttribute('aria-selected') === 'true'));

  function setActive(index: number) {
    active = Math.min(options.length - 1, Math.max(0, index));
    options.forEach((option, i) => option.toggleAttribute('data-active', i === active));
    list.setAttribute('aria-activedescendant', options[active].id);
    options[active].scrollIntoView({ block: 'nearest' });
  }

  function open() {
    list.hidden = false;
    field.setAttribute('data-open', '');
    trigger.setAttribute('aria-expanded', 'true');
    setActive(selectedIndex());
    list.focus();
  }

  function close(returnFocus: boolean) {
    list.hidden = true;
    list.removeAttribute('aria-activedescendant');
    field.removeAttribute('data-open');
    trigger.setAttribute('aria-expanded', 'false');
    if (returnFocus) trigger.focus();
  }

  function choose(index: number) {
    const option = options[index];
    options.forEach((o, i) => o.setAttribute('aria-selected', String(i === index)));
    input.value = option.dataset.value ?? 'recommend';
    shown.textContent = (option.textContent ?? '').trim();
    input.dispatchEvent(new Event('change', { bubbles: true }));
    close(true);
  }

  trigger.addEventListener('mousedown', () => {
    // Safari does not focus a button on click: without this, the list's focusout would close it and the click reopen it.
    ignoreFocusOut = true;
    window.setTimeout(() => (ignoreFocusOut = false), 0);
  });
  trigger.addEventListener('click', () => (list.hidden ? open() : close(true)));
  trigger.addEventListener('keydown', (e) => {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && list.hidden) {
      e.preventDefault();
      open();
    }
  });

  list.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActive(active + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActive(active - 1);
        break;
      case 'Home':
        e.preventDefault();
        setActive(0);
        break;
      case 'End':
        e.preventDefault();
        setActive(options.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        choose(active);
        break;
      case 'Escape':
        e.preventDefault();
        close(true);
        break;
    }
  });
  list.addEventListener('click', (e) => {
    const option = (e.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (option) choose(options.indexOf(option));
  });
  list.addEventListener('mousemove', (e) => {
    const option = (e.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (option && options.indexOf(option) !== active) setActive(options.indexOf(option));
  });

  // Clicking elsewhere, or Tab / Shift+Tab out of the list, closes it without stealing focus back.
  list.addEventListener('focusout', (e) => {
    if (ignoreFocusOut) return;
    const next = e.relatedTarget as Node | null;
    if (!next || next === trigger || !root.contains(next)) close(false); // Shift+Tab lands on the button
  });
}
