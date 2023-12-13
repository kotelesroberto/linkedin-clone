import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ChatWriteMessage from "./ChatWriteMessage";
import ChatPartner from "./ChatPartner";

const ChatMessage = (props) => {
  const message = props.message;
  const [chatFlow, setChatFlow] = useState([]);
  const msgWrapperRef = useRef();

  // load message
  useEffect(() => {
    setChatFlow(message.msgchain);
  }, [message.id]);

  // always scroll to the latest message
  useEffect(() => {
    msgWrapperRef.current.scrollTop = msgWrapperRef.current.scrollHeight;
  }, [chatFlow]);

  return (
    <Container>
      <ChatMessageWrapper ref={msgWrapperRef}>
        <ChatPartner
          part={"me"}
          key={`chat-${message.id}-partner-demo-message`}
        >
          <span style={{ color: "red" }}>
            Any conversation added here <strong>won't be saved</strong> in this DEMO! Oh, and the agent won't answer... ;)
          </span>
        </ChatPartner>

        {!!chatFlow &&
          chatFlow.map((item, index) => (
            <ChatPartner
              author={{ photo: message.photo, name: message.name }}
              part={!!item.part && item.part}
              key={`chat-${message.id}-partner-${index}`}
            >
              {item && item.message}
            </ChatPartner>
          ))}
      </ChatMessageWrapper>
      <ChatWriteMessage chatflow={chatFlow} setchatflow={setChatFlow} />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  transition: max-height 0.3s, min-height 0.3s;
  max-height: 60vh;
  min-height: 400px;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;

  .closed & {
    max-height: 0;
    min-height: 0;
    padding: 0 12px;
  }
`;

const ChatMessageWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export default ChatMessage;
