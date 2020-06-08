//importing packages
const express = require('express')
const helment = require('helmet')
const upload = require('./routes/upload')
const hitting = require('./Middlewares/comming')


require('./_DB/db_connect')


//initialzing variables
let port = 8000
let log = console.log

//initializing packages
const app = express();


//middlewares
app.use(helment())
app.use(express.json())
app.use(hitting)
app.use(express.static('public'))
app.use('/upload', upload)



//initializing port
app.listen(port, () => {
    log(`sever is up and running on port ${port}...`)
})