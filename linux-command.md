# Linux简单使用

## 设置root用户密码

```shell
# sudo 提权命令（用管理员身份运行）
sudo passwd root
```

进入root用户
```shell
su root
```

## 基础命令

```shell
# 1.切换目录
cd [pat]

# 特殊情况
cd ~ # 表示直接去往当前用户的home目录

# 返回刚刚的目录
cd -

# 2. 查看当前路径
pwd

# 3. 列举当前目录下所有文件
ls [-al]

# 4. 创建文件
mkdir [path] # 创建文件目录
touch [filename] #创建文件
rm -rf [dir/filename] # 递归并强制删除目标文件/文件夹

# 5. 复制和移动
cp [-r] [source file/dir] [dest file/dir] # 如果时目录，添加-r参数
mv [source] [dest] # 移动文件夹
mv project projects # 改名

# 6. 解压缩
unzip [文件名] # 一般没有unzip，直接安装
tar xvf [归档文件名]

# 7. 下载文件
curl [url]# 发起http请求
wget [url]# 下载文件

# 8. 安装包
apt install [你想安装的工具]

# vim编辑器使用

```