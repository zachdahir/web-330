
/*/*
============================================
; Title: Assignment 3.2
; Author: Zach Dahir
; Date: 3-3-20
; Description: Factory Pattern
;===========================================
*/
 /*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 3.2"));

//function creating postgres server with 3 properties
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

//function creating MYSQL server with 4 properties
function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//function creating Oracle server with 4 properties
function Oracle(properties){
    this.username = properties.username || "o name";
    this.password = properties.password || "o pass";
    this.server = properties.server || "localhost: 8080";
    this.version = properties.version || "2.1";
}

//function creating Informix server with 3 properties
function Informix(properties){
    this.username = properties.username || "i name";
    this.password = properties.password || "i pass";
    this.server = properties.server || "localhost: 3000";
}

//database factory that checks class and returns properties
function DatabaseFactory() {}
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "Oracle"){
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === "Informix"){
        this.databaseClass = Informix;
    }
    if (properties.databaseType === "MySQL"){
        this.databaseClass = MySql;
    }

    return new this.databaseClass(properties);
};

//creating an Informix server with three properties
var InformixFactory = new DatabaseFactory();
var informix = InformixFactory.createDatabase({
    databaseType: "Informix",
    username: "mdamon",
    password: "strongpassword"
})

//creating an Oracle server with three properties
var OracleFactory = new DatabaseFactory();
var oracle = OracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "zdahir",
    password: "12345"
})

//output
console.log(oracle);
console.log(informix);

// end program