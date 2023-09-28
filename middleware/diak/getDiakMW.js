/**
 * Visszaadja az id diákot
 */
const Diak = require('../../db/models/diak');
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DiakModel = requireOption(objectrepository, 'DiakModel');

    return function(req, res, next) {

        DiakModel.find({ _id: req.params.id })
        .then((result) => {
            if(!result){
                next("nincs találat");
            }
            res.locals.diak = result[0];
            return next();
        }).catch((err) => {
            next(err);
        });
    };
};