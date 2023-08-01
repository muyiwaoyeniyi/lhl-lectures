const fs = require("fs");
const EventEmitter = require("events");

const fileEvents = new EventEmitter();

// event name
// event trigger/emitter
// event listener

fs.readFile("./name.txt", "utf-8", function (err, data) {
  fileEvents.emit("fileRead");
  console.log("data ----", data); // 3
});

fileEvents.on("fileRead", function () {
  console.log("Thanks... continue execution here"); // 2
});

console.log("The End"); // 1
