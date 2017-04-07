var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

var config = require('./config');

var app = module.exports = express();
app.use(express.static('../front-end'));
app.use(bodyParser.json());

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});

app.set('db', massiveServer);
app.get('db');

var mainCtrl = require('./controllers/main-controller');

app.post('/api/addWatch', mainCtrl.addWatch); //add new watch
app.get('/api/getWatches', mainCtrl.getWatches); //get ALL watches
app.get('/api/getOneWatch/:id', mainCtrl.getOneWatch); //get ONE watch

app.delete('/api/deleteWatch', mainCtrl.deleteWatch); //delete a watch

app.put('/api/changeWatchInfo', mainCtrl.changeWatchInfo); //change watch info

app.listen(config.PORT, function() {
    console.log('Listening on port 8080...');
});