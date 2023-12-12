import React from "react";
import styled from "styled-components";
import { UserPhoto } from "../Common/User";
import * as variables from "../Common/Variables";
import { connect } from "react-redux";
import {
  IconButtonRow,
  IconGlobe,
  ButtonActionContainer,
  ButtonAction,
} from "../Common/Icons";

const ChatHeader = (props) => {
  const onClick = props.onclick;
  const sender = props.sender;
  const message = props.message;
  const type = props.type;

  console.log({ sender });
  let displayName = "";
  let photoUrl = "/images/avatar.svg";
  let userStatus = "opentowork";

  if (message) {
    // opening a message
    displayName = message.name;
    photoUrl = message.photo;
  } else {
    // main chat panel
    displayName = props.user && props.user.displayName;
    photoUrl = props.user && props.user.photoURL && props.user.photoURL;
  }

  return (
    <Container onClick={(e) => onClick(e)}>
      <UserPhoto status={userStatus}>
        <img src={photoUrl} alt={displayName} />
        <UserIsOnline />
      </UserPhoto>
      <RightCol>
        <span>Messaging</span>

        {type == "panel" && (
          <FeedItemActions>
            <FeedItemAction>
              <img
                src="/images/ellipsis.svg"
                alt="Open dropdown"
                className="icon-arrow"
              />
            </FeedItemAction>
            <FeedItemAction>
              <img
                src="/images/edit-icon.svg"
                alt="New message"
                className="icon-edit"
              />
            </FeedItemAction>
            <FeedItemAction>
              <img
                src="/images/arrow-down-small.svg"
                alt="Show/Hide Chat"
                className="hide-icon"
              />
            </FeedItemAction>
          </FeedItemActions>
        )}
        {type == "message" && (
          <FeedItemActions>
            <FeedItemAction>
              <img
                src="/images/ellipsis.svg"
                alt="Open dropdown"
                className="icon-arrow"
              />
            </FeedItemAction>
            <FeedItemAction>
              <img
                src="/images/icon-maximize.svg"
                alt="New message"
                className="icon-maximize"
              />
            </FeedItemAction>
            <FeedItemAction>
              <img
                src="/images/icon-close.svg"
                alt="Close Chat"
                className="icon-close"
              />
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
  }
`;

const UserIsOnline = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  background: ${variables.colorDefinitions.green};
  border-radius: 50%;
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
    padding-left: 8px;
    font-weight: 700;
  }
`;

const FeedItemActions = styled(ButtonActionContainer)`
  margin-left: auto;
`;

const FeedItemAction = styled(ButtonAction)`
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

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
