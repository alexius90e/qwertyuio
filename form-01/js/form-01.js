document.querySelectorAll('.form-01__select').forEach(select => {
  const control = select.querySelector('.form-01__select__control');
  const dropdown = select.querySelector('.form-01__select__dropdown');
  const options = select.querySelectorAll('.form-01__select__option');
  const valueEl = select.querySelector('.form-01__select__value');
  const input = select.querySelector('input');

  // открыть/закрыть
  control.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  // выбор
  options.forEach(option => {
    option.addEventListener('click', () => {
      const value = option.dataset.value;

      valueEl.textContent = option.textContent;
      input.value = value;

      select.classList.remove('open');
      select.classList.remove('invalid');
    });
  });

  // закрытие при клике вне
  document.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });

  // фокус / blur
  control.addEventListener('focus', () => {
    select.classList.add('focus');
  });

  control.addEventListener('blur', () => {
    select.classList.remove('focus');

    // валидация как у инпута
    if (input.hasAttribute('required') && !input.value) {
      select.classList.add('invalid');
    }
  });

  // клавиатура
  control.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      select.classList.toggle('open');
    }

    if (e.key === 'Escape') {
      select.classList.remove('open');
    }
  });
});