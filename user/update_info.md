# 修改用户信息

> 修改用户信息  
> `/tiger/v3/web/accounts/info` `PATCH` `需要cookies`

## PATCH 请求信息

|     key     |         value          |  type  |        |
| :---------: | :--------------------: | :----: | :----: |
|  nickname   |          昵称          | string | `可选` |
|  fullname   |        真实姓名        | string | `可选` |
| description |        用户介绍        | string | `可选` |
|     sex     | 性别（0 为女，1 为男） |  int   | `可选` |
|  birthday   |       生日时间戳       |  int   | `可选` |
| avatar_url  |      用户头像 URL      | string | `可选` |

## 返回内容

!> 此请求无返回内容

> 更新于 2021.04.27
