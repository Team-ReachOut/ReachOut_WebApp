var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema(
{
	username:
	{
		type :String,
		require :true
	},
	password :
	{
		type :String,
		require :true
	}
});
mongoose.model('article',articleSchema,'Reach');