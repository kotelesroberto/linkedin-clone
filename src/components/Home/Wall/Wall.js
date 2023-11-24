import styled from "styled-components";
import React from "react";

import { UserAvatarPhoto } from "../../Common/User";
import { Card, CardContainer } from "../../Common/Cards";
import { ButtonSharePost } from "../../Common/Buttons";

const Wall = () => {
  return (
    <Container>
      <ShareBox>
        <CardContainer>
          <ShareBoxTop>
            <UserAvatarPhoto>
              <img src="./upload/userphoto.jpg" alt="" />
            </UserAvatarPhoto>
            <ButtonSharePost>Start a post</ButtonSharePost>
          </ShareBoxTop>
          <ShareBoxButtons>
            <button>
              <img src="/images/photo-icon.svg" alt="" />
              <span>Photo</span>
            </button>
            <button>
              <img src="/images/photo-icon.svg" alt="" />
              <span>Video</span>
            </button>
            <button>
              <img src="/images/calendar-icon.svg" alt="" />
              <span>Event</span>
            </button>
            <button>
              <img src="/images/article-icon.svg" alt="" />
              <span>Write article</span>
            </button>
          </ShareBoxButtons>
        </CardContainer>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 24px;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    margin-right: 0;
    width: calc(100% - 225px - 24px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ShareBox = styled(Card)`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px;
`;

const ShareBoxTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  button {
  }
`;

const ShareBoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    padding: 12px 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 700;

    &:hover {
      outline: none;
      background-color: rgba(0, 0, 0, 0.04);
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

export default Wall;
