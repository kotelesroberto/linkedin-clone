import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const ChatWriteMessage = () => {
  return (
    <Container>
      <Search>
        <div>
          <input type="text" placeholder="Search" />
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

      @media (max-width: 1024px) {
        display: none;
      }
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FilterIcon = styled(SearchIcon)`
  left: initial;
  right: 10px;
`;

export default ChatWriteMessage;
