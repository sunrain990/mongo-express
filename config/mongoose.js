/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');
var config = require('./config')

module.exports = function() {
    var db = mongoose.connect(config.mongodb);

    require('../models/user.server.model.js')
    require('../models/klass.server.model.js')
    return db;
}