# 荣誉信息

> 获取任意用户荣誉信息  
> `/creation-tools/v1/user/center/honor` `GET`

## URL 参数

|   key   |  value  | type |        |
| :-----: | :-----: | :--: | :----: |
| user_id | 用户 ID | int  | `必须` |

## 返回内容

|            key            |              value               |  type  |
| :-----------------------: | :------------------------------: | :----: |
|          user_id          |                ID                |  int   |
|         nickname          |               昵称               | string |
|        avatar_url         |             头像链接             | string |
|        user_cover         |              `未知`              | string |
|     user_description      |             自我描述             | string |
|           doing           |            正在做的事            | string |
|     attention_status      |          是否关注该用户          |  bool  |
|        block_total        |        nemo 作品积木总数         |  int   |
|     re_created_total      |         作品被再创作总数         |  int   |
|      attention_total      |        该用户关注的人总数        |  int   |
|        fans_total         |         该用户的粉丝总数         |  int   |
|      collected_total      |          作品被收藏总数          |  int   |
|       collect_times       |              `未知`              |  int   |
|        liked_total        |          作品被点赞总数          |  int   |
|        view_times         |          作品被浏览总数          |  int   |
|       author_level        |            该用户等级            |  int   |
|       consume_level       |              `未知`              |  int   |
| is_official_certification | 是否为官方帐户（0 为否，1 为是） |  int   |
|        subject_id         |          用户工作室 ID           |  int   |
|      work_shop_name       |           用户工作室名           | string |
|      work_shop_level      |          用户工作室等级          |  int   |
|        like_score         |            用户点赞分            |  int   |
|       collect_score       |            用户收藏分            |  int   |
|        fork_score         |           用户再创作分           |  int   |
