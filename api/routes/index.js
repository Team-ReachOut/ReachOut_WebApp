var express = require('express');
var router = express.Router();

var cnt1=require('../controller/myfc.js');


router
	.route('/addone')
	.post(cnt1.addone);

router
	.route('/show')
	.post(cnt1.showone);

router
	.route('/uploads/:picture')
	.get(cnt1.showPhoto);

module.exports =router;