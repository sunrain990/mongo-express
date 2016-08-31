/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    uid: Number,
    username: String,
    createTime: Date,
    lastLogin: Date,
    class: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Klass'
    }
})

mongoose.model('User', UserSchema)