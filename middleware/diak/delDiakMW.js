/**
 * Törli az id diákot
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.diak === 'undefined') {
            return next();
        }

        res.locals.diak.remove().then( res.redirect('/diakok') );
    };
};