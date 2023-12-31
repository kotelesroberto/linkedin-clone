/**
 *
 * Chat component
 * @desc This chat component includes two main parts: main panel including the list of chats AND any opened chat message
 * 2023, Robert Koteles
 */

import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatSearchBox from "./ChatSearchBox";
import ChatContent from "./ChatContent";
import ChatWindow from "./ChatWindow";
import styled from "styled-components";

import * as variables from "../_library/Variables";

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatsToOpen, setChatsToOpen] = useState([]);
  const [searchText, setSearchText] = useState("");
  const windowLocation = window.location.pathname;

  // set status of chat window. It can be opened or closed (just header is visible)
  const clickContainer = (e) => {
    setChatOpen(!chatOpen);
  };

  // function of closing chat window
  const closeChatMessage = (e, messageID) => {
    e.preventDefault();

    let tempChatsToOpen = chatsToOpen.filter((item) => item !== messageID);
    setChatsToOpen([...tempChatsToOpen]);
  };

  const maxChatWindows = 3;

  return (
    <>
      {windowLocation === "/demo" && <Container></Container>}
      {windowLocation !== "/demo" && (
        <Container>
          {!!chatsToOpen.length &&
            chatsToOpen.map((item, index) => {
              if (index < maxChatWindows) {
                return (
                  <ChatWindow
                    messageID={item}
                    closeevent={closeChatMessage}
                    key={`chat-window-${item}`}
                  />
                );
              }
            })}

          <ChatPanel
            className={chatOpen ? "main-chat open" : "main-chat closed"}
          >
            <ChatHeader type="panel" onclick={(e) => clickContainer(e)} />
            <ChatSearchBox
              searchtext={searchText}
              setsearchtext={setSearchText}
            />
            <ChatContent
              setchatstoopen={setChatsToOpen}
              searchtext={searchText}
            />
          </ChatPanel>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 100;
  height: 0px;

  @media (max-width: 768px) {
    bottom: 52px;
  }
`;

const ChatPanel = styled.div`
  position: relative;
  width: 300px;
  background-color: ${variables.colorDefinitions.white};
  box-shadow: ${variables.colors.boxShadow4};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-right: 12px;
  z-index: 4;
  transition: width 0.3s;

  & > * {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    width: 200px;
  }

  &.open {
    @media (max-width: 768px) {
      width: calc(100% - 24px);
      max-width: 80%;
    }
  }
`;

export default Chat;
