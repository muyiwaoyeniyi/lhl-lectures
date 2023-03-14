const fs = require("fs");

const name = process.argv[2];

console.log("Writing to file");

for (let i = 0; i < 1; i++) {
  fs.writeFileSync("./name.txt", name, { flag: "a" });
  console.log("in loop");
}

console.log("Done writing to file");

const nameInFile = fs.readFileSync("./name.txt", "utf-8");
console.log("name in file", nameInFile);
console.log("DONE");

fs.readFile("./name.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(err, data);
});

console.log("Done with async file");
