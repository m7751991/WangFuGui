var express = require('express');
var router = express.Router();
const Admin = require('../public/controller/adminController.js')
router.get('/login', Admin.login);
module.exports = router;
