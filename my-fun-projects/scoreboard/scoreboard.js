let scoreScreenTeam = document.getElementById('team');
let scoreScreenOpp = document.getElementById('opponent');


let team = 0;
let opponent = 0;
const teamTeam = ('teamTeam');
// const plusOneTeam = ('plusOneTeam');
// const plusTwoTeam = ('plusTwoButton');
// const plusThreeTeam = ('plusThreeButton');

const teamOpp = ('teamOpp');
// const plusOneOpp = ('plusOneOpp');
// const plusTwoOpp = ('plusTwoOpp');
// const plusThreeOpp = ('plusThreeOpp');

let plusButton = (Points) => {
    teamTeam === Points ? scoreScreenTeam.textContent = team += 6 : teamOpp === Points ? scoreScreenOpp.textContent = opponent += 6 : 0;
};

const minusButton = (Points) => {
    teamTeam === Points && team > 5 ? scoreScreenTeam.textContent = team -= 6 : teamOpp === Points && opponent > 5 ? scoreScreenOpp.textContent = opponent -= 6 : 0;
};

// Below is the code for the secondary buttons for adding points
                const plusOneButton = (Points) => {
                    Points === 'plusOneTeam' ? scoreScreenTeam.textContent = team += 1 : Points === 'plusOneOpp' ? scoreScreenOpp.textContent = opponent += 1 : 0;
                };
                const plusTwoButton = (Points) => {
                    Points === 'plusTwoTeam' ? scoreScreenTeam.textContent = team += 2 : Points === 'plusTwoOpp' ? scoreScreenOpp.textContent = opponent += 2 : 0;
                };
                const plusThreeButton = (Points) => {
                    Points === 'plusThreeTeam' ? scoreScreenTeam.textContent = team += 3 : Points === 'plusThreeOpp' ? scoreScreenOpp.textContent = opponent += 3 : 0;
                };

                // const plusOneButton = (Points) => {
                //     plusOneTeam === Points ? scoreScreenTeam.textContent = team += 1 : plusOneOpp === Points ? PointsscoreScreenOpp.textContent = opponent += 1 : 0;
                // };
                // const plusTwoButton = (Points) => {
                //     plusTwoTeam === Points ? scoreScreenTeam.textContent = team += 2 : plusTwoOpp === Points ? PointsscoreScreenOpp.textContent = opponent += 2 : 0;
                // };
                // const plusThreeButton = (Points) => {
                //     plusThreeTeam === Points ? scoreScreenTeam.textContent = team += 3 : plusThreeOpp === Points ? scoreScreenOpp.textContent = opponent += 3 : 0;
                // };

let resetBtn = () => {
    team = 0;
    opponent = 0;
    scoreScreenTeam.textContent = team;
    scoreScreenOpp.textContent = opponent;
};

//media queries section
function updatedTeamNames(){
    
    const oppSideName = document.getElementById('opponentName');
    
    const mediaQuery = window.matchMedia(`(max-width: 878px)`);
    mediaQuery.matches ? oppSideName.textContent = "Opp" : oppSideName.textContent = "Opponent";
};

updatedTeamNames();
window.addEventListener("resize", updatedTeamNames);

