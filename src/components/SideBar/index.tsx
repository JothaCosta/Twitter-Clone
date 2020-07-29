import React from 'react';

import {Container,
        SearchWrapper,
        SearchInput,
        SearchIcon,
        Body,
      } from './style';


const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
          <SearchInput placeholder='Busca no Twitter'/>
          <SearchIcon/>
        </SearchWrapper>

        <Body>
          <p>{'Lorem ipsum dolor sit amet. '.repeat(90)}</p>
        </Body> 
    </Container>
  );
}

export default SideBar;