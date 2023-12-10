import React from "react";
import styled from "styled-components";
import * as variables from "../Common/Variables";

const ShowMore = (props) => {
  return (
    <Container
      showon={props.showon}
      textalign={props.textalign}
      className={props.classname}
    >
      <a href="#" onClick={props.onclickevent} aria-label="Toggle items">
        Show {props.classname === "closed" ? "more" : "less"}
      </a>

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
  color: ${variables.colors.maincolor3};
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
    background-color: ${variables.colors.maincolor13};
  }

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }

  &.closed {
    img {
      transform: rotate(0deg);
    }
  }

  img {
    margin-left: 4px;
    width: 16px;
    height: 16px;
    transform: rotate(180deg);
  }
`;

export default ShowMore;
