const express = require('express');
const UserModel = require('../model/user');
const router = express.Router();
const control = require('../control/userCtrl');

router.route('/user')
               .get(control.find)
               .post(control.reg)
               .delete(control.del)
               .put(control.update)

module.exports = router;