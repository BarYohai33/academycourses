const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const ClasseSchema = new Schema({
    name: String
});

const Classe = mongoose.model('Classe', ClasseSchema)

module.exports = Classe;