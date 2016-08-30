/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10')

var BookSchema = new mongoose.Schema({
    name: String,
    isbn: Number
})

BookSchema.statics.findByISBN = function(isbn, cb) {
    this.findOne({isbn: isbn}, function(err, doc) {
        cb(err, doc)
    })
}

BookSchema.methods.print = function() {
    console.log('Book Information:');
    console.log('\tTitle:', this.name);
    console.log('\tISBN:', this.isbn);
}

var Book = mongoose.model('Book', BookSchema)

var book = new Book({
    name: 'MEAN Web Development',
    isbn: 23482093
})

book.save(function(err) {
    if(err) {
        return console.log('save book failed', err);
    }

    Book.findByISBN(23482093, function(err, doc){
        console.log('findByISBN, err, doc:', err, doc);
    })

    book.print();
})