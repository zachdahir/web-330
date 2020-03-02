/*
============================================
; Title: Assignment 2.2
; Author: Zach Dahir
; Date: 2-25-20
; Description: Prototyping
;===========================================
*/
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 2.2"));

//object that returns age
var person = {
    getAge: function(){
        return this.age;
    }
};

//creating a person object with 2 values
var zach = Object.create(person, {
    "age": 
    {
        "value": "23"
    },

    "fullName": 
    {
        "value": "Zachary Dahir"
    }
})

//passing zach object into getAge to return age as well as printing zach fullName
console.log(zach.getAge());
console.log(zach.fullName);
// end program



