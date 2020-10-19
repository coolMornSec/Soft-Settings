# 关于package.json和package.lock.json的说明

在Node.js中模块是一个库或框架，也是一个Node.js项目。Node.js项目遵循模块化的架构，创建一个Node.js相当于创建了一个模块，这个模块的描述文件就是package.json。

package.json文件属性说明：
- name -- 包名;
- version -- 包的版本号;
- description -- 包的描述;
- homepage -- 包的官网URL;
- author -- 作者;
- contributor --   其他贡献者;
- private -- 是否个人;
- repository -- 包代码的信息，包括type和URL，type可以是Git或SVN，URL是包的地址;
- scripts -- 
- dependencies
- license：许可证，默认是ISC、有的默认是MIT
- devDependencies -- 生产开发依赖包列表，安装在node_modules目录下

package-lock.json 是在 `npm install` 时候生成的一份文件，用以记录当前状态下实际安装的各个 npm package 的具体来源和版本号。package-lock.json 文件的作用锁定安装时的包的版本号，并且需要上传到 git，以保证其他人在 `npm install` 时大家的依赖能保证一致。


### cross-env 能跨平台的使用和设置环境变量
大多数情况下使用 NODE_ENV=production命令行指令会卡住，cross-env使这些变得简单，不同平台使用唯一指令，不用担心跨平台的问题
- npm 安装方式
> npm i --save-dev cross-env

在npm脚本中(多是package.json)里这么配置
``
scripts: {
    "build": "cross_env NODE_ENV=production webpack --config build/webpack.config.js",
}

``
运行`npm run build`，NODE_ENV便可设置成功，无须担心跨平台问题。