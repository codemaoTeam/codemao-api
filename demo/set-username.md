# 设置用户名

> 难度系数：:star:
>
> - [登录](user/login.md)
> - [设置用户名](user/set-username.md)

登录用户，然后设置用户名

```
from requests import Session


session = Session()

login_data = {'pid': '65edCTyg',
              'identity': '这里填写你的手机号',
              'password': '这里填写你的密码'}
username_data = {
    'username':'这里填写你要设置的用户名'
}
res_login = session.post(
    'https://api.codemao.cn/tiger/v3/web/accounts/login', json=login_data)

res_message = session.patch('https://api.codemao.cn/tiger/v3/web/accounts/username',json=username_data)
print(res_message.content)
input()
```

## 运行示例

```
b``
```
(打印b``代表成功了)
