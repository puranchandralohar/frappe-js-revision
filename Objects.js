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


// let student = {
//     name:"Pooja",
//     age:23,
//     // sayHi: function(){
//     //     return this.name;                    // this.name == student.name
//     // },
//     sayHello:()=>{
//         return this;
//     }
// }

// console.log(student.sayHi());
// console.log(student.sayHello());

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


// let object = {
//     key:value
// }

// let sayBye = function(){
//     return this.name;
// }

// let person = {
//     name:"Tanzil",
//     age:23,
//     // location:"Dharamshala",
//     // sayHi:()=>{
//     //     return this
//     // },
//     // sayBye:function(){
//     //     return this.name;
//     // },
//     // sayMahi:sayBye

// }

// Object methods
// Object.values()
// Object.keys()
// Object.entries() - It returns an array of a given object's own enumerable string-keyed property [key, value] pairs
// let result = Object.entries(person);
// console.log(result[0][0]);

// console.log(person.sayMahi());

// person.name = "Sapna";
// person.age = 24;
// person.location = "Delhi";

// person.isStudent = true;

// delete person.age;
// person.sayHi();

// console.log(person);


// let student = {
//     name:"Sapna",
//     age:23,
// }

// Object.freeze(student)
// delete student.age;
// // student.age = 19;
// // student.location = "Delhi";
// console.log(student)

// const location ={
//     city:"Amrawati",
//     country:"India"
// }

// let Object2 = Object.assign(student, location);
// console.log(student);
// console.log(Object2);

// console.log(location);
// Object.assign(source, target)
// let student1 = Object.assign({},student)

// console.log(student);
// console.log(student1);

// Spread Operator - 

// const object2 = {...student,...location}

// console.log(object2)

// let arr = [1,2,3]
// let arr2 = arr
// arr2[0] = 100;

// console.log(arr)
// console.log(arr2)

// let value1 = {
//     name:"Sapna"
// };
// let value2 = value1;

// value2.name = "Pratiksha"

// console.log(value1)
// console.log(value2)

// let sapna = {
//     age:19,
//     city:"amrawati"
// }

// sapna.age = 20;

// console.log(sapna)

// Premitive , Non-primitive

// Copying an object

// Shallow Copy, Deep Copy

// Shallow Copy - 
// Only top level properties are copied
// Nested Objects copied by refrence of same object

// let object = {
//     name:"Sapna",
//     age:24,
//     location:{
//         city:"Amrawati",
//         country:"India"
//     }
// }

// let object2 = {...object};
// object2.name = "Pratiksha";
// object2.age = 30;
// object2.location.country = "USA"

// console.log(object)
// console.log(object2)

// Deep Copy-

// stringyfy() - It converts a JavaScript object into a JSON string
// parse()- JSON String > Object

// let object2 = JSON.stringify(object);
// let object3 = JSON.parse(object2)
// // console.log(object3)


// object3.name = "Seeta";
// object3.age = 18;
// object3.location.country  = "USA";

// console.log(object);
// console.log(object3);


// Deep Copy And Shallow Copy with Arrays and Nested Objects.
// Add methods to the nested objects and repeat the task.


// Factory Function
// Constructor Function
// Class


// Factory Function - 
// returns an object


// let student = {
//     name:"mahi",
//     roll:1,
// }

// let student2 = {
//     name:"sapna",
//     roll:2,
// }

// let student3 = {
//     name:"tanzil",
//     roll:3,
// }


function createStudent(n,r){
    return {
       name:n,
       roll:r,
       sayHello:()=>{
           console.log(`Hello ${n}`);
       }
    }
}

let student1 = createStudent("Mahi", 1);
let student2 = createStudent("Sapna", 2);
let student3 = createStudent("Tanzil", 3);
student1.sayHello();
console.log(student2);
console.log(student3);
