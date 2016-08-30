/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var User = mongoose.model('User', {
    username: String
})

var News = mongoose.model('News', {
    title: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

var user = new User({
    username: 'Sid'
});

var news = new News({
    title: 'congratulation!',
    author: user
})

user.save(function(err){
    if(err){
        return console.log('save user failed:', err);
    }
    news.save(function(err){
        if(err){
            return console.log('save news failed:', err);
        }
        News.findOne().populate('author').exec(function(err, doc) {
            console.log('after populate', err, doc);
        })
    })
})