/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var User = mongoose.model('User', {
    nickname: {
        type: String,
        trim: true
    },
    blog: {
        type: String,
        set: function(url) {
            if(!url) return url;
            if(0 !== url.indexOf('http://') || 0 !== url.indexOf('https://')) {
                url = 'http://' + url
            }
            return url;
        }
    }
});

var user = new User({
    nickname: "    Sid   ",
    blog: 'love.com'
});

user.save();

console.log('user:', user);