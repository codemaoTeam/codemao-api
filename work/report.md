# 举报作品

> 设置用户名  
> `/nemo/v2/report/work` `POST` `需要cookies`

!> 慎用此api,多次恶意举报他人可能会造成封号！

## POST 请求信息

|     key         |     value      |  type  |
| :-------------: | :------------: | :----: |
| report_describe | 举报的详细信息 | string |
| report_reason   |    举报类型    | string |
|    work_id      |     作品id     |  int   |

## 返回内容

?> 如果请求信息正确，此请求无返回内容
