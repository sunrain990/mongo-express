/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var OrderSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
        max: 1000,
        min: 5
    },
    status: {
        type: String,
        enum: ['created', 'success', 'failed']
    },
    desc: {
        type: String,
        match: /book/g,
        validate: function(desc) {
            return desc.length >= 10;
        }
    }
});

var Order = mongoose.model('Order', OrderSchema);

var order = new Order();

order.count = 10;
order.status = 'created';
order.desc = 'this is a great papapa book'

order.save(function(err) {
    if(err) {
        return console.log('save failed:', err)
    }
    console.log('save success');
})