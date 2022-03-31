# 登录

> 登录编程猫社区  
> `/tiger/v3/web/accounts/login` `POST`

## POST 请求参数

|   key    |            value            |  type  |        |
| :------: | :-------------------------: | :----: | :----: |
|   pid    | 平台 ID（[查看详情](#pid)） | string | `必须` |
| identity |     手机号/用户名/邮箱      | string | `必须` |
| password |            密码             | string | `必须` |

### pid

可在编程猫官网 JS 中获得，以下值中任意一个都是合法的：

|                                   platform                                    |  value   |
| :---------------------------------------------------------------------------: | :------: |
| [Kitten](https://kitten4.codemao.cn/), [Kitten4](https://kitten4.codemao.cn/) | OqMVXvXp |
|                     [turtle](https://turtle.codemao.cn/)                      | 23AVXalo |
|                       [wood](https://wood.codemao.cn/)                        | n6kwoCSe |
|                       [通天塔](https://tob.codemao.cn/)                       | cdRPMRe4 |
|                  [源码精灵](https://trainer-pc.codemao.cn/)                   | zxKuFvkJ |
|                       [社区](https://shequ.codemao.cn/)                       | 65edCTyg |
|                       [BOX3](https://box3.codemao.cn/)                        | ANNRvHZT |
|                        [BOX2](https://box.codemao.cn/)                        | EpyqlRET |
|                       [CoCo](https://coco.codemao.cn/)                        | 7KeVbBdw |
|                     [MakerIDE](https://maker.codemao.cn/)                     | iZvfI6oa |
|                 [ScratchScience](https://science.codemao.cn/)                 | q2UHWZx5 |

> 可能是被编程猫官方用于记录登录时所在的平台，所以我们建议使用社区对应的 `pid`

## 返回内容

|    key    |               value                | type |
| :-------: | :--------------------------------: | :--: |
| user_info | 用户信息（[查看详情](#user_info)） | JSON |
|   auth    |     认证（[查看详情](#auth)）      | JSON |

### user_info

|     key     |         value          |  type  |
| :---------: | :--------------------: | :----: |
|     id      |           ID           |  int   |
|  nickname   |          昵称          | string |
| avatar_url  |        头像链接        | string |
|  fullname   |        真实姓名        | string |
|     sex     | 性别（0 为女，1 为男） |  int   |
|  birthday   |       生日时间戳       |  int   |
|     qq      |        QQ 号码         | string |
| description |        自我描述        | string |

### auth

|       key        |              value              |  type  |
| :--------------: | :-----------------------------: | :----: |
|      token       |              token              | string |
|      email       |            邮箱地址             | string |
|   phone_number   | 手机号（格式：123\*\*\*\*4567） | string |
|   has_password   |          是否设置密码           |  bool  |
| is_weak_password |          是否为弱密码           |  int   |

> 更新于 2022.03.31
