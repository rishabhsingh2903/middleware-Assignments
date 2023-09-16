const express = require('express')
const router = express.Router()
const StudentController=require("../controllers/StudentController");

router.route('/')
    .get(StudentController.getStudent)
    .post(StudentController.createStudent);
    


router.route("/:id")
    .get(StudentController.getStudent)
    .post( StudentController.createStudent)
    .put( StudentController.updateStudent)
    .delete(StudentController.deleteStudent);

module.exports = router