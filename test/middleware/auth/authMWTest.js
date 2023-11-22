const expect = require('chai').expect;
const middlewareFunction = require('../../../middleware/auth/authMW');

describe('authMW middleware', function () {

    it('should redirect to / if user is not authenticated', function () {
        let req = {
            session: {} 
        };

        let redirectedTo = '/';
        let res = {
            redirect: function (to) {
                redirectedTo = to;
                done()
            }
        };

        middlewareFunction(req, res, function () {
            expect(redirectedTo).to.eql('/');
        });
    });

    it('should call next() if user is authenticated', function () {
        let req = {
            session: {} 
        };

        let redirectedTo = '/';
        let res = {
            redirect: function (to) {
                redirectedTo = to;
            }
        };

        middlewareFunction(req, res, function () {
            done()
        });
    });

});
