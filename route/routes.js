// const authMW = require('../middleware/auth/authMW');


module.exports = function(app) {
    const objRepo = {
        TanarModel: "",
        DiakModel: ""
    };

    app.get('/tanarok',
        renderMW(objRepo, 'tanarok')
    );
    
    app.get('/tanar/add',
        renderMW(objRepo, 'tanarokform')
    );

    app.use('/tanar/edit/:id',
        renderMW(objRepo, 'tanarokform')
    );

    app.get('/tanar/delete/:id',
    );

    

    app.get('/diakok',
        renderMW(objRepo, 'tanarok')
    );

    app.get('/diak/add',
        renderMW(objRepo, 'tanarokform')
    );

    app.use('/diak/edit/:id',
        renderMW(objRepo, 'tanarokform')
    );

    app.get('/diak/delete/:id',
    );

    
};