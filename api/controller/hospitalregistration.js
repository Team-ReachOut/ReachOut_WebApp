var mongoose = require('mongoose');
var hospital = mongoose.model('reach_regis');

module.exports.addhospital = function(req,res)
{
	hospital.create({
		name :req.body.name,
		phonenumber : req.body.phonenumber,
		email : req.body.email,
		city : req.body.city,
		address : req.body.address
	},function(err,hospital)
	{
		if(err)
		{
			res.status(400)
			   .json(err);
		}
		else
		{
			res.json(hospital);
		}

	});
}

module.exports.showall=function(req,res)
{
	hospital
		.find()
		.exec(function(err,hospitals)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.json(hospitals);
			}
		})
}
module.exports.updateit=function(req,res)
{
	hospital
		.updateOne({
			"email":req.body.email
		},{
			$set :{
				"verified" :true
			}
		},function(err,resp)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.status(200)
				   .json("verified");
			}
		});

}