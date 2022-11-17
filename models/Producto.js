const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    nombrep: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Producto', ProductoSchema)