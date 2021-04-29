# 收藏作品列表

> 获取任意用户最新收藏的作品的信息  
> `/creation-tools/v1/user/center/collect/list` `GET`


## URL参数
|   key   |    value     | type  |        |
| :-----: | :----------: | :---: | :----: |
| user_id |    用户ID    |  int  | `必须` |
| offset  |     页码     |  int  | `必须` |
|  limit  | 每一页的数量 |  int  | `必须` |


## 返回内容
|   key   |                     value                      | type  |
| :-----: | :--------------------------------------------: | :---: |
|  items  | 由多个JSON构成的作品列表（[查看详情](#items)） | list  |
| offset  |                      页码                      |  int  |
|  limit  |                  每一页的数量                  |  int  |
|  total  |                    作品总数                    |  int  |
| counted |                     `未知`                     | bool  |

### items
|        key        |      value       |  type  |
| :---------------: | :--------------: | :----: |
|        id         |      作品ID      |  int   |
|       name        |      作品名      | string |
|      preview      | 作品封面图片链接 | string |
|      user_id      |      用户ID      |  int   |
|     nickname      |     用户昵称     | string |
|    avatar_url     |   用户头像链接   | string |
|    views_count    |  作品被浏览次数  |  int   |
|    likes_count    |  作品被点赞次数  |  int   |
| collections_count |  作品被收藏次数  |  int   |
|    is_deleted     |      `未知`      |  bool  |
|   publish_time    |  作品发布时间戳  |  int   |
|     work_type     |     作品类型     |  int   |
|    description    |     作品介绍     | string |


> 更新于 2021.04.29