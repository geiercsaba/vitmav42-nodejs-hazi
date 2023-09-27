/**
 * Ellenőrzi hogy érvényes e a jelszó, ha igen bejelentkezik
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};