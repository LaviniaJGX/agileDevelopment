const mongoose = require('mongoose')
var mongodbUri = 'mongodb://test:dreammj01@ds151453.mlab.com:51453/testcourses';
mongoose.connect(mongodbUri, {
    useNewUrlParser: true
})
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('connected', function (){
    console.log('mongodb:'+db.name+' is listening')
})
db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});
module.exports = db