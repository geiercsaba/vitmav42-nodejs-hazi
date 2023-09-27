const renderMW = require('../middleware/renderMW');

const checkPassMW = require('../middleware/auth/checkPassMW');
const authMW = require('../middleware/auth/authMW');
const logoutMW = require('../middleware/auth/logoutMW');

const getTanarokMW = require('../middleware/tanar/getTanarokMW');
const getTanarMW = require('../middleware/tanar/getTanarMW');
const saveTanarMW = require('../middleware/tanar/saveTanarMW');
const delTanarMW = require('../middleware/tanar/delTanarMW');

const getDiakokMW = require('../middleware/diak/getDiakokMW');
const getDiakMW = require('../middleware/diak/delDiakMW');
const saveDiakMW = require('../middleware/diak/saveDiakMW');
const delDiakMW = require('../middleware/diak/delDiakMW');





module.exports = function(app) {
    const objRepo = {
        TanarModel: "",
        DiakModel: ""
    };

    app.get('/tanarok',
        authMW,
        getTanarokMW,
        renderMW(objRepo, 'tanarok')
    );
    
    app.use('/tanar/add',
        authMW,
        saveTanarMW,
        renderMW(objRepo, 'tanarform')
    );

    app.use('/tanar/edit/:id',
        authMW,
        getTanarMW,
        saveTanarMW,
        renderMW(objRepo, 'tanarform')
    );

    app.get('/tanar/delete/:id',
        authMW,
        getTanarMW,
        delTanarMW
    );


    app.get('/diakok',
        authMW,
        getDiakokMW,
        renderMW(objRepo, 'diakok')
    );

    app.get('/diak/add',
        authMW, 
        saveDiakMW,
        renderMW(objRepo, 'diakform')
    );

    app.use('/diak/edit/:id',
        authMW,
        getDiakMW,
        saveDiakMW,
        renderMW(objRepo, 'diakform')
    );

    app.get('/diak/delete/:id',
        authMW ,
        delDiakMW
    );

    app.use('/logout',
        logoutMW
    );

    app.use('/',
        checkPassMW,
        renderMW(objRepo, 'index')
    );

    
};