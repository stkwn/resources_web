# 阿里云部署脚本
# 安装阿里云CLI工具后使用

# 构建项目
npm run build

# 上传到阿里云OSS
ossutil cp -r ./dist oss://your-bucket-name/ --update

# 刷新CDN缓存
aliyun cdn RefreshObjectCaches --ObjectPath https://your-domain.com --ObjectType Directory
