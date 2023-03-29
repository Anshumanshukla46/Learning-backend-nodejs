const http = require("http"); // create HTTP servers and make HTTP requests

const fs = require("fs"); // help in using file-system properties

// loading the file

const fileContent = fs.readFileSync("part2txt.txt");

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': "text/plain" })

    response.end(fileContent)
})


// port 80 help to load the page just by url while in other have to specify portnumber also

// now server will started
server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
});