const fs = require("fs");

// name and content type
let text = fs.readFileSync("part2txt.txt", "utf-8");

console.log("PREVIOUS TEXT", text);

text = text.replace("content", "ADDED TEXT");

console.log("CREATING NEW FILE ...");

fs.writeFileSync("WRITEpart2txt.txt", text); // now a new file will be created
