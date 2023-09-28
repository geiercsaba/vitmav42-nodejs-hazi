/**
 * Ha be van lépve, tovább, egyébként redirect to /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.session.login === 'undefined') {
            return res.redirect('/');
        }

        next();
    };
};