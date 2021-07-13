# 发布作品

> 发布一个存在的作品  
> `https://api-creation.codemao.cn/kitten/work/<work_id>/publish` `PUT` `需要cookies`

## PUT 请求信息

|     key     |                 value                  |  type  |        |
| :---------: | :------------------------------------: | :----: | :----: |
| cover_type  |           `未知`（默认为 1）           |  int   | `可选` |
|  cover_url  |              封面图片 URL              | string | `必须` |
| description |          作品描述（默认为空）          | string | `可选` |
| fork_enable | 是否允许再创作（0 为不允许，1 为允许） |  int   | `必须` |
|   labels    |        作品标签（可以为空列表）        |  list  | `必须` |
|    name     |                作品名称                | string | `必须` |
|  operation  |                操作说明                | string | `可选` |
|   work_id   |           作品 ID（不需要）            |  int   | `可选` |

> 更新于 2021.07.13
