const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const CourseSchema = new Schema({
    name: String,
    price: Number,
    date: Date
});

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course;