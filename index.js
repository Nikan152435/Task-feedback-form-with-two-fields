// Находим нужные элементы формы и контейнера для вывода данных
const form = document.querySelector('form');
const content = document.querySelector('.content');
const nameInput = document.getElementById('name');
const feedbackInput = document.getElementById('feedback');

// Добавляем обработчик события на отправку формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  // Проверяем, что оба поля заполнены
  if (nameInput.value.trim() === '' || feedbackInput.value.trim() === '') {
    alert('Пожалуйста, заполните все поля формы.');
  } else {
    // Создаем параграфы с данными из полей формы и добавляем их в контейнер
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Имя: ${nameInput.value}`;

    const feedbackParagraph = document.createElement('p');
    feedbackParagraph.textContent = `Текст: ${feedbackInput.value}`;

    content.innerHTML = ''; // Очищаем содержимое контейнера
    content.appendChild(nameParagraph);
    content.appendChild(feedbackParagraph);

    // Очищаем поля формы
    nameInput.value = '';
    feedbackInput.value = '';

    // Можно также отправить данные на сервер с использованием AJAX-запроса, но это зависит от ваших требований.
  }
});

// Решение эксперта

const form = document.querySelector('form');
const content = document.querySelector('.content');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements['name'].value;
    const feedback = form.elements['feedback'].value;
    createElements(name, feedback)
    form.reset();
});


const createElements = (name, feedback) => {
    const nameElement = document.createElement('p');
    const feedbackElement = document.createElement('p');
    nameElement.textContent = `Имя: ${name}`;
    feedbackElement.textContent = `Текст: ${feedback}`;
    content.appendChild(nameElement);
    content.appendChild(feedbackElement);
}
