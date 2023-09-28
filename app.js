const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('static'));

app.use(
    session({
        secret: 'secret'
    })
);

require('./route/routes')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(port, function() {
    console.log('Server running on port: ' + port);
});