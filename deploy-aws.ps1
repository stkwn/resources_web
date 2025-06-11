# AWS部署脚本
# 需要安装 AWS CLI: aws configure

# 构建项目
npm run build

# 上传到S3
aws s3 sync dist/ s3://your-bucket-name --delete

# 清除CloudFront缓存（可选）
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
