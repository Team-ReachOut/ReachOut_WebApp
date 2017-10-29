var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/reach';
var retry = null;
mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});

require('./reach.model');
require('./reach_doc.model');
require('./manager');
require('./reach_regis');
require('./hospital_model');