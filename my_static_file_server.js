/**
 * Created by romq on 15.03.17.
 */
var express = require('express'),
    path = require('path'),
    app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(8080);