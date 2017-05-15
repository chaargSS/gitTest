// 1 - creating a immediately invoked function with two inputs as globbal and jqwery as variables
(function( global , $ ){
    // 2- creating an function that return the object
    var Greetr = function (firstName , lastName , language) {
        return new Greetr.init(firstName , lastName , language); //returning object
    }
    
    //7-properties and chainable methods
    
    var supportedlanguages = [ 'en' , 'es' ];
    
    //greeting
    var greetings = {
        en : 'hello',
        es : 'hola'
    };
    
    //formal greeting
   var formalgreetings = {
        en : 'Greeting',
        es : 'Saludos'
    }; 
     
    //logger message
    var logMessage = {
        en : 'logged in',
        es : 'Inisio sesion'
    };
    
    //4-for any further function addition empty object is created first 
     Greetr.prototype = {
       
         //8-adding funtions
        
         //for fullname
       fullName : function() {
           return this.firstName + ' ' + this.lastName ;
       },
       
         // check language validation
       validate : function() {
          if( supportedlanguages.indexOf(this.language) === -1 )  {
               throw 'Invalid language'; //throwing error
           }
       },
       
         //greeting functing
       greeting : function () {
           return greetings[this.language] + " " + this.firstName ;
       },
         
         // formal greeting
       formalGreeting : function () {
           return formalgreetings[this.language] + " , " + this.fullName() ;
       },
       
         //making an chainable method
       greet : function(formal){
           var msg;
           if(formal){
               msg = this.formalGreeting(); //calling formalGreeting as formal is true
           } else {
               msg = this.greeting();
           }
           
           if(console){
               console.log(msg); //showing in console
           }
           
           return this;  //makes it as chainable method
       },
         
       //tell who is logged in according to his language
       log : function() { 
           if(console){
               console.log(logMessage[this.language] + ' : ' + this.fullName());
           };
           return this;           
       },
         
       //setting language
       setlanguage : function (lang) {
           this.language = lang;
           this.validate();
           return this;  //returning this means tey are chainable
       },
         
         //9- adding jquery selectors
         HTMLGreetings : function( selector ,formal) {
             if(!$) {
                 throw 'jQuery not loaded' ;
             }
             
             var msg;
             if(formal) {
                 msg = this.formalGreeting();
             }else {
                 msg = this.greeting();
             }
             
             $(selector).html(msg);
             
             return this ;
         }
       
   };  
    
    // 3-
    Greetr.init = function (firstName , lastName , language) {
        var self = this ;  // for further use if needed 
        self.firstName = firstName || '' ;
        self.lastName = lastName ||  '' ;
        self.language = language || 'en';
        
        self.validate();
    }
    
    //5- attaching all objects created by  Greetr.init(Greetr.init.prototype) with prototype of Greeter
    Greetr.init.prototype = Greetr.prototype ;
     
    //6- attaching G$ to greeting as shortcut //we have to attach it to global to call greetr globally
    global.Greetr = global.G$ = Greetr;
}(window , jQuery));

