let scoreScreenHome = document.getElementById('home');
let scoreScreenOpp = document.getElementById('opponent');


let home = 0;
let opponent = 0;

let plusButton = (teamPoints) => {
    if (teamPoints === 'teamHome'){
        home += 5;
        scoreScreenHome.textContent = home;
    } else if(teamPoints === 'teamOpp'){
        opponent += 5;
        scoreScreenOpp.textContent = opponent;
    }
};

let minusButton = (teamPoints) => {
    if(teamPoints === 'teamHome' && home > 0){
        home -= 5;
        scoreScreenHome.textContent = home;
    } else if(teamPoints === 'teamOpp' && opponent > 0){
        opponent -= 5;
        scoreScreenOpp.textContent = opponent;
    }
};

let resetBtn = () => {
    home = 0;
    opponent = 0;
    scoreScreenHome.textContent = home;
    scoreScreenOpp.textContent = opponent;
}


//media queries section
function updatedTeamNames(){
    
    const oppSideName = document.getElementById('opponentName');
    
    const mediaQuery = window.matchMedia(`(max-width: 878px)`);
    
    mediaQuery.matches ? oppSideName.textContent = "Opp" : oppSideName.textContent = "Opponent";
}

updatedTeamNames();
window.addEventListener("resize", updatedTeamNames);

