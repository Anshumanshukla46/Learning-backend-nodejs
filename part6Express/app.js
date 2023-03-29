const express = require("express") // importing express module

const path = require("path") // for using using pug

const app = express(); // app created
const port = 80;


// now if we wantt to show some static files which anyone could download just by getting links


app.use('/static', express.static('static')) // static is the folder name


app.set('view engine', 'pug')  // using pug template engine


// set the view directory for pug - now create views file
app.set('views', path.join(__dirname, 'views'))


// using pug demo
app.get("/demo", (req, res) => {

    // we can also use raw html also
    res.status(200).render('demo', { title: 'Hey Anshuman', message: 'Hello there, using PUG' })
})




// requesting 
app.get("/", (req, res) => {
    res.send("This is my first express application")
    // check on localhost
})


app.get("/about", (req, res) => {
    res.status(400).send("ABOUT PAGE")
    // check on localhost/about and will show the status code
})

app.get("/about", (req, res) => {
    res.send("ABOUT PAGE")
    // check on localhost/about
})



app.post("/about", (req, res) => {
    res.send("ABOUT PAGE")
    // check on localhost/about
})



// showing the data
app.listen(port, () => {
    console.log(`Express application have been started on ${port}`);
}) // it will listen for connnection and link all routing



 // now run that app on node app.js