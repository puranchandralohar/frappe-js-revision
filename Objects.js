// Object - Collection of Properties and Methods
// Property - Key Value Pair
// It is non-primitive data type

// Ways to create an Object
// 1. Object Literal
// 2. Object Constructor
// 3. Object.create() method
// 4. Class

// 1. Object Literal

// let employee = {
//     "name": "Tanzil",
//     "age": 23,
//     "designation": "Software Engineer",
//     "salary": 50000,
//     "address": {
//         "city": "Dharmshala",
//         "country": "India"
//     }, 
// }

// Accessing the properties of an object
// dot notation, bracket notation

// console.log(employee.name);
// console.log(employee["age"]);

// let keys = Object.keys(employee);

// let values = Object.values(employee);

// console.log(keys);
// console.log(values);

// for - in loop

// for(keys in object){
//     // code
// }

// for(let key in employee){
//     // console.log(key);
//     console.log(employee[key]);
// }

// Methods In Objects
// Methods are functions that are stored as object properties

// let student  = {
//     "name":"Sapna",
//     sayHi: function(greet){
//         return `Hello ${greet}`
//     },
//     sayBye(){
//         return "Good Bye";
//     },
//     study:()=>{
//         return "I am studying";
//     }
// }


// console.log(student.name);
// console.log(student.sayHi("Good Morning"));

// console.log(student.sayBye());

// console.log(student.study());


let student = {
    name:"Pooja",
    age:23,
    // sayHi: function(){
    //     return this.name;                    // this.name == student.name
    // },
    sayHello:()=>{
        return this;
    }
}

// console.log(student.sayHi());
console.log(student.sayHello());

// let name = student.name
// let age = student.age
// let method = student.sayHi

// console.log(name);
// console.log(age);
// console.log(method());
// console.log(student.sayHello());

// this keyword
// this keyword refers to the parent object

// Arrow Function does not have its own this keyword

// Task

// Counter by using Object
// value: 0
// two methods - increment, decrement, reset



