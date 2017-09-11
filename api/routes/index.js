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
	.route('/docadd')
	.post(cnt1.docadd);

router
	.route('/docshow')
	.post(cnt1.docshow);

router
	.route('/showall')
	.get(cnt1.showall);

router
    .route('/uploads/:picture')
    .get(cnt1.showPhoto);

router
	.route('/update')
	.post(cnt1.update);

module.exports =router;