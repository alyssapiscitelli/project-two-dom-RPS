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
    
    function win() 
    {
     winsScore++;
    wins_span.innerHTML = 'Wins: ' +winsScore;
    console.log(winsScore)
     };        
    
     function lose ()
    {
    lossesScore++
    losses_span.innerHTML= "Lose: "  +lossesScore;
    };  
     function tie()
        {
    tiesScore++
    ties_span.innerHTML='Ties: ' +tiesScore;
   
   
        };

function game(userChoice) {
    const computerChoice = getComputerChoice();

   if (userChoice== 'rock' && computerChoice == 'scissors'){
    win();}
    else if(userChoice =='rock' &&computerChoice=='paper'){
    lose();}
   else if (userChoice== 'rock'&& computerChoice=='rock'){
        tie();
    }
    else if (userChoice=='paper'&& computerChoice=='scissors'){
        lose();
    }
    else if (userChoice=='paper'&&computerChoice=='rock'){
        win();
    }
    else if(userChoice=='paper'&&computerChoice=='paper'){
        tie();
    }
    else if (userChoice=='scissors'&&computerChoice=='paper'){
        win();
    }
    else if (userChoice=='scissors'&&computerChoice=='rock'){
        lose();
    }
    else if (userChoice=='scissors'&&computerChoice=='scissors'){
        tie();
    }
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