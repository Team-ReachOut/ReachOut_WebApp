var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var hospital_schema = new mongoose.Schema(
{
	name:
	{
		type :String,
		require :true
	},
	phonenumber1:
	{
		type : String,
		require :true
	},
	phonenumber2:
	{
		type : String,
		require :true
	},
	phonenumber3:
	{
		type : String,
		require :true
	},
    address : {
    	type:String,
    	require : true
    
  	},
	lat :
	{
		 type: SchemaTypes.Double
		
	},
	lng :
	{
		 type: SchemaTypes.Double
		
	},
	speciality:[String],
	services:[String]

});
mongoose.model('hospital_model',hospital_schema,'hospital');