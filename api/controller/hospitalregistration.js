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

