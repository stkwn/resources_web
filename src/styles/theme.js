// CSS 变量定义 - 简洁的设计系统
export const cssVariables = `
  :root {
    /* 颜色系统 - 每种颜色只需要 100 300 500 700 900 */
    
    /* 灰色系 */
    --color-grey-100: #F5F5F5;
    --color-grey-300: #D1D5DB;
    --color-grey-500: #6B7280;
    --color-grey-700: #374151;
    --color-grey-900: #111827;
    
    /* 主色 - 蓝色系 */
    --color-primary-100: #DBEAFE;
    --color-primary-300: #93C5FD;
    --color-primary-500: #3B82F6;
    --color-primary-700: #1D4ED8;
    --color-primary-900: #1E3A8A;
    
    /* 成功色 - 绿色系 */
    --color-success-100: #D1FAE5;
    --color-success-300: #6EE7B7;
    --color-success-500: #10B981;
    --color-success-700: #047857;
    --color-success-900: #064E3B;
    
    /* 警告色 - 黄色系 */
    --color-warning-100: #FEF3C7;
    --color-warning-300: #FCD34D;
    --color-warning-500: #F59E0B;
    --color-warning-700: #D97706;
    --color-warning-900: #92400E;
    
    /* 错误色 - 红色系 */
    --color-error-100: #FEE2E2;
    --color-error-300: #FCA5A5;
    --color-error-500: #EF4444;
    --color-error-700: #DC2626;
    --color-error-900: #991B1B;
    
    /* 分类颜色 */
    --color-category-dev: var(--color-primary-500);
    --color-category-tool: var(--color-success-500);
    --color-category-learn: var(--color-warning-500);
    --color-category-blog: var(--color-error-500);
    --color-category-github: #8B5CF6;
    --color-category-mcp: #06B6D4;
    --color-category-cloud: #F97316;
    --color-category-frontend: #EC4899;
    --color-category-backend: #84CC16;
    --color-category-devops: #6366F1;
    --color-category-ai: #14B8A6;
    --color-category-doc: #A855F7;
    
    /* 语义色 */
    --color-bg-primary: #FFFFFF;
    --color-bg-secondary: var(--color-grey-100);
    --color-text-primary: var(--color-grey-900);
    --color-text-secondary: var(--color-grey-700);
    --color-text-tertiary: var(--color-grey-500);
    --color-border: var(--color-grey-300);
    
    /* 字体大小 */
    --fs-xs: 1.2rem;
    --fs-sm: 1.4rem;
    --fs-md: 1.6rem;
    --fs-lg: 2.0rem;
    --fs-xl: 2.4rem;
    --fs-2xl: 3.2rem;
    --fs-3xl: 4.8rem;
    --fs-4xl: 6.4rem;
    
    /* 间距 */
    --spacing-xs: 0.4rem;
    --spacing-sm: 0.8rem;
    --spacing-md: 1.6rem;
    --spacing-lg: 2.4rem;
    --spacing-xl: 3.2rem;
    --spacing-2xl: 4.8rem;
    
    /* 圆角 */
    --radius-sm: 0.4rem;
    --radius-md: 0.8rem;
    --radius-lg: 1.2rem;
    
    /* 阴影 */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    /* 字体 */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    
    /* 动画 */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;
    
    /* 响应式断点 */
    --bp-mobile: 48rem;
    --bp-tablet: 76.8rem;
    --bp-desktop: 102.4rem;
  }
`;

// 简化的主题对象，用于 JS 中引用
export const theme = {
  // 颜色快捷引用
  colors: {
    primary: 'var(--color-primary-500)',
    success: 'var(--color-success-500)',
    warning: 'var(--color-warning-500)',
    error: 'var(--color-error-500)',
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)'
    },
    bg: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)'
    },
    border: 'var(--color-border)'
  },
  
  // 分类颜色映射
  categoryColors: {
    '开发工具': 'var(--color-category-dev)',
    '在线工具': 'var(--color-category-tool)',
    '学习资源': 'var(--color-category-learn)',
    '技术博客': 'var(--color-category-blog)',
    'GitHub项目': 'var(--color-category-github)',
    'MCP相关': 'var(--color-category-mcp)',
    '云服务平台': 'var(--color-category-cloud)',
    '前端资源': 'var(--color-category-frontend)',
    '后端工具': 'var(--color-category-backend)',
    'DevOps工具': 'var(--color-category-devops)',
    'AI/ML工具': 'var(--color-category-ai)',
    '文档工具': 'var(--color-category-doc)'
  }
};
