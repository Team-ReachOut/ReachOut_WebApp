9var mongoose = require('mongoose');
var manager = mongoose.model('manager');

module.exports.addmanager = function(req,res)
{
	manager.create({
		name :req.body.name,
		phonenumber : req.body.phonenumber,
		email : req.body.email,
		city : req.body.city,
		password : req.body.password
	},function(err,manager)
	{
		if(err)
		{
			res.status(400)
			   .json(err);
		}
		else
		{
			res.json(manager);
		}

	});
}
