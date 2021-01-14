const db = require('../config/database')

module.exports = class Student {
    constructor(id, nisn, name, email){
        this.id = id
        this.nisn = nisn
        this.name = name
        this.email = email
    }

    save(){
        return db.execute('INSERT INTO students (nisn, name, email) VALUES (?, ?, ?)', [this.nisn, this.name, this.email])
    }

    update(){
        return db.execute('UPDATE students SET nisn = ?, name = ?, email = ? WHERE students.id = ?', [this.nisn, this.name, this.email, this.id])
    }

    static fetchAll(){
        return db.execute('SELECT * FROM students')
    }

    static deleteById(id){
        return db.execute('DELETE FROM students WHERE students.id = ?', [id])
    }

    static findById(id){
        return db.execute('SELECT * FROM students WHERE students.id = ?', [id])
    }
}