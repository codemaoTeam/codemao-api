from requests import Session


# 使用session，调用登录api后将自动在以后的请求中携带cookie
session = Session()

# 登录
login_data = {'pid': '65edCTyg',
              'identity': 'api_learning',
              'password': '123456'}
res_login = session.post(
    'https://api.codemao.cn/tiger/v3/web/accounts/login', json=login_data)

# 判断是否登录成功
if res_login.status_code == 200:
    nickname = res_login.json()['user_info']['nickname']
    print(f'用户：{nickname}')

    res_message = session.get(
        'https://api.codemao.cn/web/message-record/count')
    message_list = res_message.json()
    for message in message_list:
        print(f"{message['query_type']}：{message['count']}")
