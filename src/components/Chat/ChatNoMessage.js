
/**
 * No message to show
 * Component: Chat
 * 2023, Robert Koteles
 */



import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../_library/Buttons";

const ChatNoMessage = () => {
  return (
    <Container>
      <h2>No messages yet</h2>
      <img src="/images/world-wide-web.svg" alt="No message" />
      <p>Reach out and start a conversation to advance your career</p>
      <ButtonPrimary>Send a message</ButtonPrimary>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 30px;

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  button {
    margin: 0 auto;
  }
`;

export default ChatNoMessage;
