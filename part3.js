// synchronous - exceute line by line
const fs = require("fs");
let text = fs.readFileSync("part2txt.txt", "utf-8"); // sync

// Asynchronous - exceution may/may not be line by line

let other = fs.readFile("part2txt.txt", "utf-8", (error, data) => {
    // callback function when this work exceuted then it will run this callback function
    console.log(error, data);
}); // Asynchronous


console.log(other);