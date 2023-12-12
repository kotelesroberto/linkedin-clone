import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as variables from "../../_library/Variables";
import { Card } from "../../_library/Cards";

import {
  ButtonSecondary,
  ButtonTertiary,
  ButtonFourth,
} from "../../_library/Buttons";

const ProfileCardButtons = (props) => {
  const user = props.user;
  
  const navigate = useNavigate();

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  return (
    <Container>
      <Item
        onClick={(e) => {
          e.target.classList.toggle("open");
        }}
      >
        <ButtonSecondary>Open to</ButtonSecondary>
        <Panel>
          <PanelItem onClick={(e) => doDemo(e)}>
            <PanelItemLabel>Hiring</PanelItemLabel>
            <PanelItemContent>
              Share that you're hiring and attract qualified candidates
            </PanelItemContent>
          </PanelItem>
          <PanelItem onClick={(e) => doDemo(e)}>
            <PanelItemLabel>Providing services</PanelItemLabel>
            <PanelItemContent>
              Showcase services you offer so new clients can discover you
            </PanelItemContent>
          </PanelItem>
        </Panel>
      </Item>
      <Item>
        <ButtonTertiary>Add profile section</ButtonTertiary>
      </Item>
      <Item
        onClick={(e) => {
          e.target.classList.toggle("open");
        }}
      >
        <ButtonFourth>More</ButtonFourth>

        <Panel>
          <PanelMenu>
            <PanelMenuItem>
              <a href="#" onClick={(e) => doDemo(e)}>
                <img src="/images/icon-share.svg" alt="Send" />
                <span>Send profile in a message</span>
              </a>
            </PanelMenuItem>
            <PanelMenuItem>
              <a href="#" onClick={(e) => doDemo(e)}>
                <img src="/images/icon-download.svg" alt="Save to PDF" />
                <span>Save to PDF</span>
              </a>
            </PanelMenuItem>
            <PanelMenuItem>
              <a href="#" onClick={(e) => doDemo(e)}>
                <img src="/images/icon-blank-page.svg" alt="Build a resume" />
                <span>Build a resume</span>
              </a>
            </PanelMenuItem>
            <PanelMenuItem>
              <a href="#" onClick={(e) => doDemo(e)}>
                <img src="/images/icon-info.svg" alt="About this profile" />
                <span>About this profile</span>
              </a>
            </PanelMenuItem>
          </PanelMenu>
        </Panel>
      </Item>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 12px 24px;
  list-style: none;
  position: relative;

  button {
    padding: 6px 16px;
    min-height: initial;

    &.open {
      & + div {
        display: block;
      }
    }
  }
`;

const Item = styled.li`
  position: relative;
  margin-right: 12px;

  @media (max-width: 580px) {
    position: initial;
  }
`;

const Panel = styled(Card)`
  width: 300px;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 0;
  margin: 0;
  z-index: 1000;

  @media (max-width: 580px) {
    width: 100%;
  }
`;

const PanelItem = styled.div`
  padding: 12px;
  cursor: pointer;
  background-color: ${variables.colors.listItemBackground};

  &:hover {
    background-color: ${variables.colors.listItemBackgroundHover};
  }
`;

const PanelItemLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const PanelItemContent = styled.div`
  font-size: 14px;
  color: ${variables.colors.colorFont};
`;

const PanelMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PanelMenuItem = styled.li`
  padding: 12px;
  cursor: pointer;
  background-color: ${variables.colors.listItemBackground};

  &:hover {
    background-color: ${variables.colors.listItemBackgroundHover};
  }

  a {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  img {
    margin-right: 12px;
  }
  span {
  }
`;

export default ProfileCardButtons;
