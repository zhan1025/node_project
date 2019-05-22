//配置数据库，对数据库的操作
//引入mongoose模块
const mongoose = require('mongoose');

//数据库的链接地址,链接到hello这个数据库
const url = 'mongodb://127.0.0.1:27017/hello';

mongoose
     .connect(url,{ useNewUrlParser: true })
     .then((data)=>{
          // console.log(data);
          console.log("数据库连接成功");
     })
     .catch((err)=>{
          // console.log(err);
          console.log("数据库连接失败");
     })

//将mongoose暴露出去
module.exports = mongoose;