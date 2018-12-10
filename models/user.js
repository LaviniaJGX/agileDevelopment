let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    account:String,
    role:Number
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', UserSchema);