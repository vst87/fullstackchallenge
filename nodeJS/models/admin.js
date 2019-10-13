const mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
    name: {type :String}, 
    location: {type: String},
    address: {type :String}
});

module.exports = { Admin };