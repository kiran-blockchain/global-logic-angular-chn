const express = require('express');
const app = express();
var bodyParser = require("body-parser");

app.use(function(req, res, next) {
    res. header("Access-Control-Allow-Origin", "*");
    res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.post('/user/register', (req, res) => {
    console.log(req.body);
    res.send("thank yupu");
});

app.listen(4000, () => console.log('Gator app listening on port 4000!'));