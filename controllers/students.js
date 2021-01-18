const Student = require('../models/student')

exports.getAllStudents = (req, res, next) => {
    Student.findAll()
        .then(results => {
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
    Student.findByPk(studentId)
        .then(result => {
            res.render('editStudent', {
                student: result
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

    Student.create({
        nisn: nisn,
        email: email,
        name: name
    })
        .then(result => {
            console.log('STUDENT CREATED')
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

    Student.findByPk(studentId)
        .then(student => {
            student.nisn = nisn,
            student.name = name,
            student.email = email
            return student.save()
        })
        .then(result => {
            console.log('STUDENT UPDATED')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postDeleteStudent = (req, res, next) => {
    const studentId = req.body.studentId
    Student.findByPk(studentId)
        .then(product => {
            return product.destroy()
        })
        .then(result => {
            console.log('student deleted')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}