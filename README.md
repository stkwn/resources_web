# 网站收藏卡片项目

一个基于 React 的网站收藏管理工具，以卡片形式展示和管理您收藏的有用站点。

## 项目概述

### 功能特性
- 📱 响应式卡片布局展示网站
- 🔍 搜索和筛选功能
- 📂 分类管理
- 🎨 美观的 UI 设计
- 📊 JSON 数据存储
- ⚡ 快速访问和打开网站

### 技术栈
- **前端框架**: React 18
- **构建工具**: Vite
- **样式方案**: Styled Components
- **语言**: JavaScript (ES6+)
- **数据存储**: JSON 文件
- **部署**: GitHub Pages

## 项目结构

```
resources_web/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── CNAME                 # 自定义域名配置
├── src/
│   ├── components/
│   │   ├── SiteCard/         # 网站卡片组件
│   │   ├── SearchBar/        # 搜索栏组件
│   │   ├── CategoryFilter/   # 分类筛选组件
│   │   ├── TagFilter/        # 标签筛选组件
│   │   ├── Header/           # 页面头部组件
│   │   └── Footer/           # 页面底部组件
│   ├── data/
│   │   └── sites.json        # 网站数据
│   ├── styles/
│   │   ├── GlobalStyles.js   # 全局样式
│   │   ├── theme.js          # 主题配置
│   │   └── styleUtils.js     # 样式工具
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 部署配置
├── package.json
├── vite.config.js
├── DEPLOYMENT.md             # 部署指南
└── README.md
```

## 数据结构

网站数据将存储在 `src/data/sites.json` 中，格式如下：

```json
{
  "sites": [
    {
      "id": 1,
      "title": "网站名称",
      "url": "https://example.com",
      "description": "网站描述",
      "category": "开发工具",
      "tags": ["React", "前端", "常用"],
      "favicon": "网站图标URL",
      "addedDate": "2025-06-10"
    }
  ],
  "categories": [
    "开发工具",
    "在线工具", 
    "学习资源",
    "技术博客",
    "GitHub项目",
    "MCP相关",
    "云服务平台",
    "前端资源",
    "后端工具",
    "DevOps工具",
    "AI/ML工具",
    "文档工具"
  ]
}
```

## 分类说明

### 主要分类
- **开发工具** - IDE、编辑器、调试工具、API测试工具
- **在线工具** - 代码格式化、转换工具、生成器、测试工具
- **学习资源** - 教程网站、文档、在线课程、技术规范
- **技术博客** - 个人博客、技术团队博客、专业技术网站
- **GitHub项目** - 开源项目、代码库、工具库、模板项目
- **MCP相关** - Model Context Protocol相关资源和工具
- **云服务平台** - AWS、Azure、GCP等云服务工具和文档
- **前端资源** - UI库、组件库、图标、字体、设计工具
- **后端工具** - 数据库工具、服务器管理、API工具、监控工具
- **DevOps工具** - CI/CD、容器、部署工具、自动化工具
- **AI/ML工具** - AI开发工具、模型训练平台、机器学习资源
- **文档工具** - Wiki、笔记、协作工具、知识管理

### 数据字段说明
- **id**: 唯一标识符
- **title**: 网站名称
- **url**: 网站链接
- **description**: 网站描述
- **category**: 所属分类
- **tags**: 自定义标签，支持多维度分类和搜索
- **favicon**: 网站图标URL
- **addedDate**: 添加日期

## 核心组件

### SiteCard 组件
- 显示网站信息（标题、描述、分类）
- 网站图标展示
- 点击打开网站链接
- 悬停效果

### SearchBar 组件
- 实时搜索功能
- 支持按标题、描述、标签搜索

### CategoryFilter 组件
- 分类筛选功能
- 显示每个分类的网站数量

### Header 组件
- 项目标题
- 统计信息显示

## 开发计划

### Phase 1: 基础功能
- [x] 项目初始化
- [ ] 基础组件开发
- [ ] JSON 数据读取
- [ ] 卡片布局实现

### Phase 2: 交互功能
- [ ] 搜索功能
- [ ] 分类筛选
- [ ] 响应式设计

### Phase 3: 优化部署
- [ ] 性能优化
- [ ] GitHub Actions 配置
- [ ] AWS 部署配置

## 安装和运行

```bash
# 克隆项目
git clone [repository-url]

# 进入项目目录
cd resources_web

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署说明

项目通过 GitHub Pages 自动部署：

### 🚀 快速部署
1. 推送代码到 GitHub
2. 在仓库设置中开启 GitHub Pages
3. 选择 `gh-pages` 分支作为源
4. 访问: `https://yourusername.github.io/resources-web`

### 🌐 自定义域名（可选）
1. 购买域名并配置 DNS
2. 修改 `public/CNAME` 文件
3. 在 GitHub Pages 设置中添加自定义域名

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 在线演示

- GitHub Pages: `https://yourusername.github.io/resources-web`
- 自定义域名: `https://your-domain.com` (如果配置)

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 发起 Pull Request

## 作者

- **Arina-Dev** - *Initial work* - 2025

## 许可证

MIT License