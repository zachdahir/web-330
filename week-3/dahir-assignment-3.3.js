/*
============================================
; Title: Assignment 3.3
; Author: Zach Dahir
; Date: 3-3-20
; Description: Singleton Pattern
;===========================================
*/
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 3.2"));


var databaseSingleton = (function(){
    var instance;
    function createInstance(){
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function(){
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//singleton test for oracle and informix databases
function databaseSingletonTest(){
    var oracle = databaseSingleton.getInstance();
    var informix = databaseSingleton.getInstance();
    
    console.log("Same database instances? %s", oracle === informix);
}

//output
databaseSingletonTest();
// end program