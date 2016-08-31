/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

var KlassSchema = new mongoose.Schema({
    cid: Number,
    classname: String,
    createTime: Date,
    lastLogin: Date
})

mongoose.model('Klass', KlassSchema)