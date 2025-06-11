# Gitee Pages 部署步骤

## 1. 同步到Gitee
1. 在 gitee.com 创建仓库
2. 添加远程仓库
   git remote add gitee https://gitee.com/yourusername/resources-web.git
3. 推送代码
   git push gitee main

## 2. 开启Pages服务
1. 进入Gitee仓库设置
2. 找到 "Pages" 服务
3. 选择分支: gh-pages
4. 部署目录: /

## 3. 自动部署配置
- 修改 .github/workflows/deploy.yml
- 添加Gitee同步步骤

注意: Gitee Pages 免费版需要手动更新，付费版支持自动部署
