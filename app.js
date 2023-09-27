const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

app.use(
    session({
        secret: 'secret'
    })
);

require('./route/routes')(app);


app.listen(port, function() {
    console.log('Server running on port: ' + port);
});