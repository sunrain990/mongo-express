/**
 * Created by kevin on 16/8/30.
 */
var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

PersonSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
});

//设置转换为json时候, 有虚拟属性
PersonSchema.set('toJSON', {getters: true, virtual: true})

var Person = mongoose.model('Person', PersonSchema);

var person = new Person({
    firstName: 'Sid',
    lastName: 'Chen'
});

console.log('user fullName', person.fullName);

console.log('JSON:', JSON.stringify(person));