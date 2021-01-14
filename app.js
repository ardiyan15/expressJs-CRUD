const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const studentRoutes = require('./routes/students')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

app.use(studentRoutes)

app.listen(8000, () => {
    console.log('Server running on port 8000')
})