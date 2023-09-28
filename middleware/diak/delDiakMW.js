/**
 * Törli az id diákot
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DiakModel = requireOption(objectrepository, 'DiakModel');

    return function(req, res, next) {
        if (typeof req.params.id === 'undefined') {
            return next();
        }

        DiakModel.findByIdAndRemove(req.params.id)
        .then(res.redirect("/diakok"))
        .catch(err => { console.log(err)});
    };
};