const mongoose = require('mongoose')
const {Schema} = mongoose

const ClienteSchema = new Schema({
    nombre: {type: String}
})

module.exports = mongoose.model('Cliente', ClienteSchema)