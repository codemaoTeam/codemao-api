# 消息

> 获取新消息数量  
> `/web/message-record/count` `GET` `需要cookies`  


## 返回内容
> 返回内容为列表，每一项是一个JSON，如下：

|                  key                  |  value   |  type  |
| :-----------------------------------: | :------: | :----: |
| [query_type](#description_query_type) | 消息类型 | string |
|                 count                 |   数量   |  int   |

### `query_type`说明：  :id=description_query_type
|    类型    |       值       |
| :--------: | :------------: |
| 评论与回复 | COMMENT_REPLY` |
| 赞与被购买 |   LIKE_FORK    |
|  系统消息  |     SYSTEM     |

### 示例
```json
[
    {
        "query_type": "COMMENT_REPLY",
        "count": 0
    },
    {
        "query_type": "LIKE_FORK",
        "count": 0
    },
    {
        "query_type": "SYSTEM",
        "count": 0
    }
]
```


> 更新于 2021.04.24