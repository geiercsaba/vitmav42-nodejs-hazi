/**
 * Elementi a tanárt
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const TanarModel = requireOption(objectrepository, 'TanarModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.datum === 'undefined' ||
            typeof req.body.szak === 'undefined'
        ) {
            return next();
        }


        if (typeof res.locals.tanar === 'undefined') {
            res.locals.tanar = new TanarModel();
        }

        res.locals.tanar.nev = req.body.nev;
        res.locals.tanar.datum = req.body.datum;
        res.locals.tanar.szak = req.body.szak;

        res.locals.tanar.save().then(res.redirect(`/tanarok`));
    };
};