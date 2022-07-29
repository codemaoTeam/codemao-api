function plugin(hook, vm) {
  hook.beforeEach(function (content) {
    const editUrl = `${vm.config.repo}/edit/master${vm.route.file}`;
    const newContent = `!> 免责声明：请合理使用编程猫社区API，如果因为使用不当对您和编程猫社区造成损失，本文档开发团队不承担任何法律责任

[:memo:编辑文档](${editUrl})

${content}`;
    return newContent;
  });
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
