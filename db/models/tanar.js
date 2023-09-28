const Schema = require('mongoose').Schema;
const db = require('../db');

const Tanar = db.model('Tanar', {
    nev: String,
    datum: Date,
    szak: String
});

module.exports = Tanar;