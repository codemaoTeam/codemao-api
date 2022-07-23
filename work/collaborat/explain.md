# 特别说明

## URL

关于协作的所有 API，没有特殊标注的，都基于这个 URL：`https://socketcoll.codemao.cn`

## 返回内容

所有返回内容格式如下，对于具体的协作相关 API 文档，无特殊说明的，仅包含 `data` 内的信息。

|   key   |            value            |    type     |
| :-----: | :-------------------------: | :---------: |
|  code   | 状态码（[查看详情](#code)） |     int     |
| success |        操作是否成功         |    bool     |
|  data   |     操作结果的详细信息      | JSON/string |
|   msg   |     操作结果的描述信息      |   string    |
| extData |          额外信息           |  null/JSON  |
| traceId |            未知             |   string    |

### code

|  value   |                description                |
| :------: | :---------------------------------------: |
|   200    |                 操作成功                  |
| 80000001 | 用户登录态校验失败（未携带 cookies 信息） |
| 10000002 |              用户无权限操作               |
