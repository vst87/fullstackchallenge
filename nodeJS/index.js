const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js'); 
var empCtrl = require('./controllers/employeeCtrl.js');
var adminCtrl = require('./controllers/adminCtrl.js');

var app = express();
app.use(bodyParser.json());
app.listen(3000, () => console.log('Server started port at : 3000'));

app.use('/employee', empCtrl);
app.use('/admin', adminCtrl);