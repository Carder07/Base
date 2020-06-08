const mongoose = require('mongoose');




let db = mongoose.connect('mongodb://localhost/DivineBusinessVentures', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to database successfull')

}).catch((err) => {
    console.log(err)
})

module.exports = db;