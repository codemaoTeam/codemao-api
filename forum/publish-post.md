# 发布帖子

!> 调用此 API 需要账号绑定手机号

> 在相应板块发布帖子  
> `/web/forums/boards/<board_id>/posts` `POST` `需要cookies`

> 在工作室发布帖子  
> `/web/works/subjects/<workshop_id>/post` `POST` `需要cookies`

## POST 请求参数

|    key    |                                                  value                                                   |  type  |        |
| :-------: | :------------------------------------------------------------------------------------------------------: | :----: | :----: |
|   title   |                                                 帖子标题                                                 | string | `必须` |
|  content  |                                          帖子内容（HTML 格式）                                           | string | `必须` |
| studio_id | 活动 ID （当且仅当 URL 中的 `<board_id>` 为 17（热门活动）时，此信息有效，帖子会发布在相应活动的讨论区） | string | `可选` |

## 返回内容

| key |  value  |  type  |
| :-: | :-----: | :----: |
| id  | 帖子 ID | string |

> 更新于 2021.07.21
