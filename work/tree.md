# 作品继承树

> 获取作品再创作的情况  
> `/tiger/work/tree/<work_id>` `GET`

## 返回内容

|       key        |                      value                      |  type  |
| :--------------: | :---------------------------------------------: | :----: |
|        id        |                     作品 ID                     |  int   |
|       name       |                    作品名称                     | string |
|     preview      |                 作品封面图 URL                  | string |
|   publish_time   |                 作品发布时间戳                  |  int   |
|      status      |                     `未知`                      |  int   |
|   is_published   |        是否发布（0 为 flase，1 为 true）        |  int   |
|    is_deleted    |                是否删除（同上）                 |  int   |
| collection_times |                  作品被收藏数                   |  int   |
|   praise_times   |                  作品被点赞数                   |  int   |
|    view_times    |                   作品浏览量                    |  int   |
|    parent_id     | 继承自（父）作品的 ID（如果为原创，值为`null`） |  int   |
|     children     |  所有再创作作品（列表内 JSON 格式同这里一样）   |  list  |
|      author      |         作者信息（[查看详情](#author)）         |  JSON  |

### author

|    key    |       value        |  type  |
| :-------: | :----------------: | :----: |
|  user_id  |      用户 ID       |  int   |
| user_name | 用户名（不是昵称） | string |
| nickname  |      用户昵称      | string |
