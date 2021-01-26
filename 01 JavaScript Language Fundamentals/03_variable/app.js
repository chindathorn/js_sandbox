// // var, let, const

/* 
var is 
  - global variable scope
  - creating global properties
  - redeclaration
  - don't have temporal dead zones (creation and execution phase)
    + creation phase:  assigned storage spaces and immediately initialized to undefined
    + execution phase: the values specified by the assignments if there are ones. If there aren’t, the values of the variables remain undefined
let is 
  - local variable scope
  - can not creating global properties
  - can not redeclaration
  - have temporal dead zones
    + creation phase:  assigned storage spaces but are not initialized. Referencing uninitialized variables will cause a ReferenceError
    + execution phase: have the same execution phase as the var variables.
*/

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// // Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

var counter = 0;
console.log(window.counter); //  0

let counter = 0;
console.log(window.counter); // undefined

// // Letters, numbers, _, $
// // Can not start with number
// var 1name = 'John';
// var $name = 'John'; // with JQuery
// var _name = 'John'; // private variable


// // Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;

// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Stev Smith';
console.log(name);

// // CONST
// const name = 'John';
// console.log(name);
// can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
// const numbers = [1,2,3,4,5,6];

console.log(numbers);

// using const when we plan on value changing, anyone know that the value is no reassign