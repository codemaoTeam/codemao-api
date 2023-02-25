# 贡献指南

## 代码格式

- 使用 Prettier 进行格式化
- 缩进统一为 2 个空格

## 文档编写流程

作为文档的开发者，编写新的 API 文档需遵循下流程。

1. 确定新 API 所属模块。如：community 为社区相关 API，forum 为论坛相关 API。
2. 在对应目录新建 markdown 文件。要求命名符合内容并且合理，多个单词之间用 `-` 连接。
3. 编辑文件。要求模仿现有文件，保证风格一致。
4. 本地测试效果，确保无误。
5. 提交代码到 **`dev`** 分支。要求遵循 [commit 规范](#commit)。

## commit 规范 :id=commit

可参阅最新的 commit 记录，以下为各种操作示例，提交时按照需要修改内容。

- 添加 API 文档：`add: 添加api(user/details)`
- 补充文档内容：`improvement: 补充api(user/details)中的内容`
- 修复文档错误：`fix: 删除api(user/details)中的多余字符` `fix: 修复api(user/details)中的拼写错误`
