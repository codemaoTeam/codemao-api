# 设置用户名

> 设置用户名  
> `/tiger/v3/web/accounts/username` `PATCH` `需要cookies`

## 说明

在旧版本的社区中可以直接在网站上设置用户名，后来被移除了，但 API 仍然可调用

用途：可以直接[使用这里设置的用户名（username，而非 mickname 昵称）登录社区](/user/login.md)

!> 用户名只可以设置一次，首次设置后不可修改，请谨慎操作！！！

## PATCH 请求信息

|   key    |     value      |  type  |
| :------: | :------------: | :----: |
| username | 要设置的用户名 | string |

## 返回内容

?> 如果请求信息正确，此请求无返回内容
