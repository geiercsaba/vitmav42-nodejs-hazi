/**
 * Visszaadja az összes tanárt a res.locals.tanarok változóba
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {        
    const DiakModel = requireOption(objectrepository, 'DiakModel');

    return function(req, res, next) {
        DiakModel.findOne({ _id: req.params.id })
        .then(result => {res.locals.diak = result;})
        .catch(err => { console.log(err); });
    };
};