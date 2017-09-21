var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var manager = new mongoose.Schema(
{
	name:
	{
		type :String,
		require :true
	},
	phonenumber:
	{
		type : Number,
		require :true
	},

    email : {
    	type:String,
    	require : true
    
  	},
  	city:
  	{
  		type : String,
  		require :true
  	},
  	password :
	{
		type :String,
		require :true
	}
});
mongoose.model('manager',manager,'Manager');