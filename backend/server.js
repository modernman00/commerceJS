const express = require('express');  // nodejs framework
const cors = require('cors'); // allow for cross origin data api 
require('dotenv').config(); // environment variable
const mongoose = require('mongoose'); // mongodb 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
// this functionality help us to use the req.body object
app.use(express.urlencoded(
    { extended: false }
))

// connection to the mongo database

const uri = process.env.LOCAL_URL;

mongoose.connect(uri, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Mongo database connection is established");
})

// router

app.get('/', function (req, res){
   res.send(`<h1>OLUTOBI IS A GREAT GIRL </h1>`);
})




app.listen(port, function (){
    console.log('listening on port ' + port)
})