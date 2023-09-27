/**
 * Ha be van lépve, tovább, egyébként redirect to /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};