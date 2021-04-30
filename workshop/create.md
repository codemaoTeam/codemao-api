# 创建工作室

> 创建工作室  
> `/web/work_shops/create` `POST` `需要cookies`  


## POST请求参数
|     key     |      value      |  type  |        |
| :---------: | :-------------: | :----: | :----: |
|    name     |   工作室名称    | string | `必须` |
| description |   工作室介绍    | string | `必须` |
| preview_url | 工作室logo的URL | string | `必须` |


## 返回内容
|  key  |  value   |  type  |
| :---: | :------: | :----: |
|  id   | 工作室ID | string |


> 更新于 2021.04.30