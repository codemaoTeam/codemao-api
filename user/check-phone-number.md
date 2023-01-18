# 验证手机号

> 验证传入参数是否为当前用户的手机号码  
> `/web/users/phone_number/is_consistent` `GET` `需要cookies`

## URL 参数

|     key      |  value   | type |        |
| :----------: | :------: | :--: | :----: |
| phone_number | 手机号码 | int  | `必须` |

## 返回内容

若传入手机号与实际手机号相符，返回`true`

若未绑定手机号或传入手机号与实际手机号不符，返回`false`

> 更新于 2023.01.18
