### git status命令可以列出当前目录所有还没有被git管理的文件和被git管理且被修改但还未提交(git commit)的文件
### git rm remote origin`(删除远程地址源)`

### git中退出vim 首先Esc退出输入状态，在输入:q(不保存改动) || :wq(保存改动)

### git 免密提交
    1、在window添加一个HOME环境变量 '我的电脑'-'高级系统设置'-'高级'-'环境变量'-'用户变量'
    2、在%HOME%目录中，一般为C:\users\Administrator，也可以是你自己创建的系统用户名目录，反正都在C:\users\中。文件名为.git-credentials,由于在Window中不允许直接创建以"."开头的文件，所以需要借助git bash进行，打开git bash客户端，进行%HOME%目录，然后用touch创建文件 _netrc, 用vim编辑此文件,输入内容格式：
```bash
    machine github.com
    login your-usernmae
    password your-password
```
    3、重新打开git bash即可，无需再输入用户名和密码