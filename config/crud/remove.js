/**
 * Created by kevin on 16/8/31.
 */
var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

Book.findOne({author: 'Jim'}, function(err, doc) {
    if(err) {
        console.log('findOne err:', err);
        return;
    }
    if(doc) {
        doc.remove();
    }
})

//User.findOneAndRemove(
//    {name : /Simon/},
//    {sort : 'lastLogin', select : 'name email'},
//    function (err, user){
//        if (!err) {
//            console.log(user.name + " removed");
//            // Simon Holmes removed
//        }; }
//);