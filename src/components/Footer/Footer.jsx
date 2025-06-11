import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg) 0;
  margin-top: auto;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
  
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

const CopyrightText = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--fs-sm);
  margin: 0;
  font-weight: 500;
  
  &:hover {
    color: var(--color-text-primary);
    transition: var(--transition-fast);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          © Arina-Dev 2025
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
