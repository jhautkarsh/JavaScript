// Lecture 1 : Setting up the Enviroment 

console.log("Utkarsh");


// Lecture 2 : Variables

const  accountId =  12345; // this is permanent & cannot change
let accountEmail = "utkarsh@gmail.com"; // this can change
var accountPassward = "12345"; // prefer not to use it because of issue in block scope
accountCity = "jaipur"; //  this is a  bad way to declare a keword
let accountState; // this is undefined because we dont inesialize this 

// accountId = 2 // not allowed
console.log(accountEmail); // normally print the data

console.table([accountEmail , accountPassward , accountCity , accountState]); //print data in tabe format



// Lecture 3 : Data Types


let name = "utkarsh"    // String
let age = 18            // integer => 2 to power 53
let isloggedIn = true   // Boolean
let newName ;           // Undefined
let temprature = null   // Standerd value


console.log(typeof "utkarsh")  // String
console.log(typeof name)       // String
console.log(typeof age)        // Integer
console.log(typeof undefined)  // undefined
console.log(typeof null)       // Object


// Lectures 4 : Conversion

let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber);


// "33"   => 33
// "33abc"=> NaN
// true => 1 ||  false => 0


let isloggedIn2 = 1
let BooleanIsLoggedIn = Boolean(isloggedIn2);
console.log(BooleanIsLoggedIn); // true

//  0 => false || 1 => true
// "" => false
// "name" = true

let num = 33;
let numToStr = String(num)
console.log(typeof numToStr); // String

// Lecture 5 : Operations

let value = 3
let negvalue = -value
console.log(negvalue);


console.log(2 + 2); // Addition
console.log(2 - 2); // Substraction
console.log(2 * 2); // multiplication
console.log(2 / 2); // division
console.log(2 ** 2);// power

console.log("1" + 2)
console.log(1 + '2')
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let gameScore = 100
++gameScore // prefix increment 
gameScore++ // postfix increment

console.log(gameScore)