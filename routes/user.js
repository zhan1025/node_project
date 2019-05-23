const express = require('express');
const userCtrl = require('../control/userCtrl');
const router = express.Router();

router.post('/reg',userCtrl.reg);
router.post('/login',userCtrl.login);
module.exports = router;