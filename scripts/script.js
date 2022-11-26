const userScoreEl = document.querySelector('.user-score');
const compScoreEl = document.querySelector('.comp-score');


//variables
let userScore = 0;
let compScore = 0;


const getCompChoice = function(){
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    if(randomNumber == 1){
        return 'rock';
    }else if(randomNumber == 2){
        return 'paper';
    }else if(randomNumber == 3){
        return 'scissor';
    }else if(randomNumber == 4){
        return 'lizard';
    }else if(randomNumber == 5){
        return 'spock';
    }
};

const playGame = function(weapon) {
    const user = weapon;
    const comp = getCompChoice();

    const result = getResult(user , comp);

    if(result === 'WON'){
        userScore = userScore + 1;
    }else if (result === 'LOST'){
        compScore = compScore + 1;
    }
    userScoreEl.innerText = userScore;
    compScoreEl.innerText = compScore;

    document.querySelector('.user-choice').innerText=`You selceted : ${user}`;
    document.querySelector('.comp-choice').innerText=`Computer selceted : ${comp}`;
    document.querySelector('.result').innerText=`The Result is ${result} ! `;
};

const getResult = function (userChoice,compChoice){
    if (userChoice === 'rock'){
        if (compChoice === 'rock'){
            return 'DRAW';
        } else if (compChoice === 'paper'){
            return 'LOST';
        } else if (compChoice === 'scissor'){
            return 'WON';
        } else if (compChoice === 'lizard'){
            return 'WON';
        } else if (compChoice === 'spock'){
            return 'LOST';
        }
    } else if (userChoice === 'paper'){
        if (compChoice === 'rock'){
            return 'WON';
        } else if (compChoice === 'paper'){
            return 'DRAW';
        } else if (compChoice === 'scissor'){
            return 'LOST';
        } else if (compChoice === 'lizard'){
            return 'LOST';
        } else if (compChoice === 'spock'){
            return 'WON';
        }
    } else if (userChoice === 'scissor'){
        if (compChoice === 'rock'){
            return 'LOST';
        } else if (compChoice === 'paper'){
            return 'WON';
        } else if (compChoice === 'scissor'){
            return 'DRAW';
        } else if (compChoice === 'lizard'){
            return 'LOST';
        } else if (compChoice === 'spock'){
            return 'LOST';
        }
    } else if (userChoice === 'scissor'){
        if (compChoice === 'rock'){
            return 'LOST';
        } else if (compChoice === 'paper'){
            return 'WON';
        } else if (compChoice === 'scissor'){
            return 'DRAW';
        } else if (compChoice === 'lizard'){
            return 'WON';
        } else if (compChoice === 'spock'){
            return 'LOST';
        }
    } else if (userChoice === 'lizard'){
        if (compChoice === 'rock'){
            return 'LOST';
        } else if (compChoice === 'paper'){
            return 'WON';
        } else if (compChoice === 'scissor'){
            return 'LOST';
        } else if (compChoice === 'lizard'){
            return 'DRAW';
        } else if (compChoice === 'spock'){
            return 'WON';
        }
    } else if (userChoice === 'spock'){
        if (compChoice === 'rock'){
            return 'WON';
        } else if (compChoice === 'paper'){
            return 'LOST';
        } else if (compChoice === 'scissor'){
            return 'WON';
        } else if (compChoice === 'lizard'){
            return 'LOST';
        } else if (compChoice === 'spock'){
            return 'DRAW';
        }
    }
}
