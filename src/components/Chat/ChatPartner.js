import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as variables from "../_library/Variables";

const ChatPartner = (props) => {
  // which member of the chat is talking?
  const part = props.part;
  const author = props.author;

  let avatar = author && author.photo ? author.photo : "/images/avatar.svg";
  let displayName = author && author.name ? author.name : "Chat partner";

  if (part === "me") {
    avatar = props.user && props.user.photoURL && props.user.photoURL;
    displayName = props.user && props.user.displayName;
  }

  return (
    <Container className={part === "me" ? "odd" : "even"}>
      <PartnerAvatar>
        <img src={avatar} alt={displayName} />
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
  border-bottom: 1px solid ${variables.colors.border};

  &:last-child {
    border: none;
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

  img {
    width: 100%;
    height: auto;
    display: block;
  }

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

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ChatPartner);
