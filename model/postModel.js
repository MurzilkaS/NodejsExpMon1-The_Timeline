const moment = require('moment'); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const postModel = new Schema({
    email: {
        type: String, 
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
   desc: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now, 
        get: function (createdAt) {
            return moment(createdAt).format('MMM Do YYYY, h:mm:ss a');
        },
    },
}, { timestamps: true }); 

module.exports = mongoose.model('post', postModel);
