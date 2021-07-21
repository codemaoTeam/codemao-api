# 板块信息

> 获取论坛单个版块详细信息  
> `/web/forums/boards/<board_id>` `GET`

## 返回内容

|      key      |       value        |  type  |
| :-----------: | :----------------: | :----: |
|      id       |      板块 ID       | string |
|     name      |      板块名称      | string |
|  description  |      板块描述      | string |
|   icon_url    |    板块图标 URL    | string |
|    is_hot     |   是否为热门板块   |  bool  |
|  has_popular  |       `未知`       |  bool  |
| has_selection |       `未知`       |  bool  |
|    n_posts    |   板块中帖子总数   |  int   |
| n_discussions | 板块中帖子回复总数 |  int   |

> 更新于 2021.07.21
