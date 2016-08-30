/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10')

var ResellerSchema = new mongoose.Schema({
    address: String
})

ResellerSchema.post('save', function(data) {
    console.log('this is ResellerSchema post save middleware',data);
})

ResellerSchema.pre('save', true, function(next, done) {
    console.log('this is ResellerSchema pre save middleware');
    next();
    done();
})


var Reseller = mongoose.model('Reseller', ResellerSchema)

var reseller = new Reseller({
    address: '101st, People Read'
});

reseller.save();