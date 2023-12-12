import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import styled from "styled-components";
import { messages } from "../../utils/demoData";

import * as variables from "../Common/Variables";

const DemoChat = () => {
  const [chatOpen, setChatOpen] = useState(true);

  let demoUser = {
    name: "John",
    photoUrl: "images/demo/avatar-girl.svg",
  };

  const clickContainer = (e) => {
    setChatOpen(!chatOpen);
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage((prev) => randomMessage);
  }, []);

  return (
    <ChatPanel className={chatOpen ? "open" : "closed"}>
      <ChatHeader
        message={message}
        type="message"
        onclick={(e) => clickContainer(e)}
      />
      <ChatMessage message={message} />
    </ChatPanel>
  );
};

const ChatPanel = styled.div`
  position: relative;
  width: 300px;
  background-color: ${variables.colors.white};
  box-shadow: ${variables.colors.boxShadow4};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  transition: max-height 0.3s;
  margin-right: 12px;

  & > * {
    overflow: hidden;
  }
`;

export default DemoChat;
