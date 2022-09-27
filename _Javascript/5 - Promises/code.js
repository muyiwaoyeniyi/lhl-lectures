// const request = require("request-promise-native");
// const fs = require("fs/promises");
// const readline = require("readline/promises");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// 1. fetch cat list
// 2. Then write to file
// 3. Then ask for favorite cat
// 4. Then fetch detail info for response
// 4. Then log details

// promiseFunc()
//   .then(response => {
// do something with the response from our Promise
//   })
//   .catch(error => {
// handle any errors from our Promise (including any errors from a .then())
//   })
//   .finally(() => {
// will run after every .then() or .catch() is complete
//   })

// function fetchCats() {
//   const catTagPromise = request("https://cataas.com/api/tags");
//   let tags = [];
//   catTagPromise.then((body) => {
//     tags = JSON.parse(body);
//     const filePromise = fs.writeFile("cattags.json", tags.join(", "));
//     return filePromise;
//   });
//   // .then(() => {
//   //   const questionPromise = rl.question("What type of cat is your favourite");
//   //   return questionPromise;
//   // })
//   // .then((answer) => {
//   //   rl.close();
//   //   if (tags.includes(answer)) {
//   //     const requestPromise = request(
//   //       `https://cataas.com/api/cats?tag=${answer}`
//   //     );
//   //     return requestPromise;
//   //   }
//   // })
//   // .then((body) => {
//   //   console.log("Cat details are ", body);
//   // });
// }

// function fetchCats2() {
//   request("https://cataas.com/api/tags", (error, response, body) => {
//     const tags = JSON.parse(body);

//     fs.writeFile("cattags.json", tags.join(", "), () => {
//       console.log("Done writing");
//       rl.question("What's your favourite cat? ", (answer) => {
//         console.log("User said -- ", answer);

//         if (tags.includes(answer)) {
//           request(
//             `https://cataas.com/api/cats?tag=${answer}`,
//             (err, res, newBody) => {
//               console.log(newBody);
//             }
//           );
//         }

//         rl.close();
//       });
//     });
//   });
// }

// fetchCats();

function x() {
  fetch("https://cataas.com/api/tags").then((data) => console.log(data));
}

x();
