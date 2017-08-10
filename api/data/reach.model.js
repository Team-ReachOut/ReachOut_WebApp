var mongoose = require('mongoose');
var reachSchema = new mongoose.Schema(
{
	name:
	{
		type :String,
		require :true
	},
	bloodgroup:{
		type :String,
		require :true
	},
	email:
	{
		type :String,
		require : true
	},
	phonenumber:
	{
		type : Number,
		require :true
	},

    address : {
    	type:String,
    	require : true
    
  	},
  	age:{
  		type : Number,
		require :true
  	},
  	sex :
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
mongoose.model('reach',reachSchema,'Reach1');