var story = {
    "enter": "You walk into Target and you can either one hundred and eighty dollars to spend in twenty minutes or ten dollars to spend in an hour. Which do you choose more or less?",
    "more": "You can only choose two items and need to make sure you spend all one hundred eighty dollars or you risk losing it it all. You better have your shopping shoes on!",
    "less": "You have to buy at least five items for your ten dollars or you lose the challenge and the dollar secion is off limits.",
    "lose": "You lose, because this was the wrong choice and an impossible task.",
    "choose": "Do you go first to the clothes or housewares?"
};


var output = document.querySelector( "#output" );
var secondAction;

var runStory = function runStory( choice ){
    var firstAction = prompt( story[choice] );

    if( firstAction === "more" ){
        secondAction = prompt( story.more );
    }
    else if( firstAction === "less" ){
        secondAction = prompt( story.lose );
    }
    else{
        output.textContent = "Not quite, try again.";
    }
};

runStory( "enter" );
