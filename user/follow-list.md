# 关注列表

> 获取任意用户所关注的用户  
> `/creation-tools/v1/user/followers` `GET`


## URL参数
|   key   |    value     | type  |        |
| :-----: | :----------: | :---: | :----: |
| user_id |    用户ID    |  int  | `必须` |
| offset  |     页码     |  int  | `必须` |
|  limit  | 每一页的数量 |  int  | `必须` |


## 返回内容
|     key     |            value             |   type   |
| :---------: | :--------------------------: | :------: |
|  **items**  | **由多个JSON构成的用户列表** | **list** |
|     id      |            用户ID            |   int    |
|  nickname   |           用户昵称           |  string  |
| avatar_url  |         用户头像链接         |  string  |
|   n_works   |            `未知`            |   int    |
| total_likes |        用户被点赞总数        |   int    |
| is_followed |        是否关注该用户        |   bool   |
| description |         用户自我描述         |  string  |
|             |                              |          |
|   offset    |             页码             |   int    |
|    limit    |         每一页的数量         |   int    |
|    total    |           作品总数           |   int    |
|   counted   |            `未知`            |   bool   |


> 更新于 2021.04.24