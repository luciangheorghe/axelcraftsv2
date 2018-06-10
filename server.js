const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
//Create the express app
const app = express()
//create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, '/dist')))
//serve index by default
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})
//create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
//log to feedback that this is actually running
console.log('Server started on port' + port)
