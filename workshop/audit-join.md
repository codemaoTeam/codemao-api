# 审核加入

> 审核已经申请加入工作室的用户  
> `/web/work_shops/users/audit` `POST` `需要cookies` `需要工作室管理员权限`

## POST 请求信息

|   key   |              value               |  type  |        |
| :-----: | :------------------------------: | :----: | :----: |
|   id    |           工作室识别码           |  int   | `必须` |
| status  | 审核状态（[详情](#status-说明)） | string | `必须` |
| user_id |             用户 ID              |  int   | `必须` |

### status 说明

有两种情况：

|   type   |   value    |
| :------: | :--------: |
| 拒绝申请 | UNACCEPTED |
| 接受申请 |  ACCEPTED  |

## 返回内容

?> 如果请求信息正确，此请求无返回内容
