function plugin(hook, vm) {
  hook.beforeEach(function (markdown) {
    const editUrl = `${vm.config.repo}/blob/master${vm.route.file}`;
    const newContent = `!> 在查阅具体API文档之前，请先仔细阅读[首页关于文档的约定](/?id=约定)  
免责声明：请合理使用编程猫社区API，如果因为使用不当对您和编程猫社区造成损失，本文档开发团队不承担任何法律责任


[:memo:编辑文档](${editUrl})

${markdown}

> 更新于 {docsify-updated}`;

    return newContent;
  });
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
