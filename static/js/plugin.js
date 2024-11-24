function plugin(hook, vm) {
  hook.beforeEach(function (markdown) {
    const editUrl = `${vm.config.repo}/blob/master${vm.route.file}`;
    const newContent = `!> 在查阅具体API文档之前，请先仔细阅读[首页关于文档的约定](/?id=约定)  
本文档发起者已停止更新内容，部分内容可能过时

?> 【广告】欢迎访问[本文档发起者的博客](https://www.lambdark.com)

[:memo:编辑文档](${editUrl})

${markdown}

> 更新于 {docsify-updated}`;

    return newContent;
  });
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
