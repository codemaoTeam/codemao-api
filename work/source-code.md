# 作品源码

> 通过 Kitten 加载器（player）获取作品源码  
> `https://api-creation.codemao.cn/kitten/r2/work/player/load/<work_id>` `GET`

## 返回内容

|     key      |           value           |  type  |
| :----------: | :-----------------------: | :----: |
|     name     |         作品名称          | string |
|   preview    |         作品封面          | string |
| source_urls  |     作品源码文件列表      |  list  |
|   is_bcmc    |          `未知`           |  bool  |
|   ide_type   | 编辑器类型(固定为 KITTEN) | string |
| updated_time |        更新时间戳         |  int   |
|   version    |        编辑器版本         | string |
