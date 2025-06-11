import React from 'react';
import styled from 'styled-components';
import { getCategoryColor, cardHoverAnimation, truncateText } from '../../styles';

const CardContainer = styled.div`
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  ${cardHoverAnimation}
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
`;

const Favicon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  object-fit: cover;
  background: var(--color-grey-100);
`;

const FaviconFallback = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  background: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-lg);
  font-weight: 600;
  color: var(--color-primary-700);
`;

const CardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const SiteTitle = styled.h3`
  font-size: var(--fs-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  ${truncateText(1)}
`;

const SiteUrl = styled.p`
  font-size: var(--fs-xs);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-sm);
  ${truncateText(1)}
  font-family: var(--font-mono);
`;

const SiteDescription = styled.p`
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
  ${truncateText(2)}
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
`;

const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: ${props => props.color}20;
  color: ${props => props.color};
  border: 1px solid ${props => props.color}40;
  border-radius: var(--radius-lg);
  font-size: var(--fs-xs);
  font-weight: 500;
`;

const CategoryDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TagsList = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
  margin-top: var(--spacing-sm);
`;

const Tag = styled.span`
  padding: 0.2rem 0.6rem;
  background: var(--color-grey-100);
  color: var(--color-text-secondary);
  border-radius: var(--radius-sm);
  font-size: var(--fs-xs);
  font-weight: 400;
`;

const ExternalIcon = styled.span`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  font-size: var(--fs-sm);
  color: var(--color-text-tertiary);
  opacity: 0;
  transition: var(--transition-fast);

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const SiteCard = ({ site }) => {
  const { title, url, description, category, tags, favicon } = site;
  const categoryColor = getCategoryColor(category);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFaviconError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  const getTitleInitial = (title) => {
    return title.charAt(0).toUpperCase();
  };

  return (
    <CardContainer onClick={handleClick}>
      <ExternalIcon>🔗</ExternalIcon>
      
      <CardHeader>
        <Favicon 
          src={favicon} 
          alt={`${title} favicon`}
          onError={handleFaviconError}
        />
        <FaviconFallback style={{ display: 'none' }}>
          {getTitleInitial(title)}
        </FaviconFallback>
        
        <CardContent>
          <SiteTitle>{title}</SiteTitle>
          <SiteUrl>{url}</SiteUrl>
        </CardContent>
      </CardHeader>

      <SiteDescription>{description}</SiteDescription>

      <CardFooter>
        <CategoryTag color={categoryColor}>
          <CategoryDot color={categoryColor} />
          {category}
        </CategoryTag>
      </CardFooter>

      {tags && tags.length > 0 && (
        <TagsList>
          {tags.slice(0, 3).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          {tags.length > 3 && (
            <Tag>+{tags.length - 3}</Tag>
          )}
        </TagsList>
      )}
    </CardContainer>
  );
};

export default SiteCard;
