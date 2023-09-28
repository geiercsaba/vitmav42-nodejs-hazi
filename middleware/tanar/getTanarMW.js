/**
 * Visszaadja az id tanárt
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const TanarModel = requireOption(objectrepository, 'TanarModel');

    return function(req, res, next) {

        TanarModel.find({ _id: req.params.id })
        .then((result) => {
            if(!result){
                next("nincs találat");
            }
            res.locals.tanar = result[0];
            return next();
        }).catch((err) => {
            next(err);
        });
    };
};