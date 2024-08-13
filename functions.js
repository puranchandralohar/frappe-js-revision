// Functions and Objects

// Functions - 
// It is a block of code that perform a specific task.
// To avoid repetition of code.

// Create one and use many times.

// code for adding two numbers

// Delecation of function

// function functionName(){
//     // Code to be executed
// }


// let product = {
//     "name": "Mobile",
//     "price": 20000,
//     "quantity": 2,
//     "color": "black",
//     "company":{
//         "name": "Samsung",
//         "location": "Korea"
//     },
// }

// Function definition, declaration
// a fucntion always returns a value, if we use return keyword, 
// if there is no return, it will return undefined

// function totalPrice(){
//     let totalAmount;
//     totalAmount = product.price * product.quantity
//     return totalAmount;
// }

// Call the function, Execution of function
// let result = totalPrice();

// console.log(totalPrice());

// Parameters and Arguments

// function add(number1, number2){  // accept value - parameters
//     return number1 + number2;
// }

// console.log(add(30,40));  // pass value - arguments
// console.log(add(4,6));

// Fucntions are called First Class Citizens in JavaScript
// Functions can be stored in a variable
// Functions can be passes as an argument
// Functions can be returned from another function
// function can be stored in an object


// function multiply(a,b){
//     return a+b;
// }

// // multiply(2,3);

// let result = multiply;

// console.log(result(10,50));

// let tanzil = result;

// console.log(tanzil("Hello", "World"));

// function sayHii(gm){
//     let result = gm();
//     return `Hello, ${result}`;
// }


// function greet(){
//     return "Good Morning";
// }

// const result = sayHii(greet)   // greet is a callback function
//                                 // SayHii is a higher order function

// console.log(result);

// When you pass a function as an argument, it is called a callback function.
// When a function accepts another function as an argument,
// it is called a higher order function.


// function helloClass(word){
   
//     return function sayBye(greet){
//         return greet + " " + word;
//     }
// }

// let result = helloClass("Tanzil");

// let show = result("Welcome");

// console.log(show);

// Types of Functions
// Regular Functions
// Function Expression
// Anonymous Function
// IIFE Function
// Arrow Function

// Function Expression
// Hoisting

// function sayHello(){
//     return "Hello";
// }

// let sayHello = function(){
//     return "Hello";
// }

// IIFE Function - Immediately Invoked Function Expression, Self Executing Function
// (function(){
//     console.log("Hello");
// }())


// Arrow Function

// Return Keyword is optional in arrow function
// Return - Explicit return
// No Return - Implicit return

// let sayHello = ()=> "Hello"

// console.log(sayHello());

 let printHello = (word, runtime)=>{
    for(let i=1;i<=runtime; i++){
        console.log(word);
    }
}


printHello("Hello", 5);
