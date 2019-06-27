# 个人博客
搭个博客耍耍，记录一些想表达的东西
### 地址
[大熊弋的博客](http://www.daxiong1.cn/)
### 后端技术栈
- koa2
- mongo + mongoose
- pm2自动化部署
- Nginx请求分发
### 前端技术栈
- Vue2.X + Vue-Router + webpack
- element-ui
- cdn部署静态资源
### 后续计划
- 支持Https
- 文章按标签分类
- ...
### 本地部署
安装mongo，建库，然后下载代码：
```
git clone https://github.com/DaXiong1/Blog.git
cd Blog
npm install
```
打开目录server/config/index.js，MONGODB.uri为本地数据库地址，根据实际配置就好。
启动和编译命令都写在package.json里面了，直接npm run就好了，开发环境：
```
npm run server-dev
npm run client-dev
npm run admin-dev
```
管理后台没有设置默认管理员，需要手动注册一个，接口已经实现，但页面上没有提供注册按钮，所以可以使用命令行：
```
curl -v -X PUT -d "username=xxx&password=yyy" http://localhost:3008/api/users/register
```
接下来就可以本地调试了
### 一些截图
