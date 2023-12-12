import React from "react";
import styled from "styled-components";
import ChatWriteMessage from "./ChatWriteMessage";
import ChatPartner from "./ChatPartner";

const ChatMessage = (props) => {
  const message = props.message;

  return (
    <Container>
      <ChatMessageWrapper>
        <ChatPartner>{message.message}</ChatPartner>
        <ChatPartner part="me">{message.message}</ChatPartner>
      </ChatMessageWrapper>
      <ChatWriteMessage />
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
