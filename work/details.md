# 作品信息

!> 这个 API 文档正在编写中，请勿使用

> 获取作品信息
> `/creation-tools/v1/works/<work_id>` `GET`

## 返回内容

|         key          |              value               | type    |
|:--------------------:|:--------------------------------:|---------|
|          id          |              作品 ID               | string  |
|      work_name       |               作品名称               | string  |
|         type         | 编辑器类型(Kitten2，Kitten3，Kitten4 等) | string  |
|       ide_type       |              编辑器系列               | string  |
|      operation       |               操作说明               | string  |
|     description      |               作品介绍               | string  |
|     orientation      |                                  | int     |
|      parent_id       |                                  | int     |
|   parent_user_name   |                                  | string  |
|      player_url      |            player 链接             | string  |
|      share_url       |               分享链接               | string  |
|   unify_share_url    |                                  | string  |
|     n_tree_nodes     |              作品再创作数              | int     |
|      view_times      |              作品浏览量               | int     |
|    collect_times     |              作品收藏数               | int     |
|     share_times      |              作品分享数               | int     |
|     fork_enable      |             是否开放再创作              | boolean |
|      fork_scope      |                                  | int     |
|       preview        |               作品封面               | string  |
|     bcm_version      |              编辑器版本               | string  |
|       bcm_url        |                                  | string  |
| screenshot_cover_url |            作品社区页启动界面图            | string  |
|       n_roles        |                                  | int     |
|       n_brick        |                                  | int     |
|    comment_times     |               评论数                | int     |
|     publish_time     |              作品发布时间              | int     |
|      user_info       |    作品作者信息（[查看详情](#user_info)）    | JSON    |
|      abilities       |    作品作者信息（[查看详情](#abilities)）    | JSON    |
|   work_label_list    |  作品标签（[查看详情](#work_label_list)）  | array   |
| player_display_type  |                                  | int     |

### user_info

|            key            | value  |  type  |
|:-------------------------:|:------:|:------:|
|            id             | 用户 ID  |  int   |
|         nickname          |  用户昵称  | string |
|          avatar           | 用户头像链接 | string |
|         nickname          |  用户昵称  | string |
|         fork_user         |        | string |
|        description        |  个性签名  | string |
|       author_level        |  作者等级  |  int   |
|       consume_level       |        |  int   |
| is_official_certification |  官方认证  |  int   |

### abilities

|     key      |  value   |  type   |
|:------------:|:--------:|:-------:|
| is_collected | 访客是否收藏作品 | boolean |
|  is_praised  | 访客是否点赞作品 | boolean |
|   is_owned   | 访客是否为作者  | boolean |

### work_label_list

|    key     | value |  type  |
|:----------:|:-----:|:------:|
| label_type | 标签内部名 | string |
|  label_id  |       |  int   |
| label_name |  标签名  | string |