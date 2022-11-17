const mongoose = require('mongoose');
require('dotenv').config({path:  'variable.env'});

const conectarDBDeseo= async() =>{
    try {
       await mongoose.connect(process.env.DB_MONGO_DESEOS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
       })
       console.log('DB deseos conectada correctamente')
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = conectarDBDeseo