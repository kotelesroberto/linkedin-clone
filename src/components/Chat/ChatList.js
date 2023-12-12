import React from "react";
import ChatListItem from "./ChatListItem";
import styled from "styled-components";

import { messages } from "../../utils/demoData";
import { getSafeString } from "../../utils/filename";

const ChatList = (props) => {
  const tab = props.tab;

  return (
    <Container key={`chat-list=${tab}`}>
      {messages.map((item) => (
        <ChatListItem
          message={item}
          key={`chat-item-${item.timestamp}-${getSafeString(item.name)}`}
        />
      ))}
    </Container>
  );
};
const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
  max-height: min(500px, 80vh);
`;

export default ChatList;
