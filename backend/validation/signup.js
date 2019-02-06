const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.passwordRepeat = !isEmpty(data.passwordRepeat) ? data.passwordRepeat : '';
    data.city = !isEmpty(data.city) ? data.city : '';

    if(!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
        errors.lastname = 'Entre 2 et 30 caractères';
    }
    
    if(Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Veuillez remplir ce champs';
    }
    if(!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
        errors.firstname = 'Entre 2 et 30 caractères';
    }
    
    if(Validator.isEmpty(data.firstname)) {
        errors.firstname = 'Veuillez remplir ce champs';
    }
    if(Validator.isEmpty(data.city)) {
        errors.city = 'Veuillez remplir ce champs';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Votre e-mail est invalide';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Veuillez remplir ce champs';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Le mot de passe doit avoir minimum 6 caractères';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Veuillez remplir ce champs';
    }

    if(!Validator.isLength(data.passwordRepeat, {min: 6, max: 30})) {
        errors.passwordRepeat = 'Minimum 6 caractères';
    }

    if(!Validator.equals(data.password, data.passwordRepeat)) {
        errors.passwordRepeat = 'Mots de passes différents';
    }

    if(Validator.isEmpty(data.passwordRepeat)) {
        errors.passwordRepeat = 'Veuillez remplir ce champs';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}