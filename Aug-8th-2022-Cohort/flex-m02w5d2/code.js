// const fs = require("fs");
// const request = require("request");
// const readline = require("readline");

const fs = require("fs/promises");
const request = require("request-promise-native");
const readline = require("readline-promise").default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function fetchCats1() {
//   request("https://cataas.com/api/tags", (error, response, body) => {
//     const tags = JSON.parse(body);
//     fs.writeFile("cattags.json", tags.join(", "), () => {
//       rl.question("What type of cat is your favorite?", (answer) => {
//         if (tags.includes(answer)) {
//           request(
//             `https://cataas.com/api/cats?tag=${answer}`,
//             (err, res, body) => {}
//           );
//         }
//         rl.close();
//       });
//     });
//   });
// }

// function fetchCats() {
//   const catTagPromise = request("https://cataas.com/api/tags");
//   catTagPromise
//     .then((response) => {
//       const tags = JSON.parse(response);
//       return fs.writeFile("cattags.json", tags.join("$, "));
//     })
//     .then(() => {
//       return rl.questionAsync("What type of cat?");
//     })
//     .then((answer) => {
//       console.log("You said  >>>> ", answer);
//       rl.close();
//     });
// }

// fetchCats();

const fetchNames = (val) => {
  return new Promise((resolve, reject) => {
    // do stuff here
    setTimeout(() => {
      if (true) {
        resolve(val + " All done here!!");
      } else {
        reject();
      }
    }, 2000);
  });
};

const fetchNamePromise = fetchNames("new value");

fetchNamePromise
  .then((res) => {
    console.log("DONE!!", res);
    return fetchNames();
  })
  .then(() => {
    console.log("second then");
  })
  .catch((err) => {
    console.log("failed", err);
  });
