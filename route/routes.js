const renderMW = require('../middleware/renderMW');


module.exports = function(app) {
    const objRepo = {
        TanarModel: "",
        DiakModel: ""
    };

    app.get('/tanarok',
        renderMW(objRepo, 'tanarok')
    );
    
    app.get('/tanar/add',
        renderMW(objRepo, 'tanarform')
    );

    app.use('/tanar/edit/:id',
        renderMW(objRepo, 'tanarform')
    );

    app.get('/tanar/delete/:id',
    );

    

    app.get('/diakok',
        renderMW(objRepo, 'diakok')
    );

    app.get('/diak/add',
        renderMW(objRepo, 'diakform')
    );

    app.use('/diak/edit/:id',
        renderMW(objRepo, 'diakform')
    );

    app.get('/diak/delete/:id',
    );

    app.use('/',
        renderMW(objRepo, 'index')
    );

    
};