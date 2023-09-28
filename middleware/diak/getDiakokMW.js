/**
 * Visszaadja az összes tanárt a res.locals.tanarok változóba
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {        
    return function(req, res, next) {
        const DiakModel = requireOption(objectrepository, 'DiakModel');
        DiakModel.find({})
            .then(result => {
                res.locals.diakok = result;
                return next();
            })
            .catch(err => {
                return next(err);
            });
    };
};