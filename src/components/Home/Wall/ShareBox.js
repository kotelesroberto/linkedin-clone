import styled from "styled-components";
import React from "react";

import { UserAvatarPhoto } from "../../Common/User";
import { Card, CardContainer } from "../../Common/Cards";
import { ButtonSharePost } from "../../Common/Buttons";
import { IconButtonRow } from "../../Common/Icons";
import { connect } from "react-redux";

const ShareBox = (props) => {
  return (
    <ShareBoxContainer>
      <CardContainer>
        <ShareBoxTop>
          <UserAvatarPhoto>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt={props.user.displayName} />
            ) : (
              <img src="/images/avatar.svg" alt="User avatar" />
            )}
          </UserAvatarPhoto>
          <ButtonSharePost>Start a post</ButtonSharePost>
        </ShareBoxTop>
        <ShareBoxButtons>
          <button onClick={props.handleClick}>
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

const ShareBoxButtons = styled(IconButtonRow)`
  span {
    pointer-events: none;
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareBox);
