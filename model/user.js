//生成model是由schema生成的模型，可以对数据库的操作

//引入之前配置的数据库模块db
const db = require('../config/db');

//设计schema
const schema = new db.Schema({
     username:{
          type:String,
          required:true
     },
     password:{
          type:String,
          required:true
     },
     nickname:String,
     sex:{
          type:Number,
          default:1
     },
     avatar:{
          type:String,
          default:'http://localhost:3030/img/avatar.jpg'
     },
     admin:{
          type:Number,
          default:0
     }
});

module.exports = db.model('user', schema);
// db.model 第一个参数是 model 的名字，并且他的复数形式是数据库表的名字