const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/dbName', { useNewUrlParser: true })
    .then(() => {
        console.log('Sikeresen csatlakozva a MongoDB-hez');
    })
    .catch(error => {
        console.error('Hiba a MongoDB-hez való csatlakozás során:', error);
    });

module.exports = mongoose;


