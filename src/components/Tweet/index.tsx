import React from 'react';

import {Container,
        Retweeted,
        RockseatIcon,
        Body,
        Avatar,
        Content,
        Header,
        Dot,
        Description,
        Icons,
        ImageContent,
        Status,
        CommentIcon,
        RetweetIcon,
        LikeIcon
        } from './style';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockseatIcon/>
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar/>

        <Content>
          <Header>
            <strong>Rocktseat</strong>
            <span>@rocktseat</span>

            <Dot/>

            <time>27 de jul</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Foguete não tem ré  🚀</Description>
        
          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
                18
            </Status> 
            <Status>
              <RetweetIcon/>
                18
            </Status> 
            <Status>
              <LikeIcon/>
                999
            </Status> 
          </Icons>

        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;