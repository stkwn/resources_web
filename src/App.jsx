import React, { useState, useEffect } from 'react'
import { GlobalStyles, Wrapper, Container } from './styles'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'
import TagFilter from './components/TagFilter/TagFilter'
import SiteCard from './components/SiteCard/SiteCard'
import Footer from './components/Footer/Footer'
import sitesData from './data/sites.json'
import styled from 'styled-components'

const MainContent = styled.main`
  padding: var(--spacing-lg) 0;
  width: 100%;
  overflow-x: hidden; /* 防止水平溢出 */
`;

const SitesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  gap: var(--spacing-lg);
  width: 100%;
  overflow: hidden; /* 防止内容溢出 */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    grid-template-columns: minmax(0, 1fr); /* 确保在小屏幕上不溢出 */
  }
  
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryDisplaySection = styled.section`
  margin-bottom: var(--spacing-xl);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryHeader = styled.h2`
  font-size: var(--fs-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-primary-500);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const CategoryCount = styled.span`
  background: var(--color-primary-500);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  font-size: var(--fs-sm);
  font-weight: 500;
  min-width: 2rem;
  text-align: center;
`;

const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
`;

const SearchSection = styled.div`
  flex: 1;
  min-width: 0;
`;

const CategorySection = styled.div`
  flex: 0 0 auto;
  width: 100%;
  
`;

function App() {
  const [sites, setSites] = useState([]);
  const [filteredSites, setFilteredSites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // 初始化数据
  useEffect(() => {
    setSites(sitesData.sites);
    setFilteredSites(sitesData.sites);
  }, []);

  // 过滤逻辑
  useEffect(() => {
    let filtered = sites;

    // 分类过滤
    if (selectedCategory) {
      filtered = filtered.filter(site => site.category === selectedCategory);
    }

    // 标签过滤
    if (selectedTags.length > 0) {
      filtered = filtered.filter(site =>
        selectedTags.every(tag => site.tags.includes(tag))
      );
    }

    // 搜索过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(site =>
        site.title.toLowerCase().includes(query) ||
        site.description.toLowerCase().includes(query) ||
        site.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredSites(filtered);
  }, [sites, selectedCategory, selectedTags, searchQuery]);

  // 按分类分组
  const groupedSites = React.useMemo(() => {
    const groups = {};
    
    filteredSites.forEach(site => {
      if (!groups[site.category]) {
        groups[site.category] = [];
      }
      groups[site.category].push(site);
    });
    
    return groups;
  }, [filteredSites]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    // 当分类改变时，清空已选择的标签
    setSelectedTags([]);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleTagChange = (tags) => {
    setSelectedTags(tags);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Header totalSites={sites.length} />
          
          <MainContent>
            <FilterSection>
              <SearchSection>
                <SearchBar 
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                  placeholder="搜索网站名称、描述或标签..."
                />
              </SearchSection>
              
              <CategorySection>
                <CategoryFilter 
                  categories={sitesData.categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  sites={sites}
                />
                
                <TagFilter 
                  selectedTags={selectedTags}
                  onTagChange={handleTagChange}
                  sites={sites}
                  selectedCategory={selectedCategory}
                />
              </CategorySection>
            </FilterSection>

            {/* 按分类分组显示 */}
            {Object.keys(groupedSites).length > 0 ? (
              <div>
                {Object.entries(groupedSites).map(([category, sites]) => (
                  <CategoryDisplaySection key={category}>
                    <CategoryHeader>
                      {category}
                      <CategoryCount>{sites.length}</CategoryCount>
                    </CategoryHeader>
                    <SitesGrid>
                      {sites.map(site => (
                        <SiteCard 
                          key={site.id}
                          site={site}
                        />
                      ))}
                    </SitesGrid>
                  </CategoryDisplaySection>
                ))}
              </div>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: 'var(--spacing-2xl)',
                color: 'var(--color-text-tertiary)'
              }}>
                <p>没有找到匹配的网站</p>
                <p>尝试调整搜索条件或选择其他分类</p>
              </div>
            )}
          </MainContent>
          
          <Footer />
        </Container>
      </Wrapper>
    </>
    )
}

export default App
