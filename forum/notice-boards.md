# 公告栏

> 获取公告栏帖子  
> `/web/forums/notice-boards` `GET`

示例：
![公告栏示例图](https://cdn-community.codemao.cn/47/community/MTY1ODU0OTg4MTU3NV90N3I3cWNj)

## URL 参数

|  key  |    value     | type |        |
| :---: | :----------: | :--: | :----: |
| limit | 每一页的数量 | int  | `可选` |

## 返回内容

> 只有一个键：`items`，它的值为一个 List，每一项 JSON 内容如下：

|    key     |      value       |  type  |
| :--------: | :--------------: | :----: |
|     id     |     公告 ID      | string |
|  post_id   |     帖子 ID      | string |
| post_title |     帖子标题     | string |
|  ordinal   | 在公告栏中的顺序 |  int   |
