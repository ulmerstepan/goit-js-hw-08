import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';

const emailInput = document.querySelector('input[type=email]');
const messageInput = document.querySelector('textarea[name=message]');
const form = document.querySelector('.feedback-form');

const inputData = { email: '', message: '' };

populateInputs();

emailInput.addEventListener('input', throttle(onEmailInput, 500));
messageInput.addEventListener('input', throttle(onMessageInput, 500));
form.addEventListener('submit', onFormSubmit);

function onEmailInput() {
    inputData.email = emailInput.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onMessageInput() {
    inputData.message = messageInput.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(inputData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateInputs() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        emailInput.value = JSON.parse(savedMessage).email;
        messageInput.value = JSON.parse(savedMessage).message;
    }
}