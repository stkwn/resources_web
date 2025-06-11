import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  padding-left: 4.8rem;
  font-size: var(--fs-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
  transition: var(--transition-fast);
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  font-size: var(--fs-lg);
  pointer-events: none;
`;

const ClearButton = styled.button`
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  font-size: var(--fs-lg);
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-text-primary);
    background: var(--color-grey-100);
  }

  &:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
`;

const SearchBar = ({ searchQuery, onSearchChange, placeholder }) => {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {searchQuery && (
        <ClearButton onClick={handleClear} title="清除搜索">
          ✕
        </ClearButton>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
