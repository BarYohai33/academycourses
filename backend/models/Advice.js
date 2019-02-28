const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const AdviceSchema = new Schema({
    user_id: String,
    message: String,
    date: Date
});

const Advice = mongoose.model('Advice', AdviceSchema)

module.exports = Advice;