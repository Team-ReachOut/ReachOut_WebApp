var mongoose = require('mongoose');
var article =mongoose.model('article');
module.exports.addone = function(req,res)
{
	// console.log("Header:" + req.headers);
	// console.log("Body:");
	console.log(req.body);
	console.log(req.body.username);
    console.log(req.body.password);
	article
		.create({
			username : req.body.username,
			password  :req.body.password
		},function(err,articles)
		{
			if(err)
			{
				console.log('error creating hotel :'+err);
				res
					.status(400)
					.json(err);
			}
			else{
				console.log('hotel created successfully');
				res
				  .status(200)
				  .json(articles);
			}
		});
}
module.exports.showone = function(req,res)
{
    article.findOne({username: req.body.username,password  :req.body.password}, function(err,obj) { console.log(obj);
    res.send(obj)});



}
