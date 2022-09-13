# 搜索帖子

> 通过标题搜索帖子  
> `/web/forums/posts/search` `GET`

## URL 参数

|  key  |        value         |  type  |        |
| :---: | :------------------: | :----: | :----: |
| title |       帖子标题       | string | `必须` |
| page  |         页码         |  int   | `可选` |
| limit | 每一页的数量`[5,30]` |  int   | `可选` |

## 返回内容

|   key   |                      value                       | type |
| :-----: | :----------------------------------------------: | :--: |
|  items  | 由多个 JSON 构成的帖子列表（[查看详情](#items)） | list |
| offset  |                      `未知`                      | int  |
|  limit  |                   每一页的数量                   | int  |
|  total  |                 查询到的帖子总数                 | int  |
| counted |                      `未知`                      | bool |

### items

|      key      |                         value                          |  type  |
| :-----------: | :----------------------------------------------------: | :----: |
|      id       |                        帖子 ID                         | string |
|     user      |            帖子发布者（[查看详情](#user)）             |  JSON  |
|     title     |                        帖子标题                        | string |
|    content    |                        帖子内容                        | string |
|   n_replies   |                        回帖数量                        |  int   |
| is_authorized |                      是否为官方贴                      |  bool  |
|  is_featured  |                      是否为精选贴                      |  bool  |
|   is_hotted   |                      是否为热门贴                      |  bool  |
|   is_pinned   |                      是否为置顶帖                      |  bool  |
| tutorial_flag |                      是否为教程帖                      |  int   |
| ask_help_flag |                      是否为求助帖                      |  int   |
|  created_at   |                       发布时间戳                       |  int   |
|  n_comments   |                （每个回帖下的）评论数量                |  int   |
|  reply_user   | 最新回帖的发表者（[查看详情](#reply_or_comment_user)） |  JSON  |
|  replied_at   |           最新回帖时间戳（若无回帖，则为 0）           |  int   |
| comment_user  | 最新回复的发表者（[查看详情](#reply_or_comment_user)） |  JSON  |
| commented_at  |      最新回复时间戳（若无回复，则为 created_at）       |  int   |

#### user

|       key       |                                            value                                             |   type   |
| :-------------: | :------------------------------------------------------------------------------------------: | :------: |
|       id        |                                              ID                                              |  string  |
|    nickname     |                                             昵称                                             |  string  |
|   avatar_url    |                                           头像链接                                           |  string  |
|   subject_id    |                                        用户工作室 ID                                         |   int    |
| work_shop_name  |                                         用户工作室名                                         |  string  |
| work_shop_level |                                        用户工作室等级                                        |   int    |
| ~~wuhan_medal~~ | ~~是否参加武汉爆发疫情时期的[“编程猫健康护航计划”活动](https://shequ.codemao.cn/studio/11)~~ | ~~bool~~ |
|   has_signed    |                                            `未知`                                            |   bool   |

#### reply_or_comment_user

同 [user](#user) 一致，但部分信息有时存在，有时不存在。

> 更新于 2022.09.13
