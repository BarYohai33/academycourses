const express = require('express');
const router = express.Router();
const passport = require('passport');

const Advice = require('../models/Advice');

router.post('/advice', passport.authenticate('jwt', { session: false }), async (req, res) => { 
    const advice = await Advice.findOne({
        advice: req.body.advice 
    })
    
    if (advice !== null) {
        return res.status(400).json({
            advice: "Remplissez le champs"
        });
    }
    
    const newAdvice = new Advice({
        user_id: req.user._id,
        advice: req.body.advice,
        date: Date.now()
    });
    const createdAdvice = await newAdvice.save();
    return res.json(createdAdvice);
})

.get('/advice/:id', async (req, res) => {
    const advice = await Advice.findOne({
        _id: req.params.id
    })
    return res.json(advice);
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