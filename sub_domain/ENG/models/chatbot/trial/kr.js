const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KR_FreeTrial_Schema= new Schema({
    lang_type: String,
    course_type: String,
    level: String,
    course_date: { type: Date, expires: 3 ,default: Date.now,},
    dayOfWeek: String,
    begin_time: String,
    end_time: String,
    content: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const KR_Trial= mongoose.model('KR_FreeTrial_Schema',KR_FreeTrial_Schema, 'KR_Trial');
module.exports= KR_Trial;