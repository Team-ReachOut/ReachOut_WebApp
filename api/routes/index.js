var express = require('express');
var router = express.Router();

var cnt1 = require('../controller/myfc.js');
var cnt2 = require('../controller/managercontroller.js');
var cnt3 = require('../controller/hospitalregistration.js');

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
	.route('/showallrel/:email')
	.get(cnt1.showallrel);

router
    .route('/uploads/:picture')
    .get(cnt1.showPhoto);

router
	.route('/update')
	.post(cnt1.update);

router
	.route('/updateRelative')
	.post(cnt1.updateRelative);

router
	 .route('/addmanager')
	 .post(cnt2.addmanager);

router
	 .route('/getmanager')
	 .post(cnt2.getonemanager);

router
	.route('/addhospital')
	.post(cnt3.addhospital);

router
	.route('/showhospitals')
	.get(cnt3.showall);

router
	.route('/updateverified')
	.post(cnt3.updateit);

router
	.route('/getHospitalInfo')
	.post(cnt3.getHospitalInfo);

router
	.route('/hospitals')
	.get(cnt3.showhospitals);

router
	.route('/unique')
	.get(cnt3.unique);

router
	.route('/bloodbank')
	.get(cnt3.bloodbanklist);

router
	 .route('/speciality')
	 .post(cnt3.filter);

module.exports =router;