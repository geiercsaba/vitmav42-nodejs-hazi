/**
 * Visszaadja az összes diákot
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DiakModel = requireOption(objectrepository, 'DiakModel');

    return function(req, res, next) {
        DiakModel.find({}, (err, result) => {
            if (err) {
                return next(err);
            }

            res.locals.diakok = result;
            return next();
        });
    };
};