// Events - Async in action

// Event listener
// Event trigger/emitter

const fs = require("fs");
const EventEmitter = require("events");
const fileEvents = new EventEmitter();

// const name = process.argv[2];

console.log("Writing to file");

fs.readFile("./name.txt", "utf-8", (err, data) => {
  //fileEvents.emit("fileRead");

  console.log("file data is ", data);
});

fileEvents.on("fileRead", () => {
  console.log("fileRead event just took place");
});
