let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    courseTitle: String,
    classHours: Number,
    studentNumbers: Number,
    studentCategory: String,
    teacherName: String,
    teacherType: String
}, {
    collection: 'courses'
});

module.exports = mongoose.model('User', UserSchema);