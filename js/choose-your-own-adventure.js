var story = {
    "enter": "Walking into target one day with only twenty minutes to shop.   You notice in your cartwheel app that there a ton of good deals going on, but not for the things you came for.  Do look everywhere and risk not getting what you need or just find what you need?",
    "look everywhere": "You decide to look everywhere and there’s 40% off in clothes!  You have to look now and try a few things on.  Do you end up wasting all of your time or are you quick enough to find a new shirt and everything else you need?",
    "find what you need": "Well that was boring!  Now you missed out on getting a free $10 giftcard for trying on a shirt!  That’s too bad for you.",
    "waste time": "It’s really too bad you didn’t get everything else you needed, now you’ll just have to make another trip and at least you got your free $10 giftcard too!",
    "quick enough": "Excellent job!  You’re a pro target shopper who knows how to handle any challenge that comes your way."
};


var output = document.querySelector( "#output" );
var secondAction;

var runStory = function runStory( choice ){
    var firstAction = prompt( story[choice] );

    if( firstAction === "look everywhere" ){
        secondAction = prompt( story["look everywhere"] );
    }
    else if( firstAction === "find what you need" ){
        secondAction = prompt( story ["find what you need"] );
    }
    else{
        output.textContent = "You have to choose and get your shopping done!";
    }
};

runStory( "enter" );
