/**
 * Ellenőrzi hogy érvényes e a jelszó, ha igen bejelentkezik
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.pass === 'undefined') {
            return next();
        }

        if (req.body.pass === 'admin') {
            req.session.login = true;
            return req.session.save(err => next());
        }

        res.locals.error = 'Sikertelen bejelentkezés!';
        return next();
    };
};