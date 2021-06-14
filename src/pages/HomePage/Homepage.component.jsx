import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/directory.component.jsx';

const HomepageContainer
  = styled.div`
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  }
  
`

export const HomePage = () => (
  <HomepageContainer>
    <Directory />
  </HomepageContainer>
)

