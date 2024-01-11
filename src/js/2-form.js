document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('[name="email"]');
  const messageTextarea = feedbackForm.querySelector('[name="message"]');

  // Відстежування події input на формі
  feedbackForm.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageTextarea) {
      // Запис значень полів у локальне сховище
      const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  // Перевірка стану сховища під час завантаження сторінки
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageTextarea.value = parsedData.message;
  }

  // Очищення сховища та полів форми при сабміті
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };

    // Очищення локального сховища
    localStorage.removeItem('feedback-form-state');

    // Виведення об'єкту з полями форми в консоль
    console.log(formData);

    // Очищення полів форми
    emailInput.value = '';
    messageTextarea.value = '';
  });
});
