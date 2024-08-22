// fetch()-
// It is used to make HTTP requests.
// It returns a promise.

// HTTP methods - GET, POST, PUT, DELETE

// Get- retrieve data from server
// Post- send data to server
// Put- update data on server
// Delete- delete data from server

// Instagram
// Dashboard - Posts (Get)
// craete a post - Post
// Caption - Put
// Delete - Delete

// fetch()-  it returns a promise

// it accepts two arguments - URL, options

// Task
// let data = fetch(`https://api.restful-api.dev/objects`);

// console.log(data)

// async function fetchdata() {
//   let response = await fetch("https://api.restful-api.dev/objects");
//   console.log(response);
// }
// fetchdata();

// const object = {
//   id: "1",
//   name: "Google Pixel 6 Pro",
//   data: {
//     color: "Cloudy White",
//     capacity: "128 GB",
//   },
// };

// const data = fetch(`https://api.restful-api.dev/objects`);

// data
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.map((item) => {
//       console.log(item.name);
//     });
//   });

async function fetchdata() {
  let response = await fetch(`https://api.restful-api.dev/objects`);
  let data = await response.json();

  data.map((item) => {
    console.log(item.data?.price);
  });
}

fetchdata();
