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
> git reset --hard commit_id  回退到指定版本(前七八位)
> git push -f origin dev      强制推送到远程分支

### 创建并切换到dev分支(相当于两条指令git branch dev git checkout dev)
> git checkout -b 'dev'

> git branch 查看当前分支
> git branch -a 查看所有分支
> git branch dev(分支名) 创建dev分支
> git checkout dev(分支名) 切换到dev分支
> git push origin dev 推送本地分支到远程dev分支（同名）
> git branch --set-upstream-to=origin/dev 本地分支与远程dev分支建立关联

> git branch -d dev 删除本地dev分支
> git push origin delete dev 删除远程dev分支
> git push origin :dev 删除远程dev分支


## 创建远程分支过程
> mkdir demoTest
> cd demnomTest
> git init
> git add README.md
> git commit -m 'first create'
> git remote add origin  https://code.newtouch.com/VZOP7H65/demo_csbps.git
> git push -u origin master


## 保存和恢复进度 git stash
