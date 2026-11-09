const form = document.querySelector('#message-form');
const input = document.querySelector('#message-input');
const messages = document.querySelector('#messages');
const emptyState = document.querySelector('#empty-state');

// Отправка формы работает и по кнопке, и по Enter в поле ввода.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  const message = document.createElement('li');
  const author = document.createElement('strong');
  const hero = document.querySelector('input[name="hero"]:checked');
  author.textContent = `${hero.dataset.icon} ${hero.value} · Вы`;
  const content = document.createElement('p');
  const time = document.createElement('time');
  const now = new Date();

  // textContent показывает пользовательский ввод как текст, а не HTML.
  content.textContent = text;
  time.dateTime = now.toISOString();
  time.textContent = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  message.append(author, content, time);
  messages.append(message);
  emptyState.hidden = true;
  input.value = '';
  input.focus();
  message.scrollIntoView({ block: 'nearest' });
});
