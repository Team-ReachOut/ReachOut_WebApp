var mongoose = require('mongoose');
var reach =mongoose.model('reach');
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
			password :req.body.password,
            relativeList :null
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
                var bitmap = new Buffer(req.body.imageString, 'base64');
                fs.writeFileSync("uploads/" + req.body.email + ".jpg", bitmap);
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

module.exports.showPhoto = function (req,res) {

    console.log(req.params.picture);
    var img = fs.readFileSync('./uploads/' + req.params.picture);
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');

}

module.exports.update = function (req,res) {

    fs.unlink('./uploads/' + req.body.email + '.jpg',function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
    });

    var bitmap = new Buffer(req.body.imageString, 'base64');
    fs.writeFileSync("uploads/" + req.body.email + ".jpg", bitmap);

	reach
		.updateOne({
			"email": req.body.email
		}, {
			$set: {
                "name": req.body.name,
                "bloodgroup": req.body.bloodgroup,
                "phonenumber": req.body.phonenumber,
                "address": req.body.address,
                "age": req.body.age,
                "sex": req.body.sex,
                "email" :req.body.email,
                "password": req.body.password
			}
		}, function (err, results) {
			console.log(results)
            res
				.status(200)
				.send(JSON.stringify({ name: req.body.name, bloodgroup: req.body.bloodgroup,
				email: req.body.email, phonenumber: req.body.phonenumber,
				address: req.body.address, age: req.body.age, sex: req.body.sex,
				password: req.body.password }, null, 3));
        });

}

module.exports.updateRelative = function (req, res) {

	var newRelative = {
		relativeName: req.body.relativeName,
		relativeAge: req.body.relativeAge,
		relativeBloodgroup: req.body.relativeBloodgroup
	}

	var oldRelatives = []

    reach.findOne({email: req.body.email, password  :req.body.password}, function(err,obj) {oldRelatives = obj.relativeList})
		.exec(function(err,doc){
			doc.relativeList.push(newRelative);
			doc.save(function(err,ur){
				res.json(ur.relativeList[ur.relativeList.length-1]);
				}

			);

        })
}