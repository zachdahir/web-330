/*
============================================
; Title: Assignment 1.3
; Author: Zach Dahir
; Date: 2-19-20
; Description: Class refresher
;===========================================
*/
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 1.3"));

//constructor function for cellphone object with 4 parameters
function cellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer,
    this.model = model,
    this.color = color,
    this.price = price

//get function for price
    this.getPrice = function(){
        return this.price;
    }

//get function for model
    this.getModel = function(){
        return this.model;
    }

//get function to return a string of information
    this.getDetails = function(){
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: $" + this.getPrice();
    }
}

//creating new cellPhone object
var myPhone = new cellPhone("Apple", "Iphone 7", "Black", "300");

console.log("");

//printing off the details of myPhone
console.log(myPhone.getDetails());

// end program