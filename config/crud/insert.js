/**
 * Created by kevin on 16/8/31.
 */
var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

var book = new Book({
    name: "MEAN Web Development",
    author: "Green",
    publishTime: new Date()
});

book.author = 'Jim';

book.save(function(err){
    console.log("save status: " + err?"success":"fail");
});