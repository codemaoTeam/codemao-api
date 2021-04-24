# 滑块

> 获取社区滑块  
> `/web/banners/all` `GET`


## URL参数
|            key            | value |  type  |        |
| :-----------------------: | :---: | :----: | :----: |
| [type](#description_type) | 类型  | string | `可选` |

### `type`说明：  :id=description_type
|   类型   |       值        |
| :------: | :-------------: |
|   所有   |  不设置`type`   |
|   首页   |    OFFICIAL     |
| 工作室页 |    WORK_SHOP    |
|  素材页  | MATERIAL_NORMAL |


## 返回内容
> 只有一个键：`items`，它的值为一个List，每一项JSON内容如下：

|         key          |       value       |  type  |
| :------------------: | :---------------: | :----: |
|          id          |      滑块ID       | string |
|        title         |     滑块标题      | string |
|      target_url      |   滑块指向的URL   | string |
|    background_url    |    滑块图片URL    | string |
| small_background_url | 滑块图片URL（小） | string |

### 示例
```json
{
    "items": [
        {
            "id": "512",
            "title": "noc比赛",
            "target_url": "https://top.codemao.cn/",
            "background_url": "https://static.codemao.cn/whale/Skl0LQHId",
            "small_background_url": "https://static.codemao.cn/whale/BJxm0LQHI_"
        },
        ......
    ]
}
```


> 更新于 2021.04.24