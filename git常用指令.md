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