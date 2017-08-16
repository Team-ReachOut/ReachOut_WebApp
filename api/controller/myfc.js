var mongoose = require('mongoose');
var reach =mongoose.model('reach');
var multer = require('multer');
var fs = require('fs');
var doc = mongoose.model('reach_doc');
module.exports.addone = function(req,res)
{

	reach
		.create({
			name : req.body.name,
			bloodgroup  :req.body.bloodgroup,
			email:req.body.email,
			phonenumber:req.body.phonenumber,
			address:req.body.address,
			age:req.body.age,
			sex:req.body.sex,
			password :req.body.password
		},function(err,reachs)
		{
			if(err)
			{
				console.log('error creating Record :'+err);
				res
					.status(400)
					.json(err);
			}
			else{
				console.log('Record created successfully');
				res
				  .status(200)
				  .json(reachs);
			}
		});
}
module.exports.showone = function(req,res)
{
    reach.findOne({email: req.body.email,password  :req.body.password}, function(err,obj) { console.log(obj);
    res.send(obj)});

}
module.exports.docadd = function(req,res)
{

	doc
		.create({
			name : req.body.name,
			//bloodgroup  :req.body.bloodgroup,
			email:req.body.email,
			phonenumber:req.body.phonenumber,
			address:req.body.address,
			//age:req.body.age,
			//sex:req.body.sex,
			password :req.body.password,
			driver_name:req.body.driver_name,
			driver_pnumber:req.body.driver_pnumber,
			ambulance:req.body.ambulance,
			lat:req.body.lat,
			lon:req.body.lon
		},function(err,reachs)
		{
			if(err)
			{
				console.log('error creating Record :'+err);
				res
					.status(400)
					.json(err);
			}
			else{
				console.log('Record created successfully');
				res
				  .status(200)
				  .json(reachs);
			}
		});
}
module.exports.docshow = function(req,res)
{
    doc.findOne({email: req.body.email,password  :req.body.password}, function(err,obj) { console.log(obj);
    res.send(obj)});

}
module.exports.showall = function(req,res)
{
    doc
		.find()
		.exec(function(err,articles)
		{
			if(err){
				console.log('err in finding :'+ err);
				res
				  .status(500)
				  .json(err);
			}
			else{
				console.log("found "+articles.length +"articles");
				res
				  .json(articles);
			}
		})

}
