const mongoose = require('mongoose')


let ImageSchemma = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
})

let Image = mongoose.model("Image", ImageSchemma)



module.exports = Image;