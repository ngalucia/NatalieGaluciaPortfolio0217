var nameTest = function nameTest( name ){
    if( !name ){
        alert( "please input a string!" );
    }
    else if( name === "Natalie" ){
        alert( "Welcome to your website!" );
    }
};

nameTest( prompt( "What's your name?" ) );
