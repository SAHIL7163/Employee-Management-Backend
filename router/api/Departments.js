const express = require('express');
const router = express.Router();


const departmentsController = require('../../Controller/departmentController')


router.route('/')
.get(departmentsController.getAllDepartments)
.post(departmentsController.addNewDepartment)

module.exports = router;