const fs = require("fs");
const EventEmitter = require("events");

const fileEvents = new EventEmitter();

const name = process.argv[2];

console.log("Writing to file");

for (let i = 0; i < 1; i++) {
  fs.writeFileSync("./name.txt", `${name} \n`, { flag: "a+" });
}

fs.readFile("./name.txt", { encoding: "utf-8" }, (err, data) => {
  fileEvents.emit("fileRead");
  fileEvents.emit("READY!");
  console.log("file data ...", data);
});

// fileEvents.on("fileRead", () => {});

// fileEvents.on("fileRead", () => console.log("file is read 2"));

// fileEvents.on("fileRead", () => console.log("file is read 3"));

fileEvents.on("READY!", () => console.log("READY!!!"));

console.log("moving on ....");
