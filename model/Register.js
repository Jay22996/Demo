var mongoose = require('mongoose');
var register_schema = new mongoose.Schema({
    email : {type : String},
    password : {type : String}
})

module.exports = mongoose. model('blog_register',register_schema);