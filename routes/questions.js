const _ = require('lodash');
const { Question, validate } = require('../models/question');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    Question.find({}).then(function (questions) {
        let answer = questions.map(q => q.textarea);
        res.send(answer);
        });
});


router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let question = new Question(_.pick(req.body, ['name', 'email', 'textarea']));
    await question.save();
    res.send(`${question.name}, ваш вопрос успешно отправлен`);
});

module.exports = router;
