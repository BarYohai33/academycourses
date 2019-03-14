const express = require('express');
const router = express.Router();
const passport = require('passport');

const Advice = require('../models/Advice');
const User = require('../models/User');

router.post('/advice', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const newAdvice = new Advice({
        message: req.body.message,
        rating: req.body.rating,
        date: Date.now()
    });
    const createdAdvice = await newAdvice.save()
    await Advice.findOneAndUpdate(
        { _id: createdAdvice._id },
        { $set: { user: { lastname: req.user.lastname, firstname: req.user.firstname } } }
    )
    return res.json(createdAdvice);
})
.get('/advice/:id', async (req, res) => {
    const advice = await Advice.findOne({
        _id: req.params.id
    })
    return res.json(advice);
})
.get('/lastadvice', async (req, res) => {
    const lastAdvices = await Advice.aggregate([
        {
            $project:
            {
                "user.lastname": 1,
                "user.firstname": 1,
                "message": 1,
                "rating": 1,
                "date": 1,
                "_id": 0
            }
        }]).sort('-date').limit(3)
    return res.json(lastAdvices)
})
.patch('/advice/:id', async (req, res) => {
    const advice = await Advice.findOne({
        _id: req.params.id
    })
    advice.user_id = req.body.user_id
    advice.advice = req.body.advice
    try {
        const updatedAdvice = await advice.save()
        return res.json(updatedAdvice);
    } catch (error) {
        console.log(error)
        return res.status(405).end()
    }
})
.delete('/advice/:id', async (req, res) => {
    const advice = await Advice.deleteOne({
        _id: req.params.id
    })
    return res.end()
})

module.exports = router;
