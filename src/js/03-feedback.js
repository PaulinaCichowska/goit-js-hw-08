const throttle = require('lodash.throttle');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const feedbackForm = document.querySelector('form');

document.addEventListener('DOMContentLoaded', e => {
  let formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = formState.email;
  message.value = formState.message;
});

feedbackForm.addEventListener('input', throttle(storageSave, 500));

function storageSave(e) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});
