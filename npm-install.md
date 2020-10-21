# npm install & npm uninstall

npm i 是npm install的别名
### npm install module
- npm install module 
    > 默认会将依赖写入dependencies节点
- npm install module --save-prod -P
    > 安装模块到node_modules目录下，同时将依赖写入package.json中的dependencies节点。
- npm install module --save     -S 
    > 安装模块到node_modules目录下，同时将依赖写入package.json中的dependencies节点。
- npm install module --save-dev -D 
    > 安装模块到modules目录下，同时将依赖写入package.json中的devDependencies节点。

### npm uninstall module

- npm uninstall module 卸载模块并移除所有相关依赖(dependencies/devDependencies)
    > This uninstalls a package, completely removing everything npm installed on its behalf.
- npm uninstall module --save -S 卸载模块并移除dependencies中的依赖

- npm uninstall module --save-dev -D 卸载模块并移除devDependencies中的依赖

- npm uninsall module --no-save 卸载模块，不移除package.json中的依赖

### npm install 官方文档 https://docs.npmjs.com/cli/install