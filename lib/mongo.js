const config = require('config-lite');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//连接数据库
mongoose.connect(config.mongodb);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

//创建schema
const userSchema = new Schema({
    userName: String,
    userPwd: String
});
//创建model
let User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};