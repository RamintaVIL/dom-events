const buttonsDOM = document.querySelectorAll('.hello button');
const name1DOM = buttonsDOM[0];
const name2DOM = buttonsDOM[1];
const name3DOM = buttonsDOM[2];
const name4DOM = buttonsDOM[3];
const resultDOM = document.querySelector('.hello > div');

function sayHello(name) {
    resultDOM.textContent = name;
}

name1DOM.addEventListener('click', () => sayHello('Labas, as esu Jonas'));
name2DOM.addEventListener('click', () => sayHello('Labas, as esu Maryte'));
name3DOM.addEventListener('click', () => sayHello('Labas, as esu Petras'));
name4DOM.addEventListener('click', () => sayHello('Labas, as esu Ona'));

