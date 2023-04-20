const request = require("request-promise-native");
const fs = require("fs/promises");
const readline = require("readline-promise").default;

const rl = readline.createInterface({
  input: process.stdin,
  // output: process.stdout
});

function fetchCats() {
  const catTagPromise = request("https://cataas.com/api/tags");

  catTagPromise
    .then((res) => {
      const tags = JSON.parse(res);

      const filePromise = fs.writeFile("cattags.json", tags.join(", "));
      // filePromise.then((filePromiseData) => {
      //   console.log("DOne writing to file");
      // });
      return filePromise;
    })
    .then((filePromiseData) => {
      // console.log("DOne writing to file");
      const questionPromise = rl.questionAsync(
        "What type of cat is your favourite? "
      );
      return questionPromise;
    })
    .then((answer) => {
      console.log("You said: ", answer);
    })
    .catch((err) => {
      console.log(err);
    });
  // .catch((err) => {
  //   console.log(err);
  // });
}

// fetchCats();

const promise1 = Promise.resolve("1");
const promise2 = Promise.resolve("2");
const promise3 = Promise.resolve("3");

Promise.race([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
