const Joi = require('joi');
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    textarea: {
        type: String
    }
});


const Question = mongoose.model('Question', questionSchema);

function validateQuestion (question) {
    const schema = {
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        textarea: Joi.string().required()
    }

    return Joi.validate(question, schema);
}

exports.Question = Question;
exports.validate = validateQuestion;
