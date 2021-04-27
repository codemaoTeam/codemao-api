# 修改用户密码

> 修改用户密码 
> `/tiger/v3/web/accounts/password` `PATCH` `需要cookies`  


## PATCH请求信息
|       key        |   value    |  type  |        |
| :--------------: | :--------: | :----: | :----: |
|   old_password   |   旧密码   | string | `必须` |
|     password     |   新密码   | string | `必须` |
| confirm_password | 重复新密码 | string | `必须` |


## 返回内容
!> 如果请求信息正确，此请求无返回内容


> 更新于 2021.04.27