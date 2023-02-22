// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')
const app = express()
// Start up an instance of app

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`)
}

app.post('/post', getFunc);
function getFunc(req, res) {
  res.send(req.body);
  NEWDATA = {
    temp: req.body.temp,
    feels: req.body.feeling,
    date: req.body.date
  }
  projectData = (NEWDATA)
  console.log('post object returned')
  console.log(req.body);


}

app.get('/get', postFunc)
function postFunc(req, res) {
  res.send(projectData);
  console.log('object get')
  console.log(req.body.temp)

}  