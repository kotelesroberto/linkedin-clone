import styled from "styled-components";
import React from "react";

import { UserAvatarPhoto } from "../../Common/User";
import { Card, CardContainer } from "../../Common/Cards";
import { ButtonSharePost } from "../../Common/Buttons";
import { IconButtonRow } from "../../Common/Icons";

const ShareBox = () => {
  return (
    <ShareBoxContainer>
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
    </ShareBoxContainer>
  );
};

const ShareBoxContainer = styled(Card)`
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

const ShareBoxButtons = styled(IconButtonRow)``;

export default ShareBox;
