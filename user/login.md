# 登录

> 登录编程猫社区  
> `/tiger/v3/web/accounts/login` `POST`


## POST请求参数
|   key    |                  value                   |  type  |        |
| :------: | :--------------------------------------: | :----: | :----: |
|   pid    | 必须为`65edCTyg`，可在编程猫官网JS中获得 | string | `必须` |
| identity |            手机号/用户名/邮箱            | string | `必须` |
| password |                   密码                   | string | `必须` |


## 返回内容
|    key    |               value                | type  |
| :-------: | :--------------------------------: | :---: |
| user_info | 用户信息（[查看详情](#user_info)） | JSON  |
|   auth    |     认证（[查看详情](#auth)）      | JSON  |

### user_info
|     key     |        value         |  type  |
| :---------: | :------------------: | :----: |
|     id      |          ID          |  int   |
|  nickname   |         昵称         | string |
| avatar_url  |       头像链接       | string |
|  fullname   |       真实姓名       | string |
|     sex     | 性别（0为女，1为男） |  int   |
|  birthday   |      生日时间戳      |  int   |
|     qq      |        QQ号码        | string |
| description |       自我描述       | string |

### auth
|       key        |            value            |  type  |
| :--------------: | :-------------------------: | :----: |
|      token       |            token            | string |
|      email       |          邮箱地址           | string |
|   phone_number   | 手机号（格式：123****4567） | string |
|   has_password   |        是否设置密码         |  bool  |
| is_weak_password |        是否为弱密码         |  int   |


> 更新于 2021.04.29