const mongoose = require('mongoose')

const URI = 'mongodb://localhost/AbmApp'

mongoose.connect(URI)
    .then(db => console.log('DataBase On Conection'))
        .catch(err => console.log(err))

module.exports = mongoose