/*
============================================
; Title: Assignment 1.4
; Author: Zach Dahir
; Date: 2-19-20
; Description: Duck Typing
;===========================================
*/
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 1.4"));


//constructor function for a Car, taking 1 parameter
function Car(model){
    this.model = model
}

Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
}

//constructor function for a Truck, taking 2 parameters
function Truck(model, year){
    this.model = model,
    this.year = year
}

Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}

//constructor function for a Jeep, taking 3 parameters
function Jeep(model,  year, color){
    this.model = model,
    this.year = year,
    this.color = color
}

Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}

//creating an empty array
var raceTrack = [];

//function to start function and push vehicle into racetrack array
function driveIt(vehicle){
    vehicle.start();
    raceTrack.push(vehicle);
}

//creating vehicles 
var Prius = new Car("Prius");
var Ram = new Truck("Ram", "2018");
var Compass = new Jeep("Compass", "2016", "Red");

console.log("");

//passing each vehicle into driveIT
driveIt(Prius);
driveIt(Ram);
driveIt(Compass);

console.log("");
console.log("-- The following vehicles have been added to the racetrack --");

//for loop to display each vehicles type/model
for(var x = 0; x < raceTrack.length; x++){
    console.log(raceTrack[x].constructor.name + ": " + raceTrack[x].model)
}
    
// end program