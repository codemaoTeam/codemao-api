# 成员

> 获取指定工作室的成员  
> `/web/shops/<workshop_id>/users` `GET`

## URL 参数

|  key   |         value         | type |        |
| :----: | :-------------------: | :--: | :----: |
| offset |         页码          | int  | `可选` |
| limit  | 每一页的数量`[5,200]` | int  | `可选` |

## 返回内容

|   key   |                      value                       | type |
| :-----: | :----------------------------------------------: | :--: |
|  items  | 由多个 JSON 构成的成员列表（[查看详情](#items)） | list |
| offset  |                       页码                       | int  |
|  limit  |                   每一页的数量                   | int  |
|  total  |                 该工作室成员总数                 | int  |
| counted |                      `未知`                      | bool |

### items

|       key       |             value             |  type  |
| :-------------: | :---------------------------: | :----: |
|       id        |            `未知`             |  int   |
|      name       |           用户昵称            | string |
|     n_works     |            `未知`             |  int   |
|   avatar_url    |           头像链接            | string |
|     user_id     |            用户 ID            |  int   |
| work_subject_id |           工作室 ID           |  int   |
|    object_id    |         工作室识别码          |  int   |
|      type       |  `未知`（均为`"WORKSHOP"`）   | string |
|      role       |            `未知`             |  int   |
|    position     | 职位（[查看详情](#position)） | string |
|     status      |            `未知`             |  int   |
| latest_work_at  |  工作室最新作品的投稿时间戳   |  int   |
|       qq        |    申请加入时填写的 qq 号     | string |

#### position

|  职位  |      值      |
| :----: | :----------: |
|  室长  |    LEADER    |
| 副室长 | DEPUTYLEADER |
|  室员  |    STAFF     |

> 更新于 2022.07.24
