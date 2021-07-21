# 发布帖子

!> 调用此 API 需要账号绑定手机号

> 在相应板块发布帖子  
> `/web/forums/boards/<board_id>/posts` `POST` `需要cookies`

> 在工作室发布帖子  
> `/web/works/subjects/<workshop_id>/post` `POST` `需要cookies`

## POST 请求参数

|    key    |                                                             value                                                              |  type  |        |
| :-------: | :----------------------------------------------------------------------------------------------------------------------------: | :----: | :----: |
|   title   |                                                            帖子标题                                                            | string | `必须` |
|  content  |                                                     帖子内容（HTML 格式）                                                      | string | `必须` |
| studio_id | 活动 ID （如果添加此信息，URL 中的 `workshop_id` 只有为 17（热门活动）时，才会显示在相应活动下，如果在工作室发帖，此信息无效） | string | `可选` |

## 返回内容

| key |  value  |  type  |
| :-: | :-----: | :----: |
| id  | 帖子 ID | string |

> 更新于 2021.07.21
