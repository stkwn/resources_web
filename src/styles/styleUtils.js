import { theme } from './theme';

// 获取分类颜色
export const getCategoryColor = (category) => {
  return theme.categoryColors[category] || 'var(--color-grey-500)';
};

// 获取分类对应的浅色背景
export const getCategoryBackground = (category) => {
  const colorVar = getCategoryColor(category);
  // 返回对应的浅色版本
  if (colorVar.includes('primary')) return 'var(--color-primary-100)';
  if (colorVar.includes('success')) return 'var(--color-success-100)';
  if (colorVar.includes('warning')) return 'var(--color-warning-100)';
  if (colorVar.includes('error')) return 'var(--color-error-100)';
  return 'var(--color-grey-100)';
};

// 截断文本
export const truncateText = (lines = 1) => `
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 悬停效果
export const hoverEffect = `
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
  }
`;

// 焦点样式
export const focusStyles = `
  &:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
`;

// 卡片悬停动画
export const cardHoverAnimation = `
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

// 淡入动画
export const fadeIn = (duration = '0.3s') => `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  animation: fadeIn ${duration} ease-out;
`;

// 加载动画
export const loadingPulse = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

// 媒体查询助手
export const mediaQuery = {
  mobile: '@media (max-width: 48rem)',
  tablet: '@media (max-width: 76.8rem)',
  desktop: '@media (min-width: 102.4rem)'
};
