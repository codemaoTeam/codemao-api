# 创建工作室

> 创建工作室  
> `/web/work_shops/create` `POST` `需要cookies`

## POST 请求参数

|     key     |       value        |  type  |        |
| :---------: | :----------------: | :----: | :----: |
|    name     |     工作室名称     | string | `必须` |
| description |     工作室介绍     | string | `必须` |
| preview_url | 工作室 logo 的 URL | string | `必须` |

## 返回内容

| key |   value   |  type  |
| :-: | :-------: | :----: |
| id  | 工作室 ID | string |
