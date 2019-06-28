var express = require('express');
var router = express.Router();
const Course = require('../public/controller/courseController.js')
router.get('/getCourse', Course.getCourseList);
module.exports = router;
