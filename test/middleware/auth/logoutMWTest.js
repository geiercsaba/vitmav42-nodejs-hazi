const expect = require('chai').expect;
const middlewareFunction = require('../../../middleware/auth/logoutMW');

describe('logoutMW middleware', function () {
    
    it('should destroy the session and redirect to /', function(done) {
        const req = {};
        const res = {
            redirect: sinon.spy(),
            session: {
                destroy: function(callback) {
                    callback(); // Szimulálja a session törlését
                }
            }
        };
        const next = sinon.spy();

        logoutMiddleware({})(req, res, next);

        expect(res.redirect.calledOnce).to.be.true;
        expect(res.redirect.calledWith('/')).to.be.true;
        expect(next.notCalled).to.be.true; // next() ne legyen meghívva

        done();
    });
    
});