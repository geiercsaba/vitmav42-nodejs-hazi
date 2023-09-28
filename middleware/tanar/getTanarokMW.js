/**
 * Visszaadja az összes tanárt a res.locals.tanarok változóba
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {        
    return function(req, res, next) {
        const TanarModel = requireOption(objectrepository, 'TanarModel');
        TanarModel.find({})
            .then(result => {
                res.locals.tanarok = result;
                return next();
            })
            .catch(err => {
                return next(err);
            });
    };
};