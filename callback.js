// Timer Functions -

// setTimeout, setInterval, clearInterval, clearTimeout

// setTimeout - Runs a function once after the interval of time.

// setTimeout(function, time); // time is in milliseconds
// setInterval - Runs a function repeatdly after the interval of time.

// function sayhello(){
//     console.log("Hello");
// }

// setTimeout(sayhello, 5000)
// setInterval(sayhello, 2000);

// clearInterval - Stops the execution of setInterval function.

// Callback Functions -
// Passed as an argument to another function.
// Call it later in the function.

// asycnchronous operations -  Callback, promises, async/await

// function sayhello(){
//     console.log("Hello");
// }

// function sayBye(callback){
//     callback();
//     console.log("Bye");
// }

// sayBye(sayhello);

// Task
// setTimeout(()=>{
//     console.log("Hello");
// },5000);

// API Calls - Data Fetching

// console.log("World");

// Data Show

// function sayHello(callback) {
//   setTimeout(() => {
//     console.log("Hello");
//     callback();
//   }, 5000);
  
// }

// function sayWorld() {
//   console.log("World");
// }

// sayHello(sayWorld);

// Prepare a Tea

// steps -  
// 1. Boil Water - 2 seconds
// 2. Add Tea Powder
// 3. Add Sugar
// 4. Add Milk
// 5. Boil it for 5 seconds
// 6. Serve it



function boilwater(callback){
    setTimeout(()=>{
        console.log("Boiling Water");
        callback();
    },2000)
}

function addIndredients(){
        console.log("Add Tea Powder");
        console.log("Add Sugar");
        console.log("Add Milk");
}

function boilTea(callback){
    setTimeout(()=>{
        console.log("Boiling Tea");
        callback();
    },5000)
}

function serveTea(){
    console.log("Serve Tea");
}

function prepareTea(){
    boilwater(addIndredients);
    boilTea(serveTea)

}

prepareTea();

// Task

// Senario-
// ATM
// Enter ATM
// Insert Card - 2sec
// Enter Pin -  2sec
// Select Language - 1sec
// Select Account -1sec
// Withdraw Money -1sec
// Processing waiting for cash - 3sec
// Collect Cash -2sec
// Remove Card -1sec
// Exit ATM

// Convert this into promises and async/await.