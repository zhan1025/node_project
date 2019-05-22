const express = require('express');
const UserModel = require('../model/user');
const router = express.Router();

//获取用户列表信息
router.get('/find', (req, res) => {
     //1.链接数据库
     //2.需要操作那张表，就需要创建一个相应的model对象
     //使用model对象操作数据库
     UserModel.find()
          .then(data => {
               console.log(data);
               res.send({
                    code: 0,
                    msg: '获取成功',
                    data: {
                         list: data
                    }
               });
          })
          .catch(err => {
               console.log(err.message);
               res.send({
                    code: -1,
                    msg: '获取失败'
               })
          })
});

//新增用户
router.post('/add', (req, res) =>{
     //获取前端传递的数据
     /**
      * @param name 用户名
      * @param pwd 密码
      * @param nickname 昵称
      * @param avatar 头像
      */
     let name = req.body.name;
     let pwd = req.body.pwd;
     let nickname = req.body.nickname;
     let avatar = req.body.avatar;

     //校验数据
     if(!name ||!pwd){
          res.send({
               code : -1,
               msg : '用户名或密码不能为空'
          });
          return;
     }
     // 通过 UserModel 生成 user 实例
     const user = new UserModel({
          username: name,
          password: pwd,
          nickname: nickname,
          avatar: avatar
     })
     //使用user实例的方法，存入数据库
     user.save().then(()=>{
          res.send({
               code :0,
               msg : '注册成功'
          })
     }).catch(err =>{
          res.send({
               code : -1,
               msg : '注册失败'
          })
     })
});
module.exports = router;