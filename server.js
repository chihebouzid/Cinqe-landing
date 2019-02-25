'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//App
app.get('/', (req, res) => {
    res.render('index.html')
});



app.listen(app.get('port'), function () {
    console.log('app running')
});
