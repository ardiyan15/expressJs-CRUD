const express = require('express')
const router = express.Router()

const studentController = require('../controllers/students')

router.get('/', studentController.getAllStudents)

router.get('/add-student', studentController.getAddStudent)

router.get('/edit-student/:studentId', studentController.getEditStudent)

router.post('/add-student', studentController.postAddStudent)

router.post('/edit-student', studentController.postEditStudent)

router.post('/delete-student', studentController.postDeleteStudent)

module.exports = router