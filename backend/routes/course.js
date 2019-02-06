const express = require('express');
const router = express.Router();

const Course = require('../models/Course');

router.post('/course', async (req, res) => { 
    const course = await Course.findOne({
        name: req.body.name 
    })
    
    if (course !== null) {
        return res.status(400).json({
            name: "Ce cours existe déjà"
        });
    }
    const newCourse = new Course({
        name: req.body.name,
        price: req.body.price,
        date: Date.now()
    });
    const createdCourse = await newCourse.save();
    return res.json(createdCourse);
})

.get('/course/:id', async (req, res) => {
    const course = await Course.findOne({
        _id: req.params.id
    })
    return res.json(course);
})
.patch('/course/:id', async (req, res) => {
    const course = await Course.findOne({
        _id: req.params.id
    })
    course.name = req.body.name
    course.price = req.body.price
    try {
        const updatedCourse = await course.save()
        return res.json(updatedCourse);
    } catch (error) {
        console.log(error)
        return res.status(405).end()
    }
})
.delete('/course/:id', async (req, res) => {
    const course = await Course.deleteOne({
        _id: req.params.id
    })
    return res.end()
})

module.exports = router;