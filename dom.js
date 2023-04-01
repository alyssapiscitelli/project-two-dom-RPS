let winsScore =0;
let tiesScore =0;
let lossesScore=0;
const wins_span = document.getElementById('wins');
const ties_span = document.getElementById('ties');
const losses_span = document.getElementById('losses');


const result_p =document.querySelector("div.result");

const rock_div =document.getElementById('rock');
const paper_div =document.getElementById('paper');
const scissors_div =document.getElementById('scissors');


function getComputerChoice () 
    {
        const choices =['rock','paper','scissors'];
        const randomNumber=Math.floor(Math.random()*3);
        return choices[randomNumber];
   
    } 
    
    function win(userChoice,computerChoice) 
    {
     winsScore++;
    wins_span.innerHTML = 'Wins: ' +winsScore;
     }        
    
     function lose (userChoice,computerChoice)
    {
    lossesScore++
    losses_span.innerHTML= "Lose: "  +lossesScore;
    }   
     function tie(userChoice,computerChoice)
        {
    tiesScore++
    ties_span.innerHTML='Ties: ' +tiesScore;
   
   
        };

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'paper'+'rock':
        case 'paper'+'rock':
        case 'scissors'+'paper':
        win(userChoice,computerChoice);
            break;
         console.log('your the winner');
        case 'rock'+'paper':
        case 'paper'+'scissors':
        case 'scissors'+'rock':
        console.log("computer wins")
        lose(userChoice,computerChoice);
            break; 
        case 'rock'+'rock':
        case 'paper'+'paper':
        case 'scissors'+'scissors':
        tie(userChoice,computerChoice);
            break;
    }   console.log('Its a tie!!!!');

    
 

}

function main(){
    rock_div.addEventListener('click', function(){
        game('rock');

    })

    paper_div.addEventListener('click', function(){
        game('paper');
    })

    scissors_div.addEventListener('click', function(){
        game('scissors')

    })
}
main();