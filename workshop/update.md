# 修改信息

> 修改工作室信息  
> `/web/work_shops/update` `POST` `需要cookies` `需要工作室管理员权限`

## POST 请求信息

|     key     |     value      |  type  |        |
| :---------: | :------------: | :----: | :----: |
|     id      |  工作室识别码  |  int   | `必须` |
|    name     |   工作室名称   | string | `必须` |
| description |   工作室描述   | string | `可选` |
| preview_url | 工作室封面图片 | string | `必须` |

## 返回内容

?> 如果请求信息正确，此请求无返回内容
