/**
 * Törli az id tanárt
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const TanarModel = requireOption(objectrepository, 'TanarModel');

    return function(req, res, next) {
        if (typeof req.params.id === 'undefined') {
            return next();
        }

        TanarModel.findByIdAndRemove(req.params.id)
        .then(res.redirect("/tanarok"))
        .catch(err => { console.log(err)});
    };
};