// buvo pakeistas tekstas iš labas rytas į laba diena.
const h1DOM = document.querySelector('h1');
// h1DOM.textContent = 'Laba diena!'
const buttonDOM = document.querySelector('button');

// prirašius paskutinę eilutę, console išsispausdino tekstas. 
// function doSomethingSilly() {
//     console.log('silly silly me...');   
// }
// doSomethingSilly();

// cia yra metodas, kuris priima 2 dalykas. 
// 1) koks įvykis, nori, kad būtų stebima? Mūsų atveju, kai bus paspaustas mygtukas. 'click' nes pele turi pagrindini ir nepagrindini mygtuka. 
// 2) ką daryti, kai tas 'click' atsitiks? 
// buttonDOM.addEventListener('click', doSomethingSilly);

// uz funkcijos yra skliaustai, tai ji yra iš karto paleidžiama; Geriau ju nedėti
// buttonDOM.addEventListener('click', doSomethingSilly());

// kitas pvz
function updateText() {
    h1DOM.textContent = 'Laba diena!'
}
buttonDOM.addEventListener('click', updateText);

// kai kalba eina apie manipuliavima turiniu, susirandu elementą ant kurio įvykį stebėsiu, šiuo atveju button. buttonDOM.