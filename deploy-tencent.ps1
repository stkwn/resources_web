# 腾讯云部署脚本
# 安装腾讯云CLI工具后使用

# 构建项目
npm run build

# 上传到腾讯云COS
tccli cos sync --local-path ./dist --cos-path / --bucket your-bucket-name

# 自动部署配置
# 在 package.json 中添加:
# "deploy:tencent": "npm run build && tccli cos sync --local-path ./dist --cos-path / --bucket your-bucket-name"
