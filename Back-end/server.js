var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:sasanka@sasanka.l6bxkat.mongodb.net/est?retryWrites=true&w=majority",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("error")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});
 
server.use(cors());
server.use(express.json());
server.use(routes);
 
server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});