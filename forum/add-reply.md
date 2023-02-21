# 添加回帖

> 在相应帖子添加回帖  
> `/web/forums/posts/<post_id>/replies` `POST` `需要cookies`

## POST 请求参数

|   key   |         value         |  type  |        |
| :-----: | :-------------------: | :----: | :----: |
| content | 回帖内容（HTML 格式） | string | `必须` |

## 返回内容

| key |  value  |  type  |
| :-: | :-----: | :----: |
| id  | 回帖 ID | string |
