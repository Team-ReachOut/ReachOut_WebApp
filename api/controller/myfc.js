var mongoose = require('mongoose');
var article =mongoose.model('article');
var multer = require('multer');
var fs = require('fs');

module.exports.addone = function(req,res)
{

	var upload = multer({ dest: './uploads'}).single('upl');
	
	upload(req,res,function(err)
	{
		if (err) {
			console.log(err);
		    res.send('error');
		}
		console.log(req.file.path);
		res.send('done');
	    res.status(204).end();

	    fs.rename('./' + req.file.path, './uploads/' + req.file.originalname, function (err) {
        	if (err) throw err
    	})
	});
}
module.exports.showone = function(req,res)
{
    article.findOne({username: req.body.username,password  :req.body.password}, function(err,obj) { console.log(obj);
    res.send(obj)});

}
module.exports.showPhoto = function (req,res) {

	// express.static('./uploads');

	console.log(req.params.picture);
    var img = fs.readFileSync('./uploads/' + req.params.picture);
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');

}