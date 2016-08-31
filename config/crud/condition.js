/**
 * Created by kevin on 16/8/31.
 */
var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

var cond = {
    $or: [
        {author: 'Jame'},
        {author: 'Jim'}
    ]
};

Book.find(cond, function(err, docs) {
    if(err) {
        console.log('find by cond err:', err);
        return;
    }
    console.log('cond:', cond, 'result:', docs);
});

//var weekdays = ['monday', 'tuesday', 'wednesday', 'thursday',
//    'friday'];
//var weekdaySchema = new Schema({
//    day : {type: String,  enum: weekdays}
//});

//var teenSchema = new Schema({
//    age : {type: Number, min: 13, max:19}
//});

//var weekdaySchema = new Schema({
//    day : {type: String, match: /^(mon|tues|wednes|thurs|fri)day$/i}
//});