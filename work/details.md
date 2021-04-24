# 个人信息

!> 这个 API 文档正在编写中，请勿使用

> 获取个人信息  
> `/creation-tools/v1/works/<work_id>` `GET`  


## 返回内容
|         key          |      value       |   type   |
| :------------------: | :--------------: | :------: |
|          id          |      作品ID      |  string  |
|         type         |                  |          |
|       ide_type       |                  |          |
|      operation       |                  |          |
|     description      |                  |          |
|     orientation      |                  |          |
|      parent_id       |                  |          |
|   parent_user_name   |                  |          |
|      player_url      |                  |          |
|      share_url       |                  |          |
|     n_tree_nodes     |                  |          |
|      view_times      |                  |          |
|    collect_times     |                  |          |
|     share_times      |                  |          |
|     fork_enable      |                  |          |
|       preview        |                  |          |
|     bcm_version      |                  |          |
|       bcm_url        |                  |          |
| screenshot_cover_url |                  |          |
|       n_roles        |                  |          |
|       n_brick        |                  |          |
|    comment_times     |                  |          |
|     publish_time     |                  |          |
|    **user_info**     | **作品作者信息** | **JSON** |
|          id          |      用户ID      |   int    |
|       nickname       |     用户昵称     |  string  |
|      avatar_url      |   用户头像链接   |  string  |
|       n_works        |      `未知`      |   int    |
|     total_likes      |  用户被点赞总数  |   int    |
|     is_followed      |  是否关注该用户  |   bool   |
|     description      |   用户自我描述   |  string  |
|                      |                  |          |
|    **abilities**     | **作品作者信息** | **JSON** |
|          id          |      用户ID      |   int    |
|       nickname       |     用户昵称     |  string  |
|      avatar_url      |   用户头像链接   |  string  |
|       n_works        |      `未知`      |   int    |
|     total_likes      |  用户被点赞总数  |   int    |
|     is_followed      |  是否关注该用户  |   bool   |
|     description      |   用户自我描述   |  string  |
|                      |                  |          |
|   work_label_list    |                  |          |



> 更新于 2021.04.24