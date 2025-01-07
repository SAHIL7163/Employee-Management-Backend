const express = require('express');
const router = express.Router();


const employeesController = require('../../Controller/employeeController')


router.route('/')
.get(employeesController.getAllEmployees)
.post(employeesController.addNewEmployee)

module.exports = router;