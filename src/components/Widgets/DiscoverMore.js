import React from "react";
import styled from "styled-components";

const DiscoverMore = (props) => {
  return (
    <Container>
      <a href={props.link}>{props.title}</a>
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 2px 8px;
  margin-top: 8px;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -12px;
  border-top: 1px solid rgba(140, 140, 140, 0.2);

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default DiscoverMore;
