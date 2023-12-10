import styled from "styled-components";
import * as variables from "./Variables";

export const IconGlobe = styled.span`
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    background: url("/images/globe-icon.svg") center no-repeat;
    background-size: 100%;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
  }
`;

export const IconButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  span,
  img {
    pointer-events: none;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    padding: 12px 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${variables.colors.colorFont};
    font-size: 14px;
    font-weight: 700;

    &:hover {
      outline: none;
      background-color: ${variables.colors.maincolor12};
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

export const ButtonActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  margin-left: auto;
`;

export const ButtonAction = styled.button`
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: 0;
  background-color: ${variables.colors.white};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${variables.colors.maincolor12};
  }

  img {
    width: 20px;
    height: auto;

    &.close-icon {
      width: 16px;
    }
  }
`;
