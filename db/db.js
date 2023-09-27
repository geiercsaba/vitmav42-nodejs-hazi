const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/R74UM5', { useNewUrlParser: true });

module.exports = mongoose;