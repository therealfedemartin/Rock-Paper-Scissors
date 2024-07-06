
const container = document.querySelector('#container');
const partida = document.querySelector('#partida');
let scoreHuman = document.querySelector('#scoreHuman');
let scoreComputer = document.querySelector('#scoreComputer');
let humScore = 0;
let compScore = 0;
let pcSelection;


function playRound (hChoice,cChoice) {
       
    if (hChoice === cChoice) {
    partida.textContent = "Empate";
    
    } else if ((hChoice == "rock" && cChoice == "scissors") || (hChoice == "paper" && cChoice == "rock") || (hChoice == "scissors" && cChoice == "paper") ){
    humScore++;
    scoreHuman.textContent = humScore;
    partida.textContent = "Ganaste";
   
    } else {
    compScore++;
    scoreComputer.textContent = compScore;
    partida.textContent = "Perdiste";
    }
}


   
function playGame (hChoice) {
    let returnComputer = Math.floor(Math.random() * 3) + 1;  
    if (returnComputer == 1) {
        pcSelection = "rock";
    } else if (returnComputer == 2) {
        pcSelection = "paper";
    } else {
        pcSelection ="scissors";
    }
    playRound(hChoice, pcSelection);
}



container.addEventListener('click', (e) => {
  
   let target = e.target;
   
    if (humScore + compScore < 5) {

       switch(target.id) {
       case 'buttonRock':
           playGame("rock");
           break;
    
       case 'buttonPaper':
           playGame("paper");
           break;
      
       case 'buttonScissors':
           playGame("scissors");
           break;             
        }
    } else { 
        if (humScore > compScore) {
            partida.textContent = "Ganaste! Volvé a jugar.";
            humScore = 0;
            compScore = 0;
            scoreHuman.textContent = humScore;
            scoreComputer.textContent = compScore;
         
        } else {
            partida.textContent = "Perdiste! Volvé a jugar.";
            humScore = 0;
            compScore = 0;
            scoreHuman.textContent = humScore;
            scoreComputer.textContent = compScore;
        }   
    }

});





