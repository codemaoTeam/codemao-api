# 工作室信息

> 获取工作室信息  
> `/web/shops/<workshop_id>` `GET`  


## 返回内容
|          key          |        value         |  type  |
| :-------------------: | :------------------: | :----: |
|          id           |       工作室ID       |  int   |
|        shop_id        |     工作室识别码     |  int   |
|       label_id        |        `未知`        |  int   |
|         name          |      工作室名称      | string |
|       logo_url        |        `未知`        | string |
|        n_users        |        `未知`        |  int   |
|     manual_score      |        `未知`        |  int   |
|      total_score      |      工作室总分      |  int   |
|      preview_url      |    工作室图片URL     | string |
| recommend_preview_url |        `未知`        | string |
|      description      |      工作室介绍      | string |
|        n_works        |    工作室作品数量    |  int   |
|     n_contributes     |        `未知`        |  int   |
|        n_views        |   工作室被浏览次数   |  int   |
|        n_likes        |        `未知`        |  int   |
|         level         |      工作室等级      |  int   |
|        status         |      工作室状态      | string |
|        ordinal        |        `未知`        |  int   |
|   latest_joined_at    | 最后有人加入的时间戳 |  int   |
|      created_at       |   工作室创建时间戳   |  int   |
|      updated_at       |        `未知`        |  int   |


> 更新于 2021.04.25