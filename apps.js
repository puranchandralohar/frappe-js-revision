// deep copy and shallow copy

let caption = {
    name:"Mahi",
    team:"India",
    ipl:{
        team1:"CSK",
        team2:"RPS"
    }
};
// let mentor  = caption;

// mentor.name = "Dhoni";

// console.log(caption);
// console.log(mentor);

// Shallow copy

// let caption1 = {...caption}
// caption1.name = "Dhoni";
// caption1.ipl.team2 = "Kolkata Knight Riders";

// console.log(caption);
// console.log(caption1);

// Deep Copy
// JSON.stringify() - Convert Object > String
// JSON.parse() - Convert String > Object

let caption1 = JSON.parse(JSON.stringify(caption));

caption1.name = "Dhoni";
caption1.ipl.team2 = "Kolkata Knight Riders";

console.log(caption);
console.log(caption1);



