//用户操作
const UserModel = require('../model/user');
const bcrypt =  require('bcrypt');
//注册
const reg = (req,res)=>{
     UserModel
               .findOne({username:req.body.username})
               .then(data=>{
                    if(!data){
                         let body = Object.assign({},req.body,{
                              password:bcrypt.hashSync(req.body.password,10)
                         })
                         let user = new UserModel(body);
                         user.save()
                              .then((data)=>{
                                   console.log(data);
                                   res.send({
                                        code:0,
                                        msg:'注册成功'
                                   });
                              })
                              .catch((err)=>{
                                   console.log(err.message);
                                   res.send({
                                        code:-1,
                                        msg:'注册失败'
                                   })
                              })
                    }else{
                         res.send('用户名已存在');
                    }
               })
     
}
//登录
const login = (req,res)=>{
     UserModel
               .findOne({username:req.body.username})
               .then(data=>{
                    if(!data){
                         res.send('用户名已存在');
                         return;
                    }
                    let pwd = data.password;
                    let isOk=bcrypt.compareSync(req.body.password,pwd);
                    if(isOk){
                         res.send('登陆成功');
                    }else{
                         res.send('密码错误');
                    }
                    }
               )
}
module.exports = {
     reg
     ,login
}