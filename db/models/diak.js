const Schema = require('mongoose').Schema;
const db = require('../db');

const Diak = db.model('Diak', {
    nev: String,
    datum: String,
    osztaly: Number,
    atlag: Number
});

module.exports = Diak;