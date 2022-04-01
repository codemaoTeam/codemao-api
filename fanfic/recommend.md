# 推荐小说

> 显示在小说主页的推荐小说  
> `/api/fanfic/list/recommend` `GET`

## 返回内容

> 只有一个有效的键：`data`，内有一个键：`fanficList`， 它的值为一个 List，每一项 JSON 内容如下：

|       key        |    value     |  type  |
| :--------------: | :----------: | :----: |
|        id        |   小说 ID    |  int   |
|      title       |    小说名    | string |
|    cover_pic     | 封面图片 URL | string |
|    view_times    |    浏览数    |  int   |
|       sort       |    `未知`    |  int   |
|     user_id      |   作者 ID    |  int   |
|     nickname     |   作者昵称   | string |
|  fanfic_type_id  | 小说类型 ID  |  int   |
| fanfic_type_name | 小说类型名称 | string |
|   update_time    |  更新时间戳  |  int   |
|  collect_times   |    收藏数    |  int   |

### 示例

```json
{
  "code": 200,
  "msg": "成功",
  "description": "Http request finish without mistake",
  "data": {
    "fanficList": [
      {
        "id": 136540,
        "title": "邪花谣",
        "cover_pic": "https://cdn-community.codemao.cn/47/community/d2ViXzQwMDFfMjYzODQxMV8xMzY1NDBfMTY0ODAxNTM0MzE5MV9iZGVjYWU4OA.jpeg",
        "view_times": 2003,
        "sort": 0,
        "user_id": 2638411,
        "nickname": "云阙_半缕澄烟",
        "fanfic_type_id": 6,
        "fanfic_type_name": "冒险",
        "update_time": 1648685894,
        "collect_times": 38
      },
      {
        "id": 136439,
        "title": "命运呼吸",
        "cover_pic": "https://cdn-community.codemao.cn/47/community/d2ViXzQwMDFfNjgzNjMwXzEzNjQzOV8xNjQ4Mjg3NTE4MjIxXzhmOWQ5Mjdm.png",
        "view_times": 1045,
        "sort": 1,
        "user_id": 683630,
        "nickname": "Miso2233",
        "fanfic_type_id": 2,
        "fanfic_type_name": "科幻",
        "update_time": 1648387971,
        "collect_times": 17
      }
    ]
  }
}
```

> 更新于 2022.04.01
