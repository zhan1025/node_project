# 学生管理系统接口文档

以下接口的 baseURL 为 http://localhost:3000

## 1、注册

- 请求地址：`/api/reg`
- 请求方式：`POST`
- 请求参数：`body`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |
| sex | Number | N | 性别 |
| nickname | String | N | 用户昵称 |
| avatar | String | N | 用户头像 |
| admin | Number | N | 是否是管理员 |

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```

## 2、登录

- 请求地址：`/api/login`
- 请求方式：`POST`
- 请求参数：`body`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```
