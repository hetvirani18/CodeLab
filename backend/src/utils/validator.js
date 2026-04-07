const validator = require('validator');

const validate = (data) => {
    const mandatoryField = ['firstName', 'emailId', 'password'];
    const isAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

    if(!isAllowed) throw new Error('Some Field Missing');

    const {firstName, emailId, password} = data;

    if(!validator.isEmail(emailId)) throw new Error('Invalid Email');

    if(!validator.isStrongPassword(password)) throw new Error('Weak Password');

    if(firstName.length<3 || firstName.length>20) throw new Error('firstName length should be between 3 to 20');

}

module.exports = validate;