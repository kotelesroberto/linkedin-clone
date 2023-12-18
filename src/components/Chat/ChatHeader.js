import React from "react";
import styled from "styled-components";
import { UserPhoto } from "../_library/User";
import * as variables from "../_library/Variables";
import { connect } from "react-redux";
import { ButtonActionContainer, ButtonAction } from "../_library/Icons";

const ChatHeader = (props) => {
  const closeEvent = props.closeevent;
  const onClick = props.onclick;
  const message = props.message;
  const type = props.type;

  let displayName = "";
  let photoUrl = "/images/avatar.svg";
  let userStatus = "opentowork";
  let chatTitle = "Messaging";

  if (message) {
    // opening a valid message
    displayName = message.name;
    photoUrl = message.photo;
    chatTitle = message.name;
  } else {
    // main chat panel
    displayName = props.user && props.user.displayName;
    photoUrl =
      props.user && props.user.photoURL
        ? props.user.photoURL
        : "/images/avatar.svg";
  }

  return (
    <Container>
      <UserPhoto status={userStatus}>
        <img src={photoUrl} alt={displayName} />
        <UserIsOnline />
      </UserPhoto>
      <RightCol>
        <span onClick={(e) => onClick(e)}>{chatTitle}</span>

        {type === "panel" && (
          <FeedItemActions className={type}>
            <FeedItemAction className="icon-arrow">
              <img
                src="/images/ellipsis.svg"
                alt="Open dropdown"
                title="DEMO"
              />
            </FeedItemAction>
            <FeedItemAction className="icon-edit">
              <img src="/images/edit-icon.svg" alt="New message" title="DEMO" />
            </FeedItemAction>
            <FeedItemAction className="hide-icon" onClick={(e) => onClick(e)}>
              <img src="/images/arrow-down-small.svg" alt="Show/Hide Chat" />
            </FeedItemAction>
          </FeedItemActions>
        )}
        {type === "message" && (
          <FeedItemActions className={type}>
            <FeedItemAction className="icon-arrow">
              <img
                src="/images/ellipsis.svg"
                alt="Message options"
                title="DEMO"
              />
            </FeedItemAction>
            <FeedItemAction className="icon-maximize">
              <img
                src="/images/icon-maximize.svg"
                alt="Maximize"
                title="DEMO"
              />
            </FeedItemAction>
            <FeedItemAction
              className="icon-close"
              onClick={(e) => closeEvent(e, message.id)}
            >
              <img src="/images/icon-close.svg" alt="Close Chat" />
            </FeedItemAction>
          </FeedItemActions>
        )}
      </RightCol>
    </Container>
  );
};

const Container = styled.div`
  border-radius: ${variables.borderRadius};
  padding: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  cursor: pointer;

  ${UserPhoto} {
    margin: 0 4px 0 0;
    width: 32px;
    height: 32px;
    align-self: center;
  }
`;

const UserIsOnline = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  background: ${variables.colorDefinitions.green};
  border-radius: 50%;
  border: 1px solid ${variables.colorDefinitions.black};
  position: absolute;
  right: -10px;
  bottom: 0;
  z-index: 10;
`;

const RightCol = styled.div`
  padding-left: 8px;
  position: relative;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  span {
    display: block;
    width: 100%;
    padding: 12px 8px 12px 8px;
    font-weight: 700;
  }
`;

const FeedItemActions = styled(ButtonActionContainer)`
  margin-left: auto;

  &.panel {
    @media (max-width: 768px) {
    }
  }
  &.message {
    @media (max-width: 768px) {
    }
  }
`;

const FeedItemAction = styled(ButtonAction)`
  transition: transform 0.3s;

  .panel & {
    @media (max-width: 768px) {
      display: none;
    }
    &.hide-icon {
      @media (max-width: 768px) {
        display: block;
      }
    }
  }
  .message & {
    @media (max-width: 768px) {
    }
  }

  .open & {
    transform: rotate(180deg);
  }

  img {
    width: 16px;
    height: 16px;

    &.hide-icon {
      .closed & {
        transform: rotate(180deg);
      }
    }
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ChatHeader);
