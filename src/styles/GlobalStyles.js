import styled, { createGlobalStyle } from 'styled-components';
import { cssVariables } from './theme';

// 全局样式
export const GlobalStyles = createGlobalStyle`
  ${cssVariables}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px; /* 1rem = 10px */
    scroll-behavior: smooth;
    overflow-x: hidden; /* 防止水平滚动 */
  }

  body {
    font-family: var(--font-primary);
    font-size: var(--fs-md);
    line-height: 1.5;
    color: var(--color-text-primary);
    background-color: var(--color-bg-secondary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* 防止水平滚动 */
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-text-primary);
  }

  h1 { font-size: var(--fs-3xl); margin-bottom: var(--spacing-lg); }
  h2 { font-size: var(--fs-2xl); margin-bottom: var(--spacing-md); }
  h3 { font-size: var(--fs-xl); margin-bottom: var(--spacing-md); }
  h4 { font-size: var(--fs-lg); margin-bottom: var(--spacing-sm); }

  p {
    margin-bottom: var(--spacing-md);
    color: var(--color-text-secondary);
  }

  a {
    color: var(--color-primary-500);
    text-decoration: none;
    transition: var(--transition-fast);

    &:hover {
      color: var(--color-primary-700);
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid var(--color-primary-500);
      outline-offset: 2px;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: var(--transition-fast);

    &:focus {
      outline: 2px solid var(--color-primary-500);
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea {
    font-family: inherit;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-md);
    transition: var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--color-primary-500);
      box-shadow: 0 0 0 3px var(--color-primary-100);
    }

    &::placeholder {
      color: var(--color-text-tertiary);
    }
  }

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-grey-100);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-300);
    border-radius: var(--radius-lg);

    &:hover {
      background: var(--color-grey-500);
    }
  }

  /* 选中文本样式 */
  ::selection {
    background: var(--color-primary-100);
    color: var(--color-primary-900);
  }

  /* 移动端优化 */
  @media (max-width: 48rem) {
    body {
      font-size: var(--fs-sm);
    }

    h1 { font-size: var(--fs-2xl); }
    h2 { font-size: var(--fs-xl); }
  }
`;

// 常用的样式组件
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 防止水平滚动 */
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  flex: 1;
  overflow-x: hidden; /* 防止内容溢出 */
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }
  
  @media (min-width: 1200px) {
    max-width: 1600px;
    padding: 0 var(--spacing-xl);
  }
  
  @media (min-width: 1920px) {
    max-width: 1800px;
  }
`;

export const Card = styled.div`
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--fs-sm);
  transition: var(--transition-fast);
  cursor: pointer;

  /* Primary variant */
  ${props => props.variant === 'primary' && `
    background: var(--color-primary-500);
    color: white;

    &:hover:not(:disabled) {
      background: var(--color-primary-700);
    }
  `}

  /* Secondary variant */
  ${props => props.variant === 'secondary' && `
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);

    &:hover:not(:disabled) {
      background: var(--color-grey-100);
    }
  `}

  /* Ghost variant */
  ${props => props.variant === 'ghost' && `
    background: transparent;
    color: var(--color-text-secondary);

    &:hover:not(:disabled) {
      background: var(--color-grey-100);
      color: var(--color-text-primary);
    }
  `}

  /* Size variants */
  ${props => props.size === 'small' && `
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--fs-xs);
  `}

  ${props => props.size === 'large' && `
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--fs-md);
  `}
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-lg);
  font-size: var(--fs-xs);
  font-weight: 500;
  background: ${props => props.color || 'var(--color-grey-100)'};
  color: ${props => props.textColor || 'var(--color-text-primary)'};
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || 'repeat(auto-fill, minmax(35rem, 1fr))'};
  gap: ${props => props.gap || 'var(--spacing-lg)'};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: ${props => props.columns || 'repeat(3, 1fr)'};
  }
`;
