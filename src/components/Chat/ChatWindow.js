import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import styled from "styled-components";
import { messages } from "../../utils/demoData";

import * as variables from "../_library/Variables";

const ChatWindow = (props) => {
  const messageID = props.messageID;
  const closeEvent = props.closeevent;
  const [chatOpen, setChatOpen] = useState(true);
  const [message, setMessage] = useState("");

  // after loading this component the proper message should be selected
  useEffect(() => {
    const selectedMessage = messages.filter((item) => item.id === messageID);
    setMessage((prev) => selectedMessage[0]);
  }, []);

  // when clicking on the header of the chat window, it should toggle the window
  const clickContainer = (e) => {
    setChatOpen(!chatOpen);
  };

  return (
    <ChatPanel
      className={chatOpen ? "open" : "closed"}
      key={`chat-message-${messageID}`}
    >
      <ChatHeader
        message={message}
        type="message"
        onclick={(e) => clickContainer(e)}
        closeevent={closeEvent}
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
  z-index: 50;

  @media (max-width: 768px) {
    width: calc(100% - 24px);
  }

  & > * {
    overflow: hidden;
  }

  & + .main-chat {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export default ChatWindow;
