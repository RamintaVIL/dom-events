const teams1Score = [
    {
        score: '+3',
    },
    {
        score: '+3',
    },
    {
        score: '+2',
    },
    {
        score: '+3',
    },
    {
        score: '+1',
    }
];
const teams2Score = [
    {
        score: '2',
    },
    {
        score: '3',
    },
    {
        score: '1',
    },
    {
        score: '1',
    },
    {
        score: '3',
    },
    {
        score: '2',
    },

];

const teams1Score0DOM = buttonDOM[0];
const teams1Score1DOM= buttonDOM[1];
const teams1Score2DOM = buttonDOM[2];
const teams2Score0DOM = buttonDOM[3];
const teams2Score1DOM = buttonDOM[4];
const teams2Score2DOM = buttonDOM[5];
const resultDOM = document.querySelector('.buttonContainer > div');

let team1Score = 0;
let team2Score = 0;

function team1One() {
    team1Score += 1;
    resultDOM.textContent = team1Score;
}
function team1Two() {
    team1Score += 2;
    resultDOM.textContent = team1Score;
}
function team1Three() {
    team1Score += 3;
    resultDOM.textContent = team1Score;
}
function team2One() {
    team2Score ++;
    resultDOM.textContent = team2Score;
}
function team2Two() {
    team2Score += 2;
    resultDOM.textContent = team2Score;
}
function team2Three() {
    team2Score += 3;
    resultDOM.textContent = team2Score;
}
teams1Score0DOM.addEventListener('click', team1One);
teams1Score1DOM.addEventListener('click', team1Two);
teams1Score2DOM.addEventListener('click', team1Three);

teams2Score0DOM.addEventListener('click', team2One);
teams2Score1DOM.addEventListener('click', team2Two);
teams2Score2DOM.addEventListener('click', team2Three);

// const appDOM = document.getElementById('app');
// const teams1ScoreDOM = document.querySelector('teams1Score');
// const teams2ScoreDOM = document.querySelector('teams2Score');
// const buttonDOM = document.querySelector('button');

// let team1Score = 0;
// let team2Score = 0;

// function totalresult() {
//     if (team1Score === '+3'){
//         buttonDOM.addEventListener('click', totalresult);
//     }
// }

