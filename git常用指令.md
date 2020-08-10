## Git常用指令


  ** 将commit未push的代码回退到本地 **
  > 1、git reset commitId
  >    保留本地修改代码
  >    commitId可以通过git log查询
  > 2、git reset HEAD^ 
  >    保留本地修改代码
 
  ** 切换分支 **
  > git branch 						-- 查看当前分支
  > git checkout 分支名  			-- 切换分支
  > git clone -b 分支名  项目地址  	-- 克隆指定分支
	
  ** 提交代码流程 **
  > git pull
  > git add . 
  > git commit -m '修改注释'
  > git push

**解决每次pull、push代码时都要输入账户名和密码**

> git config --global credential.helper store

> git init
> git add .
> git commit -m 'comments'
> git stash
> git status
> git diff  查看具体修改内容

> git log 查看提交历史
> git reflog 查看命令历史
> git reset --hard HEAD^  回退到上一版本
> git reset --hard commit_id  回退到指定版本
> git push
### 创建并切换到dev分支(相当于两条指令git branch dev git checkout dev)
> git checkout -b 'dev'

> git branch 查看当前分支
> git merge 合并指定分支到当前分支
> git branch -d dev 删除dev分支
> git switch -c dev 创建并切换到新分支
> git switch master 直接切换到已有分支


## 创建远程分支过程
> mkdir demoTest
> cd demnomTest
> git init
> echo "#demoTest" >> README.md
> git add README.md
> git commit -m 'first create'
> git remote add origin  https://code.newtouch.com/VZOP7H65/demo_csbps.git
> git push -u origin master


> git push origin master
