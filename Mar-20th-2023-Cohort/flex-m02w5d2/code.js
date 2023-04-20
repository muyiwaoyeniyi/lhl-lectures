// const net = require("net");

// const server = net.createServer();

// function fetchName() {
// todo
// todo
// }

// function fetchProfile() {
// todo
//   console.log("test");

//   fetchName();
// }

// const onDoneListening = () => {
//   console.log("Ready!!!");
//   fetchProfile();
// };

// server.listen(9876, onDoneListening);

const request = require("request");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fetchCats() {
  request("https://cataas.com/api/tags", (err, response, body) => {
    if (err !== null) {
      console.log("Something went wrong");
    } else {
      const tags = JSON.parse(body);
      // console.log(tags);
      fs.writeFile("cattags.json", tags.join(", "), () => {
        // console.log("done writing to file");
        rl.question("What type of cat is your favorite: ", (answer) => {
          // console.log(answer);
          if (tags.includes(answer)) {
            request(
              `https://cataas.com/api/cats?tag=${answer}`,
              (err, response, body) => {
                console.log(JSON.parse(body));
              }
            );
          } else {
            console.log("Sorry not an option :(");
          }
          rl.close();
        });
      });
    }
  });
}

fetchCats();

// ("Harry Potter");

// const firstName = "harry";
// const lastName = "potter";

// string concatenation
// const fullName = firstName + " " + lastName;

// string interpolation
// const fullName = `${firstName} ${lastName}`;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Harry Potter" });
    // reject("reason for failure");
    // console.log(promise);
  }, 2000);
});

// .then, .catch
promise
  .then((fulfilledData) => {
    console.log("fulfilledData", fulfilledData);
    // todo
  })
  .catch((rejectedData) => {
    console.log("rejectedData", rejectedData);
    // todo
  })
  .finally(() => {
    console.log("always run this ");
  });
