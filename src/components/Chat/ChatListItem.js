import React, { useEffect } from "react";
import styled from "styled-components";
import { UserPhoto } from "../_library/User";
import * as variables from "../_library/Variables";
import { getSafeString } from "../../utils/filename";
import Moment from "react-moment";

const ChatListItem = (props) => {
  const message = props.message;
  const setChatsToOpen = props.setchatstoopen;

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
  }, []);

  return (
    <Container>
      <MessageWrapper
        onClick={(e) =>
          setChatsToOpen((prevState) => [...prevState, message.id])
        }
      >
        <MessagePhoto
          status=""
          isavailable={"true"}
          key={`chat-item-photo-${
            message.msgchain[0].timestamp
          }-${getSafeString(message.name)}`}
        >
          <img src={message.photo} alt={message.name} />

          {!!Math.round(Math.random()) && <UserIsOnline />}
        </MessagePhoto>
        <MessageContent>
          <h5>{message.name}</h5>
          <span>{message.msgchain[0].message}</span>
        </MessageContent>
        <MessageDate>
          <Moment fromNow ago>
            {new Date(message.msgchain[0].timestamp)}
          </Moment>
        </MessageDate>
      </MessageWrapper>
    </Container>
  );
};
const Container = styled.li``;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: ${variables.colors.listItemBackground};
  cursor: pointer;
  padding: 12px;

  &:hover {
    background-color: ${variables.colors.listItemBackgroundHover};
  }
`;

const MessagePhoto = styled(UserPhoto)`
  width: 48px;
  height: 48px;
  margin: 0 12px 0 0;
  background-color: transparent;
  border: none;

  img {
    border-radius: 50%;
  }

  &:hover {
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${variables.colorDefinitions.green};
      z-index: 12;
      border-radius: 50%;
    }
    &:after {
      content: '';
      width: 20px;
      height: 20px;
      border: 1px solid ${variables.colorDefinitions.border};
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      z-index: 13;
    }
  }
`;
const MessageContent = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid ${variables.colors.border};

  span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`;
const MessageDate = styled.div`
  width: 60px;
  font-size: 12px;
  text-align: right;
  color: ${variables.colors.colorFontSoft};
  border-bottom: 1px solid ${variables.colors.border};
  flex-shrink: 0;
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

export default ChatListItem;
