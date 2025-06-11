import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: var(--spacing-2xl) 0 var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-lg);
`;

const Title = styled.h1`
  font-size: var(--fs-4xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: var(--fs-3xl);
  }
  
  @media (min-width: 1024px) {
    font-size: 5.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: var(--fs-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 1024px) {
    font-size: var(--fs-xl);
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: var(--fs-2xl);
  font-weight: 600;
  color: var(--color-primary-500);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  font-size: var(--fs-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Header = ({ totalSites }) => {
  return (
    <HeaderContainer>
      <Title>🔗 网站收藏</Title>
      <Subtitle>
        精心整理的IT技术网站集合，助力您的开发之旅
      </Subtitle>
      <Stats>
        <StatItem>
          <StatNumber>{totalSites}</StatNumber>
          <StatLabel>收藏网站</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>12</StatNumber>
          <StatLabel>分类</StatLabel>
        </StatItem>
      </Stats>
    </HeaderContainer>
  );
};

export default Header;
