let home = 0;
let opponent = 0;

let scoreHome = document.getElementById('home');
let scoreOpp = document.getElementById('opponent');


const plusButton = (teamPoints) => {
    if (teamPoints === 'teamHome'){
        home += 5;
        scoreHome.textContent = home;
    } else if(teamPoints === 'teamOpp'){
        opponent += 5;
        scoreOpp.textContent = opponent;
    }
};

const minusButton = (teamPoints) => {
    if(teamPoints === 'teamHome' && home > 0){
        home -= 5;
        scoreHome.textContent = home;
    } else if(teamPoints === 'teamOpp' && opponent > 0){
        opponent -= 5;
        scoreOpp.textContent = opponent;
    }
};

let resetBtn = () => {
    home = 0;
    opponent = 0;
    scoreHome.textContent = home;
    scoreOpp.textContent = opponent;
}