import React, { useState } from "react";
import styled from "styled-components";
import * as variables from "../_library/Variables";

const DiscoverMore = (props) => {
  const [firsTitle, setFirsTitle] = useState(true);

  const onClick = (e) => {
    props.onclick(e);
    setFirsTitle(!firsTitle);
  };

  return (
    <Container>
      <a href={props.link} aria-label={props.title} onClick={(e) => onClick(e)}>
        {props.title[firsTitle ? 0 : 1]}
      </a>
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${variables.colors.colorFont};
  text-align: center;
  padding: 2px 8px;
  margin-top: 8px;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -12px;
  border-top: 1px solid ${variables.colors.border2};
  background-color: ${variables.colors.listItemBackground};
  position: relative;
  z-index: 100;

  &:hover {
    background-color: ${variables.colors.listItemBackgroundHover};
  }

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default DiscoverMore;
