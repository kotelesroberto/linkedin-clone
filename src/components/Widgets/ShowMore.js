import React, { useEffect } from "react";
import styled from "styled-components";

const ShowMore = (props) => {
  return (
    <Container showon={props.showon} textalign={props.textalign}>
      <a onClick={props.onclickevent}>Show more</a>
      <img
        src="/images/down-icon-2.svg"
        alt="Open dropdown"
        className="icon-arrow"
      />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
  cursor: pointer;

  ${(props) =>
    props.showon === "mobile" &&
    `
    display: none;
    
    @media (max-width: 768px) {
      display: flex;
    }
    `};

  ${(props) =>
    props.textalign === "left" &&
    `
    justify-content: flex-start;
    padding-left: 30px;
    `};

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }

  img {
    margin-left: 4px;
    width: 16px;
    height: 16px;
  }
`;

export default ShowMore;
