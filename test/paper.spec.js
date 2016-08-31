/**
 * Created by kevin on 16/8/31.
 */
var mongoose  = require('mongoose')

uri = "mongodb://localhost/part9";
mongoose.connect(uri)

require('../models/paper.model');

var Paper = mongoose.model('Paper');
var Topic = mongoose.model('Topic');

var query = {
    name: '全国卷'
}

// 增加
// Paper.findOne(query, function(err, paper) {
//     if(!err) {
//         if(!paper) {
//             paper = new Paper();
//             paper.name = query.name
//         }
//
//         paper.save(function(err) {
//             if(!err) {
//                 console.log('paper created');
//             }else {
//                 console.log('paper create err: ' + err);
//             }
//         })
//     }
// })

// 添加topic
var paperid = "57c67947c29b4dca1590b6bc";

var optionnums = 5;
var optchoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var substroptchoices = optchoices.substr(0, optionnums);

var options = [];
for(var i=0;i<substroptchoices.length;i++){
    var tmpobj = {};
    tmpobj.name = substroptchoices[i];
    tmpobj.content = "";
    tmpobj.answer = 0;
    options.push(tmpobj);
}

Paper.findById(paperid, function(err, paper) {
    if(!err) {
        var topic = new Topic({
            name: 'topicname',
            options: options,
            paperid: paperid
        })
        topic.save(function(err, topicdoc) {
            if(!err) {
                paper.topics.push(topicdoc)

                paper.save(function(err, doc) {
                    if(!err) {
                        console.log('paper save success', doc);
                    }else {
                        console.log(err)
                    }
                })
            }else {
                console.log('topic save err: ' + err)
            }
        })
    }
})

