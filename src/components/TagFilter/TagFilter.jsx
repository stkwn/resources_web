import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg); /* 增大内边距，给标签按钮更多空间 */
  box-shadow: var(--shadow-sm);
  margin-top: var(--spacing-md);
  overflow: visible; /* 确保内部元素的边框和阴影可见 */
`;

const FilterTitle = styled.h3`
  font-size: var(--fs-md);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden; /* 防止水平滚动 */
  padding: 4px; /* 增大内边距确保边框显示完整 */
  margin: -4px; /* 抵消内边距对布局的影响 */
`;

const TagButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 2px solid ${props => props.isSelected ? 'var(--color-primary-500)' : 'var(--color-border)'};
  border-radius: var(--radius-md);
  background: ${props => props.isSelected ? 'var(--color-primary-100)' : 'var(--color-bg-primary)'};
  color: ${props => props.isSelected ? 'var(--color-primary-600)' : 'var(--color-text-secondary)'};
  font-size: var(--fs-xs);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
  white-space: nowrap;
  margin: 3px; /* 增大外边距确保边框有足够空间显示 */
  box-sizing: border-box; /* 确保边框包含在元素尺寸内 */

  &:hover {
    background: ${props => props.isSelected ? 'var(--color-primary-200)' : 'var(--color-grey-100)'};
    color: ${props => props.isSelected ? 'var(--color-primary-700)' : 'var(--color-text-primary)'};
    border-color: ${props => props.isSelected ? 'var(--color-primary-500)' : 'var(--color-grey-300)'};
    transform: translateY(-1px); /* 轻微上移效果，避免边框被遮挡 */
  }

  &:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
    z-index: 2; /* 增大z-index确保焦点状态的按钮在最上层 */
    position: relative;
  }

  /* 选中状态时确保在最上层 */
  ${props => props.isSelected && `
    z-index: 1;
    position: relative;
  `}
`;

const TagCount = styled.span`
  background: ${props => props.isSelected ? 'var(--color-primary-500)' : 'var(--color-grey-300)'};
  color: ${props => props.isSelected ? 'white' : 'var(--color-text-primary)'};
  padding: 0.1rem 0.4rem;
  border-radius: var(--radius-sm);
  font-size: var(--fs-xs);
  font-weight: 500;
  min-width: 1.4rem;
  text-align: center;
  margin-left: var(--spacing-xs);
`;

const ClearButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-size: var(--fs-xs);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
  margin-bottom: var(--spacing-sm);
  box-sizing: border-box;

  &:hover {
    background: var(--color-grey-100);
    color: var(--color-text-primary);
    border-color: var(--color-grey-400);
  }

  &:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
`;

const TagFilter = ({ selectedTags, onTagChange, sites, selectedCategory }) => {
  // 获取所有标签及其使用次数
  const getTagCounts = () => {
    const tagCounts = {};
    
    // 根据选中的分类过滤网站
    const filteredSites = selectedCategory 
      ? sites.filter(site => site.category === selectedCategory)
      : sites;
    
    filteredSites.forEach(site => {
      site.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    
    // 按使用频率排序
    return Object.entries(tagCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 50); // 限制显示前50个最常用的标签
  };

  const tagCounts = getTagCounts();

  const handleTagClick = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagChange(newSelectedTags);
  };

  const handleClearAll = () => {
    onTagChange([]);
  };

  return (
    <FilterContainer>
      <FilterTitle>标签筛选</FilterTitle>
      
      {selectedTags.length > 0 && (
        <ClearButton onClick={handleClearAll}>
          清除所有标签 ({selectedTags.length})
        </ClearButton>
      )}
      
      <TagsList>
        {tagCounts.map(([tag, count]) => {
          const isSelected = selectedTags.includes(tag);
          
          return (
            <TagButton
              key={tag}
              isSelected={isSelected}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
              <TagCount isSelected={isSelected}>
                {count}
              </TagCount>
            </TagButton>
          );
        })}
      </TagsList>
      
      {tagCounts.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: 'var(--spacing-md)',
          color: 'var(--color-text-tertiary)',
          fontSize: 'var(--fs-sm)'
        }}>
          当前分类下没有可用的标签
        </div>
      )}
    </FilterContainer>
  );
};

export default TagFilter;
