# 举报原因

> 获取社区举报原因  
> `/web/reports/reasons/all` `GET`

## 返回内容

> 只有一个键：`items`，它的值为一个 List，每一项 JSON 内容如下：

|   key   |  value   |  type  |
| :-----: | :------: | :----: |
|   id    | 原因 ID  | string |
| content | 原因描述 | string |

### 示例

```json
{
    "items": [
        {
            "id": "1",
            "content": "违法违规"
        },
        {
            "id": "2",
            "content": "色情暴力"
        },
        ......
    ]
}
```
