/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    // 唯一索引
    isbn: {
        type: Number,
        unique: true
    },
    // 辅助索引
    name: {
        type: String,
        index: true
    }
})