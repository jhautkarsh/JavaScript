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