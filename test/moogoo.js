/**
 * Created by kevin on 16/8/31.
 */
var mongoose  = require('mongoose')

uri = "mongodb://localhost/part9";
mongoose.connect(uri)

require('../models/klass.server.model.js');
require('../models/user.server.model.js');

var User = mongoose.model('User');
var Class = mongoose.model('Klass')

User.findOne({username: 'xiaoxiao'}).populate({
    path: 'class'
}).exec(function(err, docs) {
    if(!err) {
        console.log(docs);
    }else {
        console.log(err);
    }
})
