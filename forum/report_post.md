# 举报帖子

> 举报帖子
> `/web/reports/posts` `POST` `需要cookies`

## POST 请求参数

|     key     |    value     |  type  |        |
| :---------: | :----------: | :----: | :----: |
|   post_id   |   帖子 ID    | string | `必须` |
| description | 举报详细信息 | string | `必须` |
|  reason_id  | 举报原因 ID  | string | `必须` |

## 返回内容

| key |      value      |  type  |
| :-: | :-------------: | :----: |
| id  | 未知，一直为"0" | string |

> 更新于 2022.2.19
