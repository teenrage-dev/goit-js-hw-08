const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector(".feedback-form input"),
}

const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", onTextareaInput)

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    refs.form.reset();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onTextareaInput(evt) {
    const message = {
        email: evt.target.value,
        message: evt.target.value,
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(message));
}

function populateTextarea() {
    try{
        const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        if (savedMessage){
            const getMessage = savedMessage.message;
            const getemail = savedMessage.email;
            refs.textarea.value = getMessage;
            refs.input.value = getemail;
        }
    }
    catch{
        console.log("error");
    }

}


// Залишилосчь зробити так щоб в локал сторедж повертало емай   л занчення емайлу інпута, а message значення textare message.
