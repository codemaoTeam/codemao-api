# 所有板块信息

> 获取论坛所有版块信息  
> `/web/forums/boards/simples/all` `GET`

## 返回内容

> 只有一个键：`items`，它的值为一个 List，每一项 JSON 内容如下：

|      key      |     value      |  type  |
| :-----------: | :------------: | :----: |
|  has_popular  |     `未知`     |  bool  |
| has_selection |     `未知`     |  bool  |
|   icon_url    |  板块图标 URL  | string |
|      id       |    板块 ID     | string |
|    is_hot     | 是否为热门板块 |  bool  |
|     name      |    板块名称    | string |

### 示例

```json
[
  {
    "id": "17",
    "name": "热门活动",
    "icon_url": "https://static.codemao.cn/whale/rJlHNdXlS",
    "is_hot": true,
    "has_popular": true,
    "has_selection": false
  },
  {
    "id": "2",
    "name": "积木编程乐园",
    "icon_url": "https://static.codemao.cn/Fn11e6oT0MuozTRqWWIMKIeUFvP4",
    "is_hot": true,
    "has_popular": false,
    "has_selection": true
  },
  ......
]
```

> 更新于 2021.07.20
