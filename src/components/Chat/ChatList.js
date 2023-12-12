import React from "react";
import ChatListItem from "./ChatListItem";
import styled from "styled-components";

import { messages } from "../../utils/demoData";
import { getSafeString } from "../../utils/filename";

const ChatList = (props) => {
  const tab = props.tab;
  const group = props.group; // 'focused', 'other'
  const setChatsToOpen = props.setchatstoopen;

  let messagesToShow = messages;

  if (group === "other") {
    messagesToShow = messages.slice(2).reverse();
  }

  return (
    <Container key={`chat-list=${tab}`}>
      {messagesToShow.map((item) => (
        <ChatListItem
          message={item}
          key={`chat-item-${item.msgchain[0].timestamp}-${getSafeString(
            item.name
          )}`}
          setchatstoopen={setChatsToOpen}
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
