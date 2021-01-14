const Student = require('../models/student')

exports.getAllStudents = (req, res, next) => {
    Student.fetchAll()
        .then(([results]) => {
            res.render('students', {
                students: results
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getAddStudent = (req, res, next) => {
    res.render('addStudent')
}

exports.getEditStudent = (req, res, next) => {
    const studentId = req.params.studentId
    Student.findById(studentId)
        .then(([result]) => {
            res.render('editStudent', {
                student: result[0]
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postAddStudent = (req, res, next) => {
    const nisn = req.body.nisn
    const name = req.body.name
    const email = req.body.email

    const student = new Student(null, nisn, name, email)
    student.save()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postEditStudent = (req, res, next) => {
    const studentId = req.body.studentId
    const nisn = req.body.nisn
    const name = req.body.name
    const email = req.body.email

    const student = new Student(studentId, nisn, name, email)
    student.update()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postDeleteStudent = (req, res, next) => {
    const studentId = req.body.studentId
    Student.deleteById(studentId)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}