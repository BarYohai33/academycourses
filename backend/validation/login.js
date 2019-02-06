const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Votre e-mail est invalide';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Veuillez remplir ce champs';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Minimum 6 caractères';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Veuillez remplir ce champs';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}