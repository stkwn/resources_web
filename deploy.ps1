# GitHub Pages 部署脚本
Write-Host "🚀 开始部署到 GitHub Pages..." -ForegroundColor Green

# 检查git状态
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "📝 检测到未提交的更改，正在提交..." -ForegroundColor Yellow
    git add .
    $commitMessage = Read-Host "请输入提交信息 (默认: Update content)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Update content"
    }
    git commit -m $commitMessage
}

# 推送到GitHub
Write-Host "📤 推送代码到 GitHub..." -ForegroundColor Blue
git push origin main

Write-Host "✅ 部署完成！" -ForegroundColor Green
Write-Host "🌐 GitHub Actions 将自动构建并部署网站" -ForegroundColor Cyan
Write-Host "📍 几分钟后可以访问: https://yourusername.github.io/resources-web" -ForegroundColor Cyan

# 打开GitHub Actions页面
$openActions = Read-Host "是否打开 GitHub Actions 页面查看部署状态? (y/N)"
if ($openActions -eq "y" -or $openActions -eq "Y") {
    Start-Process "https://github.com/yourusername/resources-web/actions"
}
