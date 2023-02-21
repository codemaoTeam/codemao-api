# 作品信息

!> 这个 API 文档正在编写中，请勿使用

> 获取作品信息  
> `/creation-tools/v1/works/<work_id>` `GET`

## 返回内容

|         key          |                 value                  |  type  |
| :------------------: | :------------------------------------: | :----: |
|          id          |                作品 ID                 | string |
|      work_name       |                作品 ID                 | string |
|         type         |                                        |        |
|       ide_type       | 编辑器类型(Kitten2，Kitten3，Kitten4)  | string |
|      operation       |                                        |        |
|     description      |                                        |        |
|     orientation      |                                        |        |
|      parent_id       |                                        |        |
|   parent_user_name   |                                        |        |
|      player_url      |              player 链接               | string |
|      share_url       |                分享链接                | string |
|     n_tree_nodes     |                                        |        |
|      view_times      |                                        |        |
|    collect_times     |                                        |        |
|     share_times      |                                        |        |
|     fork_enable      |             是否开放再创作             |  bool  |
|       preview        |                                        |        |
|     bcm_version      |                                        |        |
|       bcm_url        |                                        |        |
| screenshot_cover_url |                                        |        |
|       n_roles        |                                        |        |
|       n_brick        |                                        |        |
|    comment_times     |                                        |        |
|     publish_time     |                                        |        |
|      user_info       | 作品作者信息（[查看详情](#user_info)） |  JSON  |
|      abilities       | 作品作者信息（[查看详情](#abilities)） |  JSON  |
|   work_label_list    |                                        |        |

### user_info

|     key     |     value      |  type  |
| :---------: | :------------: | :----: |
|     id      |    用户 ID     |  int   |
|  nickname   |    用户昵称    | string |
| avatar_url  |  用户头像链接  | string |
|   n_works   |     `未知`     |  int   |
| total_likes | 用户被点赞总数 |  int   |
| is_followed | 是否关注该用户 |  bool  |
| description |  用户自我描述  | string |

### abilities

|     key      | value | type |
| :----------: | :---: | :--: |
| is_collected |       |      |
|  is_praised  |       |      |
|   is_owned   |       |      |
