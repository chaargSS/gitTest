 var g = G$('jon' , 'doe');
console.log(g); // Greetr.init {firstName: "jon", lastName: "doe", language: "en"}
g.greet().greet(true);  // hello jon     Greeting , jon doe   // two outputs as hello jon for g.greet()  and  Greeting , jon doe for .greet(true)  //as its chainable method.
g.greet().setlanguage('es').greet(true);  //hello jon  Saludos , jon doe 
g.greet().setlanguage('ep').greet(true);  //hello jon   Uncaught Invalid language
g.log(); // logged in : jon doe


//using our library / framework in web page
//using our object with click event

$('#login').click( function(){
    
    var loginvar = G$('jon' , 'doe');
    $('#Logindiv').hide() ; 
    loginvar.setlanguage($('#lang').val()).HTMLGreetings('#greeting',true).log();  // on web page Greeting , jon doe   in terminal along with it logged in : jon doe  
});