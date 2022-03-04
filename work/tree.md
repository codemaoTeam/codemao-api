# 作品继承树

> 获取作品再创作的情况  
> `/tiger/work/tree/<work_id>` `GET`

## 返回内容

|       key        |                      value                      |  type  |
| :--------------: | :---------------------------------------------: | :----: |
|      author      |         作者信息（[查看详情](#author)）         |  JSON  |
|     children     |  所有再创作作品（列表内 JSON 格式同这里一样）   |  list  |
| collection_times |                  作品被收藏数                   |  int   |
|        id        |                     作品 ID                     |  int   |
|    is_deleted    |        是否删除（0 为 flase，1 为 true）        |  int   |
|   is_published   |                是否发布（同上）                 |  int   |
|    parent_id     | 继承自（父）作品的 ID（如果为原创，值为`null`） |  int   |
|   praise_times   |                  作品被点赞数                   |  int   |
|     preview      |                 作品预览图 URL                  | string |
|   publish_time   |                 作品发布时间戳                  |  int   |
|      status      |                     `未知`                      |  int   |
|    view_times    |                   作品浏览量                    |  int   |

### author

|    key    |       value        |  type  |
| :-------: | :----------------: | :----: |
|  user_id  |      用户 ID       |  int   |
| user_name | 用户名（不是昵称） | string |
| nickname  |      用户昵称      | string |

> 更新于 2021.03.04
