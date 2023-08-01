const fs = require("fs");

const content = process.argv[2];

console.log("Writing to file", content); // 1

for (let i = 0; i < 3; i++) {
  fs.writeFileSync("./name.txt", content, { flag: "a" });
  console.log("in loop"); // 2, 3, 4
}

console.log("Is this synchronous?"); // 5

fs.readFile("./name.txt", content, { flag: "a" }, function (err) {
  console.log("done with async write", err); // 7
});

console.log("Is this asynchronous?"); // 6
