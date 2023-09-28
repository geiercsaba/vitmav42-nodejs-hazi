/**
 * Elmenti a diákot
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DiakModel = requireOption(objectrepository, 'DiakModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.datum === 'undefined' ||
            typeof req.body.osztaly === 'undefined' ||
            typeof req.body.atlag === 'undefined'
        ) {
            console.log("szia")
            return next();
        }


        if (typeof res.locals.diak === 'undefined') {
            res.locals.diak = new DiakModel();
        }

        res.locals.diak.nev = req.body.nev;
        res.locals.diak.datum = req.body.datum;
        res.locals.diak.osztaly = req.body.osztaly;
        res.locals.diak.atlag = req.body.atlag;
        

        res.locals.diak.save().then(res.redirect(`/diakok`));
    };
};