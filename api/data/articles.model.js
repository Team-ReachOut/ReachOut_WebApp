var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema(
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
	location : {
    address : String,
    coordinates : {
      type : [Number],
      index : '2dsphere'
    }
  	},
  	age:{
  		type : Number,
		require :true
  	},
  	photo:{
  		type :String,
  		require :true

  	},
	password :
	{
		type :String,
		require :true
	}
});
mongoose.model('article',articleSchema,'Reach1');