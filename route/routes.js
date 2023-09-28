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

const DiakModel = require('../db/models/diak');
const TanarModel = require('../db/models/tanar');


module.exports = function(app) {
    const objRepo = {
        TanarModel: TanarModel,
        DiakModel: DiakModel
    };
    
    app.use('/tanar/add',
        authMW(objRepo),
        saveTanarMW(objRepo),
        renderMW(objRepo, 'tanarform')
    );

    app.use('/tanar/edit/:id',
        authMW(objRepo),
        getTanarMW(objRepo),
        saveTanarMW(objRepo),
        renderMW(objRepo, 'tanarform')
    );

    app.get('/tanar/delete/:id',
        authMW(objRepo),
        getTanarMW(objRepo),
        delTanarMW(objRepo)
    );

    app.get('/tanarok',
        authMW(objRepo),
        getTanarokMW(objRepo),
        renderMW(objRepo, 'tanarok')
    );


    app.use('/diak/add',
        authMW(objRepo), 
        saveDiakMW(objRepo),
        renderMW(objRepo, 'diakform')
    );

    app.use('/diak/edit/:id',
        authMW(objRepo),
        getDiakMW(objRepo),
        saveDiakMW(objRepo),
        renderMW(objRepo, 'diakform')
    );

    app.get('/diak/delete/:id',
        authMW(objRepo),
        delDiakMW(objRepo)
    );

    app.get('/diakok',
        authMW(objRepo),
        getDiakokMW(objRepo),
        renderMW(objRepo, 'diakok')
    );

    app.use('/logout',
        logoutMW(objRepo)
    );

    app.use('/',
        checkPassMW(objRepo),
        renderMW(objRepo, 'index')
    );

};