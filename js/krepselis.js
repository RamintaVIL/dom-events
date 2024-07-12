// const buttonsDOM = document.querySelectorAll('button');
// const minusDOM = buttonsDOM[0];
// const plusDOM = buttonsDOM[1];
// const resultDOM = document.querySelector('.one > div');

// console.log(minusDOM);
// console.log(plusDOM);
// console.log(resultDOM);

// spaudziant + arba - sumazeja arba padideja per 1vnt
// function minusOne() {
//     resultDOM.textContent = '-1'
    // arba galime naudoti
    // resultDOM.innerText 
// }
// minusDOM.addEventListener('click', minusOne);

// function plusOne() {
//     resultDOM.textContent = '+1';
// }
// plusDOM.addEventListener('click', plusOne);

// kad didetu arba mazetu atitinkamai
// let total = 0;

// function minusOne() {
//     total --;
//     resultDOM.textContent = total;
// }

// function plusOne() {
//     total ++;
//     resultDOM.textContent = total;
// }
// minusDOM.addEventListener('click', minusOne);
// plusDOM.addEventListener('click', plusOne);

// su krepsinio taskais
const buttonsDOM = document.querySelectorAll('button');
const minus3DOM = buttonsDOM[0];
const minus2DOM = buttonsDOM[1];
const minus1DOM = buttonsDOM[2];
const plus1DOM = buttonsDOM[3];
const plus2DOM = buttonsDOM[4];
const plus3DOM = buttonsDOM[5];
const resultDOM = document.querySelector('.one > div');
// bandymas sutrumpinti funkcija:
let total = 0;

function update(coof = 0) {
    total += coof;
    resultDOM.textContent = total;
}

minus1DOM.addEventListener('click', () => update(-1));
minus2DOM.addEventListener('click', () => update(-2));
minus3DOM.addEventListener('click', () => update(-3));

plus1DOM.addEventListener('click', () => update(1));
plus2DOM.addEventListener('click', () => update(2));
plus3DOM.addEventListener('click', () => update(3));

// let total = 0;

// function minusOne() {
//     total --;
//     resultDOM.textContent = total;
// }
// function minusTwo() {
//     total -= 2;
//     resultDOM.textContent = total;
// }
// function minusThree() {
//     total -= 3;
//     resultDOM.textContent = total;
// }
// function plusOne() {
//     total ++;
//     resultDOM.textContent = total;
// }
// function plusTwo() {
//     total += 2;
//     resultDOM.textContent = total;
// }
// function plusThree() {
//     total += 3;
//     resultDOM.textContent = total;
// }
// minus1DOM.addEventListener('click', minusOne);
// minus2DOM.addEventListener('click', minusTwo);
// minus3DOM.addEventListener('click', minusThree);

// plus1DOM.addEventListener('click', plusOne);
// plus2DOM.addEventListener('click', plusTwo);
// plus3DOM.addEventListener('click', plusThree);

// pointerEvent - tai rodo tuos paspaudimus

