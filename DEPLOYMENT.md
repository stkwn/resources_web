# GitHub Pages 部署指南

## 🚀 快速部署

### 1. 推送代码到GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. 开启GitHub Pages
1. 进入GitHub仓库页面
2. 点击 `Settings` 标签
3. 滚动到 `Pages` 部分
4. 在 `Source` 下选择 `Deploy from a branch`
5. 选择 `gh-pages` 分支
6. 点击 `Save`

### 3. 等待部署
- GitHub Actions会自动构建并部署
- 几分钟后访问: `https://yourusername.github.io/resources-web`

## 🌐 自定义域名配置

### 1. 购买域名
推荐域名注册商：
- [Namesilo](https://www.namesilo.com/) - 便宜实惠
- [Cloudflare](https://www.cloudflare.com/) - 集成CDN
- [阿里云](https://wanwang.aliyun.com/) - 国内用户

### 2. 配置DNS记录
在域名管理界面添加以下记录：

**A记录（根域名）:**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @  
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153  
TTL: 3600
```

**CNAME记录（www子域名）:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600
```

### 3. 更新项目配置
1. 修改 `public/CNAME` 文件，将 `your-domain.com` 替换为你的域名
2. 修改 `.github/workflows/deploy.yml` 中的 `cname` 值
3. 提交并推送更改

### 4. 在GitHub设置自定义域名
1. 进入仓库的 `Settings` → `Pages`
2. 在 `Custom domain` 输入你的域名
3. 勾选 `Enforce HTTPS`
4. 保存设置

## 📋 部署检查清单

- [ ] 代码已推送到GitHub
- [ ] GitHub Actions运行成功
- [ ] GitHub Pages已开启
- [ ] 网站可以正常访问
- [ ] 自定义域名已配置（可选）
- [ ] HTTPS已启用

## 🔧 故障排除

### 构建失败
- 检查 `npm run build` 本地是否成功
- 查看GitHub Actions日志
- 确认依赖项正确安装

### 404错误
- 确认 `base` 路径配置正确
- 检查文件路径大小写
- 确认所有资源文件都在dist目录

### 自定义域名不生效
- 检查DNS记录是否正确
- 等待DNS传播（可能需要24小时）
- 确认CNAME文件内容正确

## 📝 更新网站

每次更新只需：
```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions会自动重新部署！
