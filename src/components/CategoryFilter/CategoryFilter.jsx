import React from 'react';
import styled from 'styled-components';
import { getCategoryColor } from '../../styles';

const FilterContainer = styled.div`
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
`;

const FilterTitle = styled.h3`
  font-size: var(--fs-md);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

const CategoryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  border: 1px solid ${props => props.isSelected ? props.color : 'var(--color-border)'};
  border-radius: var(--radius-lg);
  background: ${props => props.isSelected ? `${props.color}15` : 'var(--color-bg-primary)'};
  color: ${props => props.isSelected ? props.color : 'var(--color-text-secondary)'};
  font-size: var(--fs-sm);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
  white-space: nowrap;

  &:hover {
    background: ${props => props.isSelected ? `${props.color}20` : 'var(--color-grey-100)'};
    color: ${props => props.isSelected ? props.color : 'var(--color-text-primary)'};
    border-color: ${props => props.isSelected ? props.color : 'var(--color-grey-300)'};
  }

  &:focus {
    outline: 2px solid ${props => props.color || 'var(--color-primary-500)'};
    outline-offset: 2px;
  }
`;

const CategoryDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.color};
  flex-shrink: 0;
`;

const CategoryCount = styled.span`
  background: ${props => props.isSelected ? props.color : 'var(--color-grey-300)'};
  color: ${props => props.isSelected ? 'white' : 'var(--color-text-primary)'};
  padding: 0.1rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: var(--fs-xs);
  font-weight: 500;
  min-width: 1.6rem;
  text-align: center;
  margin-left: var(--spacing-xs);
`;

const AllCategoriesButton = styled(CategoryButton)`
  font-weight: 600;
  border-width: 2px;
`;

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, sites }) => {
  // 计算每个分类的网站数量
  const getCategoryCount = (category) => {
    return sites.filter(site => site.category === category).length;
  };

  const totalCount = sites.length;
  const primaryColor = 'var(--color-primary-500)';

  return (
    <FilterContainer>
      <FilterTitle>分类筛选</FilterTitle>
      <CategoryList>
        <AllCategoriesButton
          isSelected={!selectedCategory}
          color={primaryColor}
          onClick={() => onCategoryChange('')}
        >
          <CategoryDot color={primaryColor} />
          全部分类
          <CategoryCount isSelected={!selectedCategory} color={primaryColor}>
            {totalCount}
          </CategoryCount>
        </AllCategoriesButton>

        {categories.map(category => {
          const count = getCategoryCount(category);
          const isSelected = selectedCategory === category;
          const categoryColor = getCategoryColor(category);
          
          if (count === 0) return null;
          
          return (
            <CategoryButton
              key={category}
              isSelected={isSelected}
              color={categoryColor}
              onClick={() => onCategoryChange(category)}
            >
              <CategoryDot color={categoryColor} />
              {category}
              <CategoryCount isSelected={isSelected} color={categoryColor}>
                {count}
              </CategoryCount>
            </CategoryButton>
          );
        })}
      </CategoryList>
    </FilterContainer>
  );
};

export default CategoryFilter;
