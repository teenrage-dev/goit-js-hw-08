import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector(".feedback-form input"),
}

const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput, 500))

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    refs.form.reset();
}

function onTextareaInput() {
    const message = {
        email: refs.input.value,
        message: refs.textarea.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(message));
}

function populateTextarea() {
    try{
        const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || ``;
        if (savedMessage){
            const getMessage = savedMessage.message;
            const getEmail = savedMessage.email;
            refs.textarea.value = getMessage;
            refs.input.value = getEmail;
        }
    }
    catch{
        console.log("error");
    }
}


// Залишилосчь зробити так щоб в локал сторедж повертало емайл занчення емайлу інпута, а message значення textare message.
