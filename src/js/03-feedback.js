import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormState = () => {
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
};

const updateFormFields = () => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        const formState = JSON.parse(savedState);
        emailInput.value = formState.email;
        messageInput.value = formState.message;
    }
};

const clearFormState = () => {
    localStorage.removeItem(STORAGE_KEY);
    emailInput.value = '';
    messageInput.value = '';
};

const handleInputChange = throttle(saveFormState, 500);

const handleSubmit = evt => {
    evt.preventDefault();
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formState);
    clearFormState();
};

feedbackForm.addEventListener('input', handleInputChange);
feedbackForm.addEventListener('submit', handleSubmit);

updateFormFields();