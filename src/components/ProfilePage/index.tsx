import React from 'react';

import {Container,
        Banner,
        Avatar,
        ProfileData,
        EditButton,
        LocationIcon,
        CakeIcon,
        Followage
        } from './style';

import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>

        <Avatar/>

      </Banner>

      <ProfileData>
          <EditButton outlined>Configurar perfil</EditButton>

          <h1>Jonathan Costa</h1>
          <h2>@JothaCosta02</h2>

          <p>
            Musician and Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
          </p>

          <ul>
            <li>
              <LocationIcon/>
              São José-SC,Brasil
            </li>

            <li>
              <CakeIcon/>
              Nascido(a) em 22 de fevereiro de 2001
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>69</strong>
            </span> 
            
            <span>
              <strong>24 </strong> seguidores
            </span> 
          </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
}

export default ProfilePage  