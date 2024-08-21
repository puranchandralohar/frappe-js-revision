// Promises -
// Promises are a way to handle asynchronous operations in JavaScript.
// Object that may produce a Single value some time in the future:
//  either a resolved value,
// or a reason that it's not resolved.

// Rocky > Moms Promise
// Promise start : pending
// Rocky > get the all golds : Fulfilled
// Rocky > Failed (Killed by Garuda) : Failed

// Promise States:
// Pending: Initial State, before the Promise succeeds or fails.
// Fulfilled: Completed Promise : Value
// Rejected: Failed Promise : Reason

// Prmoise Constructor

// let MomsPromise = new Promise(function(resolve, reject){
//     // resolve(0);
//     reject("Network error");
// })

// // console.log(MomsPromise);
// // .then() - promise is fulfilled - value
// // .catch() - promise is rejected - reason
// // .finally() - promise settle

// MomsPromise.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise settle")
// })

// Prepare a Tea

// steps -
// 1. Boil Water - 2 seconds
// 2. Add Tea Powder
// 3. Add Sugar
// 4. Add Milk
// 5. Boil it for 5 seconds
// 6. Serve it

function boilwater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Boiling Water");
    }, 2000);
  });
}

function addIndredients() {
  return new Promise((resolve, reject) => {
    resolve("Add Tea, Sugar, Milk");
    // reject("We are out of Tea Powder");
  });
}

function boilTea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Boiling Tea");
    reject("Gas is not available");
    }, 5000);
  });
}

function serveTea() {
  return new Promise((resolve, reject) => {
    resolve("Serve Tea");
  });
}

function prepareTea() {
  boilwater()
    .then((value) => {
      console.log(value);
      return addIndredients();
    })
    .then((value) => {
      console.log(value);
      return boilTea();
    })
    .then((value) => {
      console.log(value);
      return serveTea();
    })
    .then((value) => {
      console.log(value);
    }).catch((error)=>{
        console.log(error);
    })
}

prepareTea();
