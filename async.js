// Async-await
// ES6 - It is a better way to write asynchronous code in a synchronous way.
// we use async await to write asynchronous code in synchronous way
// It always returns a promise
// readable code, cleaner code
// async code , synchronous way

// keyword -async
// if we write async keyword before a function, it returns a promise
// it always return a fulfilled/resolved promise
// It will alwyas returns a fulfilled state
// return value will be resolved value

// async function sayHii(){
//     return "Hello";
// }

// sayHii().then((value)=>{
//     console.log(value)
// })

// await keyword
// It is used inside an async function
// It waits for the promise to be resolved

function boilwater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("Boiling Water is done");
      resolve("Boiling");
    //   reject("Error occured");
    }, 5000);
  });
}

// async function prepareTea() {
//   let indredients = "Add Tea, Sugar, Milk";
//   await boilwater().then((value) => {
//     console.log(value);
//   });
//   console.log(indredients);
// }

// prepareTea();

// Scenario
// Going to a restaurant
// Enetering the restaurant
// Ordering the food - Rooti, Paneer, Rice (3 seconds)
// Waiting for the food - 5seconds
// delivery the food - 3seconds
// Eating the food - 10 seconds
// Paying the bill - 2 seconds
// Leaving the restaurant

// try, catch, finally, throw

async function prepareTea() {
    let indredients = "Add Tea, Sugar, Milk";
  try{
    let gas = false;
    if(gas){
        let resolvedValue = await boilwater();
        console.log(resolvedValue);
    }
    throw new Error("Gas is not available");
  }
  catch(error){
    console.log(error);
  }
  finally{
        console.log("done");
  }
}

prepareTea();
