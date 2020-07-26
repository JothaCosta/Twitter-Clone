import React from 'react';

import ProfilePage from '../ProfilePage';

import {Container,
       Header,
       BackIcon, 
       ProfileInfo, 
       BottomMenu, 
       HomeIcon,
       SearchIcon,
       BellIcon,
       EmailIcon}from './style'

const Main: React.FC = () => {
  return(
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>JothaCosta02</strong>
          <span>412 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage/> 

      <BottomMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>
    </Container>
  );
}

export default Main