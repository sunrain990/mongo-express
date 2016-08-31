/**
 * Created by kevin on 16/8/31.
 */
var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

Book.find({},function (err, docs) {
    if(err) {
        console.log('err:', err);
        return;
    }
    console.log('result:', docs);
});