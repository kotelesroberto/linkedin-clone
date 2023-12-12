import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatSearchBox from "./ChatSearchBox";
import ChatContent from "./ChatContent";
import DemoChat from "./DemoChat";
import styled from "styled-components";

import * as variables from "../Common/Variables";

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(true);

  const clickContainer = (e) => {
    setChatOpen(!chatOpen);
  };

  return (
    <Container>
      <DemoChat />

      <ChatPanel className={chatOpen ? "open" : "closed"}>
        <ChatHeader type="panel" onclick={(e) => clickContainer(e)} />
        <ChatSearchBox />
        <ChatContent />
      </ChatPanel>
    </Container>
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
`;

const ChatPanel = styled.div`
  position: relative;
  width: 300px;
  background-color: ${variables.colors.white};
  box-shadow: ${variables.colors.boxShadow4};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-right: 12px;

  & > * {
    overflow: hidden;
  }
`;

export default Chat;
