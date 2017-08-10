var mongoose = require('mongoose');
var reach =mongoose.model('reach');
var multer = require('multer');
var fs = require('fs');

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
