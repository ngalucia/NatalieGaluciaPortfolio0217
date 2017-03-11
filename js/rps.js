/* globals $*/
var userChoice = prompt( "What's your move, dude? Choose 'rock', 'paper', 'scissors'" );
var computerChoice = "rock";
var rng = Math.random();
var winner = "user";

if( rng < 0.33 ){
    computerChoice = "paper";
}
else if( rng > 0.66 ){
    computerChoice = "scissors";
}

if( userChoice === "scissors" ){
    if( computerChoice === "rock" ){
        winner = "computer";
    }
    else if( userChoice === "scissors" ){
        if( computerChoice === "paper" ){
            winner = "user";
        }
        else if( userChoice === "scissors" ){
            if( computerChoice === "scissors" ){
                winner = "none";
            }
        }
    }
}

if( userChoice === "paper" ){
    if( computerChoice === "rock" ){
        winner = "user";
    }
    else if( userChoice === "paper" ){
        if( computerChoice === "scissors" ){
            winner = "computer";
        }
        else if( userChoice === "paper" ){
            if( computerChoice === "paper" ){
                winner = "none";
            }
        }
    }
}

if( userChoice === "rock" ){
    if( computerChoice === " scissors" ){
        winner = "user";
    }
    else if( userChoice === "rock" ){
        if( computerChoice === "paper" ){
            winner = "computer";
        }
        else if( userChoice === "rock" ){
            if( computerChoice === "rock" ){
                winner = "none";
            }
        }
    }
}

$( "#output" ).append( "<ul>" );
$( "#output ul" ).append( "<li> Good job, " + winner + " you win! </li>" );
/* console.log( "User Choice: ", userChoice );*/
/* console.log( "Computer Choice: ", computerChoice );*/
