var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    roll : {type:String,required:true,trim: true},
    name : {type:String,required:true,trim: true},
    subject : {type:String,required:true,trim: true}
},{versionKey: false});

mongoose.model('student',studentSchema);
module.exports = mongoose.model('student');