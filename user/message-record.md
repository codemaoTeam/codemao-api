# 消息记录

!> 这个 API 文档正在编写中，请勿使用

> 获取自己的消息记录  
> `/web/message-record` `GET` `需要cookies`

## URL 参数

|                  key                  |           value           |  type  |        |
| :-----------------------------------: | :-----------------------: | :----: | :----: |
| [query_type](#description_query_type) |         消息类型          | string | `必须` |
|                 limit                 | 每一页的数量`10\|[5,200]` |  int   | `可选` |
|                offset                 |           页码            |  int   | `可选` |

### `query_type`说明： :id=description_query_type

|     value     | description |
| :-----------: | :---------: |
| COMMENT_REPLY | 评论与回复  |
|   LIKE_FORK   | 赞与被购买  |
|    SYSTEM     |  系统消息   |

## 返回内容

|   key   |                      value                       | type |
| :-----: | :----------------------------------------------: | :--: |
|  items  | 由多个 JSON 构成的消息列表（[查看详情](#items)） | list |
| offset  |                       页码                       | int  |
|  limit  |                   每一页的数量                   | int  |
|  total  |                      `未知`                      | int  |
| counted |                      `未知`                      | bool |

### items

|     key      |                  value                   |  type  |
| :----------: | :--------------------------------------: | :----: |
|      id      |                 消息 ID                  | string |
|     type     |      消息类型（[查看详情](#type)）       | string |
|   content    |   消息具体内容（[查看详情](#content)）   | string |
| reference_id |                  `未知`                  | string |
|  sender_id   |              消息发送者 ID               | string |
| receiver_id  |              消息接收者 ID               | string |
| read_status  | 阅读状态（`READ`为已读，`UNREAD`为未读） | string |
|  created_at  |              消息产生时间戳              |  int   |

#### type

|           value           |    description     |
| :-----------------------: | :----------------: |
|       WORK_COMMENT        |     作品被评论     |
|        WORK_REPLY         | 作品下的评论被回复 |
|     WORK_REPLY_AUTHOR     |                    |
| WORK_REPLY_REPLY_FEEDBACK |                    |
|       POST_COMMENT        |                    |
|        POST_REPLY         |                    |
|     POST_REPLY_REPLY      |                    |
| POST_REPLY_REPLY_FEEDBACK |                    |
|         WORK_FORK         |     作品被购买     |
|         WORK_LIKE         |     作品被点赞     |
|   WORK_DISCUSSION_LIKED   |                    |
|   POST_DISCUSSION_LIKED   |                    |
|         BROADCAST         |                    |

#### content
