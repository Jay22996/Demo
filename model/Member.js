var mongoose = require('mongoose')

var Member_schema = new mongoose.Schema({
    Name: {
        type: String
    },
    Mobile: {
        type: Number
    },
    Reason: {
        type: String
    },
    End_Date:{
        type: String,
    },
    type:{
        type: String,
        default:null
    }

})

module.exports = mongoose.model('Member_schema',Member_schema)