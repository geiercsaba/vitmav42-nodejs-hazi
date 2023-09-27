/**
 * Visszaadja az összes tanárt
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        const TanarModel = requireOption(objectrepository, 'TanarModel');

        return function(req, res, next) {
            TanarModel.find({}, (err, result) => {
                if (err) {
                    return next(err);
                }

                res.locals.tanarok = result;
                return next();
            });
        };
    };
};