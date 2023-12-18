import React, { useEffect, useState } from "react";
import ChatListItem from "./ChatListItem";
import styled from "styled-components";

import { messages } from "../../utils/demoData";
import { getSafeString } from "../../utils/filename";
import ChatNoMessage from "./ChatNoMessage";

const ChatList = (props) => {
  const searchText = props.searchtext;
  const tab = props.tab;
  const group = props.group; // 'focused', 'other'
  const setChatsToOpen = props.setchatstoopen;

  const [messagesToShow, setMessagesToShow] = useState("");

  const addMessagesToState = () => {
    if (group === "focused") {
      setMessagesToShow(messages);
    }
  };

  useEffect(() => {
    addMessagesToState();
  }, []);

  // searcing for specific name for
  useEffect(() => {
    if (messagesToShow) {
      if (!searchText) {
        // restore originally loaded messages
        addMessagesToState();
      } else {
        // filter messages and set into state
        let newMessagesToShow = [...messagesToShow];
        newMessagesToShow = newMessagesToShow.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setMessagesToShow(newMessagesToShow);
      }
    }
  }, [searchText]);

  return (
    <Container key={`chat-list=${tab}`}>
      {messagesToShow &&
        messagesToShow.map((item) => (
          <ChatListItem
            message={item}
            key={`chat-item-${item.msgchain[0].timestamp}-${getSafeString(
              item.name
            )}`}
            setchatstoopen={setChatsToOpen}
          />
        ))}
      {!messagesToShow && <ChatNoMessage />}
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
