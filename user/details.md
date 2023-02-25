# 个人信息

> 获取个人信息  
> `/web/users/details` `GET` `需要cookies`

## 返回内容

|           key           |                              value                              |  type  |
| :---------------------: | :-------------------------------------------------------------: | :----: |
|           id            |                               ID                                | string |
|        nickname         |                              昵称                               | string |
|       avatar_url        |                            头像链接                             | string |
|          email          |                            邮箱地址                             | string |
|          gold           |                             金币数                              |  int   |
|           qq            |                             QQ 号码                             | string |
|        real_name        |                            真实姓名                             | string |
|           sex           |                性别（`FEMALE`为女，`MALE`为男）                 | string |
|        username         |                             用户名                              | string |
|     voice_forbidden     |                           是否被禁言                            |  bool  |
|        birthday         |                           生日时间戳                            |  int   |
|       description       |                            自我描述                             | string |
|      phone_number       |                 手机号（格式：123\*\*\*\*4567）                 | string |
|       create_time       |                         用户创建时间戳                          |  int   |
|         oauths          | 由多个 JSON 构成的第三方账号绑定情况列表（[查看详情](#oauths)） |  list  |
|      has_password       |                          是否设置密码                           |  bool  |
|        user_type        |                             `未知`                              |  int   |
|     show_guide_flag     |            是否在首页显示创作教程（0 为否，1 为是）             |  int   |
|       has_signed        |                      是否签订《友好契约》                       |  bool  |
| has_seen_primary_course |           是否上过编程猫课程（1 上过为，2 没上过为）            |  int   |
|      author_level       |     [用户等级](https://shequ.codemao.cn/friendly_protocol)      |  int   |

### oauths

列表中有很多项，只有前两项（wechat，qq）是编程猫社区支持绑定的，其余无实际用途。

|   key    |      value       |  type  |
| :------: | :--------------: | :----: |
|    id    |        ID        |  int   |
|   name   |     平台名称     | string |
| is_bound | 是否绑定了该平台 |  bool  |
