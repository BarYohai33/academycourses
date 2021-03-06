const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const AdviceSchema = new Schema({
    user: {
        lastname: String,
        firstname: String
    },
    message: String,
    rating: Number,
    date: Date
});

const Advice = mongoose.model('Advice', AdviceSchema)

module.exports = Advice;