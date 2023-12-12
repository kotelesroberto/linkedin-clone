import React, { useEffect } from "react";
import styled from "styled-components";
import { UserPhoto } from "../Common/User";
import * as variables from "../Common/Variables";
import { getSafeString } from "../../utils/filename";
import Moment from "react-moment";

const ChatListItem = (props) => {
  const message = props.message;

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
  }, []);

  return (
    <Container>
      <MessageWrapper>
        <MessagePhoto
          status=""
          isavailable={"true"}
          key={`chat-item-photo-${message.timestamp}-${getSafeString(
            message.name
          )}`}
        >
          <img src={message.photo} alt={message.name} />
        </MessagePhoto>
        <MessageContent>
          <h5>{message.name}</h5>
          <span>{message.message}</span>
        </MessageContent>
        <MessageDate>
          <Moment fromNow ago>
            {new Date(message.timestamp)}
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
  overflow: hidden;
  background-color: transparent;
  border: none;

  img {
    border-radius: 50%;
  }
`;
const MessageContent = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid ${variables.colors.border4};

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
  border-bottom: 1px solid ${variables.colors.border4};
  flex-shrink: 0;
`;

export default ChatListItem;
