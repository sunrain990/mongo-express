/**
 * Created by kevin on 16/8/31.
 */
var mongoose = require('mongoose')

var OptionsSchema = new mongoose.Schema({
    name: String,
    content: String,
    answer: {
        type: Number, default: 0
    }
})

var TopicSchema = new mongoose.Schema({
    name: {
        type: String
    },
    options: [
        OptionsSchema
    ],
    paper_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paper'
    }
})

var Topic = mongoose.model('Topic', TopicSchema)

var PaperSchema = new mongoose.Schema({
    name: {
        type: String, default: ''
    },
    topics: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Topic'
        }
    ]
})

var Paper = mongoose.model('Paper', PaperSchema)