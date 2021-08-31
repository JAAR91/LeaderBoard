import Row from "./domloader.js";

const printForm = () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('col-6', 'p-3', 'd-flex', 'flex-column');

    const labelTitle = document.createElement('h2');
    labelTitle.classList.add('my-3');
    labelTitle.textContent = 'Add your score';
    formContainer.appendChild(labelTitle);

    const nameInp = document.createElement('input');
    nameInp.classList.add('my-3');
    nameInp.placeholder = 'Your name';
    formContainer.appendChild(nameInp);

    const scoreInp = document.createElement('input');
    scoreInp.classList.add('my-3');
    scoreInp.placeholder = 'Your score';
    formContainer.appendChild(scoreInp);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('my-3');
    submitBtn.textContent = 'Submit';
    formContainer.appendChild(submitBtn);

    Row.appendChild(formContainer);
};

export default printForm;