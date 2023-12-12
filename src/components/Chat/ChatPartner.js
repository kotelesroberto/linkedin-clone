import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const ChatPartner = (props) => {
  // which member of the chat is talking?
  const part = props.part;

  const avatar = "/images/avatar.svg";

  return (
    <Container className={part == "me" ? "odd" : "even"}>
      <PartnerAvatar>
        <img src={avatar} alt="" />
      </PartnerAvatar>
      <PartnerMessage>{props.children}</PartnerMessage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  border-bottom: 1px solid ${variables.colors.border4};

  &:last-child {
    border: : none;
  }

  &.odd {
    flex-direction: row-reverse;
  }
  &.even {
  }
`;
const PartnerAvatar = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: auto;

  .odd & {
    margin-left: 12px;
  }
  .even & {
    margin-right: 12px;
  }
`;
const PartnerMessage = styled.div`
  font-size: 14px;
`;

export default ChatPartner;
