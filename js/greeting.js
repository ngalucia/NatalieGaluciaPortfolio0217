var welcome = document.querySelector( "#prompt" );
var goodbye = document.querySelector( "#output" );
var responses = {
    "emptyInput": "<p>please <span class='style'>input</span> a string</p>",
    "correctName": "Welcome to your website!",
    "incorrectName": "<p>Please enter the <span class='emphasis'>CORRECT</span>name!</p>"

};

var nameTest = function nameTest( name ){
    if( !name ){
        welcome.innerHTML = responses.emptyInput;
    }
    else if( name === "Natalie" ){
        goodbye.textContent =  responses.correctName;
    }
    else{
        welcome.innerHTML = responses.incorrectName;
    }
};

console.log( welcome.textContent );
console.log( goodbye.textContent );

nameTest( prompt( "What's your name?" ) );
