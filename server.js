const express = require('express');
const path = require('path');
const app = express();

//引用拆分出去的路由文件
const userRouter = require('./routes/user');


//设置请求中间件,记录请求
const log = (req,res,next)=>{
     let time= new Date();
     req.time =time.getHours()+":"+time.getMinutes();
     console.log('客户端请求时间',req.time);
     next();}
app.use(log);


//设置ejs页面的存放路径，级使用模板引擎
app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','ejs');


//设置使用req.body,获取前端传递的post数据
app.use(express.json());
app.use(express.urlencoded({  extended : false }));


//设置静态资源托管
app.use(express.static(path.resolve(__dirname,'./public')));


//使用用户路由，里面有查找，新增等方法
app.use('/api',userRouter);

// app.get('/',(req,res)=>{
//      res.send('你好');
// });

app.listen(3030,()=>{console.log('服务启动成功')});