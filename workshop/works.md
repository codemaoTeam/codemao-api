# 工作室作品信息

> 获取工作室作品信息  
> `web/works/subjects/<workshop_id>/works` `GET`

## GET 请求信息

|       KEY       |                VALUE                | TYPE  |        |
| :-------------: | :---------------------------------: | :---: | :----: |
|     offset      |        起始编号 \[默认为 0\]        | `int` | `可选` |
|      limit      |       列举数量 \[默认为 15\]        | `int` | `可选` |
|      sort       |      排序方式[可选参数](#sort)      | `str` | `可选` |
|     user_id     |     将哪一个用户的作品排在最前      | `int` | `可选` |
| work_subject_id | 如果指定，必须与`<workshop_id>`一致 | `int` | `可选` |

### sort

|   类型   |       值        |
| :------: | :-------------: |
|   默认   |   \[不指定\]    |
|   点赞   |    -n_likes     |
| 发布时间 | -created_at,-id |

## 返回内容

|   KEY   |                 VALUE                 | TYPE |
| :-----: | :-----------------------------------: | :--: |
| counted |        \[未知\] 返回总是 True         | bool |
|  items  |          [查看详情](#items)           | List |
|  limit  | GET 参数中的 limit，如果没有，则为 15 | int  |
| offset  | GET 参数中的 offset，如果没有，则为 0 | int  |
|  total  |             items 的长度              | int  |

### items

items 是列表类型

|     KEY      |             VALUE             | TYPE |
| :----------: | :---------------------------: | :--: |
|  audited_at  |           发布时间            | int  |
|      id      |            作品 id            | int  |
|     name     |           作品名称            | str  |
| praise_times |         作品点赞数量          | int  |
|  view_times  |         作品浏览数量          | int  |
|   preview    |         作品封面图片          | str  |
|     type     |    \[未知\] 大部分为"IDE"     | str  |
|     user     | 用户信息（[查看详情](#user)） | dict |

#### user

|    KEY     |  VALUE   | TYPE |
| :--------: | :------: | :--: |
| avatar_url | 头像链接 | str  |
|    gold    | \[未知\] | str  |
|     id     | 用户 ID  | str  |
|  nickname  | 用户昵称 | str  |

> 更新于 {docsify-updated}
