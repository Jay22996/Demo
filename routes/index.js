var express = require('express');
const { add, find, type, decline } = require('../controller/membercon');
const { login, add_User } = require('../controller/Registercon');
var router = express.Router();

/* GET home page. */
router.post("/",add)
router.get("/find",find)
router.get("/update/:id",type)
router.get("/decline/:id",decline)
router.post('/login',login)
router.post('/register',add_User)

module.exports = router;
