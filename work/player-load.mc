# 获取作品的源码

> 通过Kitten加载器(player)获取
> `https://api-creation.codemao.cn/kitten/r2/work/player/load/<work_id>` `GET` 

## 返回内容

| key |  value  | type |
| :-: | :-----: | :--: |
| name  | 作品名称 | string  |
| preview | 作品封面 | string |
| source_urls | 作品的源代码(通常有很多个,且为json格式) | string |
| is_bcmc | (目前未知) | bool |
| ide_type | 编辑器类型(固定为KITTEN) | string |
| updated_time | 更新时间(时间戳格式) | int |
| version | 编辑器版本 | string |
