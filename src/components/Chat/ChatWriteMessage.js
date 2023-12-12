import React, { useState } from "react";
import styled from "styled-components";
import * as variables from "../_library/Variables";

const ChatWriteMessage = (props) => {
  const chatFlow = props.chatflow;
  const setChatFlow = props.setchatflow;
  const [newMessage, setNewMessage] = useState("");

  // if user hits the Enter key, message shoud be sent
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const updatedChatFlow = [...chatFlow];
      updatedChatFlow.push({
        message: newMessage,
        timestamp: Date.now(),
        part: "me",
      });

      // add new message to the message chain/flow
      setChatFlow((chatFlow) => updatedChatFlow);

      // reset new message in the input field
      setNewMessage("");
    }
  };

  return (
    <Container>
      <Search>
        <div>
          <input
            type="text"
            placeholder="Write message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
        <SearchIcon>
          <img src="/images/search-icon.svg" alt="Start search" />
        </SearchIcon>
        <FilterIcon>
          <img src="/images/filter-icon.svg" alt="Filter search" />
        </FilterIcon>
      </Search>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: 300px;
  margin-top: auto;

  .closed & {
    max-height: 0;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    padding: 8px 12px;

    input {
      border: none;
      box-shadow: none;
      background-color: ${variables.colors.headerInputBackground};
      border-radius: 2px;
      color: ${variables.colors.headerInputFont};
      width: 100%;
      height: 34px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border-color: ${variables.colors.border3};
      vertical-align: middle;
      transition: all 0.3s;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterIcon = styled(SearchIcon)`
  left: initial;
  right: 10px;
`;

export default ChatWriteMessage;
