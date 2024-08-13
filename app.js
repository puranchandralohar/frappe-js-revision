// JavaScript - It is used to add interactivity

// console.log("Hello World");

// Variable - It is used to store data

// var, let, const

// const box; // defining a variable

// box = "apples"; //assigning a value to a variable

// console.log(box); // printing the value of a variable

// const box = "apples";
// const Box = "apples";

// console.log(box);

// Let is introduced in ES6

// let box = "apples";

// box = "oranges"; // updating my variable

// box = 10;

// console.log(box);


// Var - we can redeclare and update the variable
// let - we can update the variable but not redeclare
// const - we can't redeclare and update the variable

// var box = "apples";

// let box = "oranges"; // updating my variable

// console.log(box);

// Data Types
// 1. Primitive Data Types - String, Number, Boolean, Null, Undefined, Symbol
// 2 . Non-Primitive Data Types - Object

// // String
// let word = "Hello World";
// let word1 = 'hello';
// let word2 = `hello`;

// // Number
// let number = 10;
// let number1 = 10.5;
// let number2 = -6;

// // Boolean
// let value = true;
// let value1 = false;

// // Null
// let empty = null;

// // Undefined
// let blank;

// Non-Primitive Data Types

// Arrays - It is used to store multiple values in a single variable
// index start with 0

// let items = ["apple", 200, true, null];

// console.log(items[2])

// Object - It is used to store multiple values in a single variable
// key-value pair

// let items = {
//     "fruitName" :"apple",
//     "price": 200,
//     "isAvailable": true,
// }

// let price = 300;

// // dot notation
// // square bracket notation

// // console.log(items.fruitName)
// // console.log(items.price)

// console.log(items["fruitName"])
// console.log(items["price"])


// Operators
// Arithmetic Operators - +, -, *, /, %, ++, --


// console.log(16);

// Assignment Operators - =, +=, -=, *=, /=, %=

// let x = 10;
// x = x - 1;
// // x -= 1;

// console.log(x);

// Control Statements

// If-Else Statement

// if(condition){
//     // code
// }

// let age = 19;
// let voterCard = false;

// if(age >= 18){
//     if(voterCard){
//         console.log("You can vote");
//     }
//     else{
//         console.log("You can't vote coz you don't have voter card");
//     }
// }
// else{
//     console.log("You can vote");
// }

// Ternary Operator -

// let age = 10;
console.log(age >18 ? "You can vote" : "You can't vote");


// Switch Case

// switch(expression){
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
// }

// let age = 70;

// switch(age){
//     case 19:
//         console.log("You are 19 years old and you can vote");
//     case 10:
//         break;
//         console.log("You are 10 years old and wait untill you turn 18");
//         break;
//     case 90:
//         console.log("You are 90 years old , you don't have to come polling booth");
//         break;
//     default:
//         console.log("Enter a valid age");
// }



// Loops
// For Loop
// While
// Do-While


// syntax
// for(initialization; condition; increment/decrement){
//     // code
// }

// Print a table of 5
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15

// for(let i = 1; i<=10; i=i+1 ){   //  i = 1, 1<10
//     console.log(5*i);           // 5*1 = 5, 5*2 = 10
// }


// let arr = [10, 20, 30, 40, 50];

// console.log(arr.length)

// arr method - length

// for(let i = 0; i<arr.length; i++){   // 0 < 5
//     console.log(arr[i]);               // arr[0]
// }

// Do-while loop
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);



//  Take a year and check whether it is a leap year or not ,
//  using if-else statement and switch case

// you have to print table of 9 using for loop but you have to skip 3rd multiple of 9
//  table of 5, 50 to 5 (Inverse)

// let array = ["apples", "oranges", "bananas", "grapes", "carrot"];
// which one is vegetable