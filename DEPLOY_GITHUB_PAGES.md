# GitHub Pages 自动部署指南

## 🔄 **部署流程图**

```
您的操作:
git push origin main
         ↓
GitHub Actions 自动执行:
1. 检测到 main 分支有新提交
2. 拉取最新代码
3. 安装依赖 (npm ci)
4. 构建项目 (npm run build)
5. 将 dist/ 内容推送到 gh-pages 分支
         ↓
GitHub Pages 自动部署:
从 gh-pages 分支部署到 https://tools.arina-dev.com
```

## 🚀 快速开始

### 1. 推送代码到GitHub
```powershell
# 如果这是第一次推送
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/resources-web.git
git push -u origin main

# 如果已经有仓库，只需要
git add .
git commit -m "Update project"
git push origin main
```

### 2. 在GitHub开启Pages
1. 访问您的GitHub仓库
2. 点击 **Settings** 标签
3. 滚动到 **Pages** 部分
4. 在 **Source** 下选择 **Deploy from a branch**
5. 选择 **gh-pages** 分支 (GitHub Actions会自动创建这个分支)
6. 点击 **Save**

### 3. 自动部署完成！
- 当您推送代码到 `main` 分支时，GitHub Actions 自动触发
- GitHub Actions 会构建项目 (`npm run build`)
- 构建后的文件自动推送到 `gh-pages` 分支
- GitHub Pages 从 `gh-pages` 分支部署网站
- 几分钟后网站就可以访问了

## 📋 **分支作用说明**

- **main 分支**: 存放源代码 (React、组件、样式等)
- **gh-pages 分支**: 存放构建后的静态文件 (HTML、CSS、JS)
- GitHub Pages 需要静态文件，所以从 `gh-pages` 分支部署

## 🌐 访问您的网站

- **自定义域名**: https://tools.arina-dev.com
- **GitHub域名**: https://yourusername.github.io/resources-web

## 🔧 域名配置

您的域名 `tools.arina-dev.com` 已经配置好了，但需要在域名注册商处配置DNS：

### DNS 记录配置
在您的域名管理面板添加以下记录：

**CNAME 记录（子域名）:**
```
Type: CNAME
Name: tools
Value: yourusername.github.io
```

**备选方案 - A 记录（如果需要）:**
```
Type: A
Name: tools
Value: 185.199.108.153

Type: A
Name: tools
Value: 185.199.109.153

Type: A
Name: tools
Value: 185.199.110.153

Type: A
Name: tools
Value: 185.199.111.153
```

## ✅ 部署检查清单

- [ ] 代码已推送到GitHub
- [ ] GitHub Pages已开启
- [ ] 选择了 `gh-pages` 分支
- [ ] DNS记录已配置（如使用自定义域名）
- [ ] GitHub Actions运行成功
- [ ] 网站可以正常访问

## 🔄 更新网站

以后每次更新网站，只需要：

```powershell
git add .
git commit -m "描述您的更改"
git push origin main
```

GitHub Actions 会自动重新构建和部署！

## 🛠️ 故障排除

### 如果部署失败：
1. 检查 GitHub Actions 日志
2. 确认 `npm run build` 本地运行成功
3. 检查所有依赖是否正确安装

### 如果自定义域名不工作：
1. 确认DNS记录正确配置
2. 等待DNS传播（最多24小时）
3. 在GitHub Pages设置中确认域名配置
4. 确保启用了 "Enforce HTTPS"

## 📍 下一步

现在您可以：
1. 推送代码到GitHub
2. 开启GitHub Pages
3. 配置域名DNS
4. 享受自动部署！
