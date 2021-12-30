const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    dateofbirth:{
        type: String,
        required: true
    },
    school:{
        type: String,
        required: true
    },
},{timestamps:true});

module.exports = mongoose.model('user',schema);