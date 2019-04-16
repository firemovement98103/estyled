import React from 'react';
import styled from 'styled-components';

const StyledPageContentSectionWrapper = styled.div``;
const StyledPageContentSection = styled.div`
  margin: 0 auto;
  ${({ theme }) => `
    max-width: ${theme.sizing.content};
    padding: ${theme.spacing.md()} 0;
  `}
`;
const Section = props => (
  <StyledPageContentSectionWrapper>
    <StyledPageContentSection {...props} />
  </StyledPageContentSectionWrapper>
);
const StyledPageContent = styled.div``;
const Page = styled.div`
  ${({ theme }) => `
    ${StyledPageContentSectionWrapper}:nth-child(even) {
      background-color: ${theme.colors.backgroundLight}
    }
    ${StyledPageContent} {
      max-width: ${theme.sizing.content};
      margin: 0 auto;
    }
  `}
`;
Page.Section = Section;
Page.Content = StyledPageContent;
export default Page;
