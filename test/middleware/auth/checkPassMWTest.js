const expect = require('chai').expect;
const middlewareFunction = require('../../../middleware/auth/checkPassMW');

describe('checkPassMW middleware', function () {
    
        it('should call next() if password is correct', function () {
            let req = {
                body: {
                    pass: 'admin'
                },
                session: {} 
            };
    
            let res = {
                locals: {}
            };
    
            let called = false;
            let next = function () {
                called = true;
            };
    
            middlewareFunction({})(req, res, next);
    
            expect(called).to.eql(true);
            expect(req.session.login).to.eql(true);
        });
    
        it('should set error if password is incorrect', function () {
            let req = {
                body: {
                    pass: 'wrong'
                },
                session: {} 
            };
    
            let res = {
                locals: {}
            };
    
            let called = false;
            let next = function () {
                called = true;
            };
    
            middlewareFunction({})(req, res, next);
    
            expect(called).to.eql(true);
            expect(res.locals.error).to.eql('Sikertelen bejelentkezés!');
        });
    
        it('should call next() if password is not set', function () {
            let req = {
                body: {},
                session: {} 
            };
    
            let res = {
                locals: {}
            };
    
            let called = false;
            let next = function () {
                called = true;
            };
    
            middlewareFunction({})(req, res, next);
    
            expect(called).to.eql(true);
            expect(res.locals.error).to.eql(undefined);
        });
    
    });
