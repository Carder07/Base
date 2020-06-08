//initializing dependencies
const express = require('express')
const multer = require('multer')
let image = require('../models/image_shema');
const path = require('path')
let router = express.Router();





//setting storage
let storage = multer.diskStorage({
    //destination of file
    destination: 'public/photos/',
    // name of file
    filename: (req, file, err) => {
        err(null, file.originalname);
    }

})






//file upload destination
let uplaod = multer({ storage: storage })




//posting images
router.post('/', uplaod.single('image'), (req, res) => {
    let massage = {
        Status: 'image was successfully uploaded',
    }
    let Image = new image({
        Name: req.file.filename,
        Location: req.file.path
    })

    async function savePicture() {
        try {
            let picture = await Image.save()
            massage.file = picture
            res.send(massage)
        } catch (error) {
            console.log(error)
        }
    }
    savePicture();


})




// collecting pictures
router.get('/collector', (req, res) => {
    async function Piclist() {
        try {
            let list = await image.find();
            res.send(list)
        } catch (err) {
            console.log(err)
        }
    }
    Piclist()

})

module.exports = router;