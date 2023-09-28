const Schema = require('mongoose').Schema;
const db = require('../db');

const Tanar = db.model('Tanar', {
    nev: String,
    datum: String,
    szak: String
});

module.exports = Tanar;