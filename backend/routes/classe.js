const express = require('express');
const router = express.Router();

const Classe = require('../models/Classe');

router.post('/classe', async (req, res) => { 
    const classe = await Classe.findOne({
        name: req.body.name 
    })
        
    if (classe !== null) {
        return res.status(400).json({
            name: "Ce cours existe déjà"
        });
    }
    const newClasse = new Classe({
        name: req.body.name
    });
    const createdClasse = await newClasse.save();
    return res.json(createdClasse);
})
.get('/classe', async (req, res) => {
    const classe = await Classe.find({}, { name: 1 })
    return res.json(classe);
})
.get('/classe/:id', async (req, res) => {
    const classe = await Classe.findOne({
        _id: req.params.id
    })
    return res.json(classe);
})
.patch('/classe/:id', async (req, res) => {
    const classe = await Classe.findOne({
        _id: req.params.id
    })
    classe.name = req.body.name
    try {
        const updatedClasse = await classe.save()
        return res.json(updatedClasse);
    } catch (error) {
        console.log(error)
        return res.status(405).end()
    }
})
.delete('/classe/:id', async (req, res) => {
    const classe = await Classe.deleteOne({
        _id: req.params.id
    })
    return res.end()
})

module.exports = router;