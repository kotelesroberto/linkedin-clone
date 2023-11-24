import styled from "styled-components";
import * as variables from "./Variables";

export const ButtonPrimary = styled.button`
  width: 100%;
  height: min-content;
  min-height: 48px;
  border-radius: 24px;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  border: 1px solid rgba(0, 0, 0, 0.75);
  cursor: pointer;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &:hover {
    box-shadow: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: rgb(10, 102, 194);
  border-color: rgb(10, 102, 194);
  color: #fff;

  &:hover {
    background-color: rgb(0, 65, 130);
    border-color: rgb(0, 65, 130);
  }
`;

export const ButtonWithImage = styled(ButtonPrimary)`
  min-height: 38px;
  border-color: rgb(218, 220, 224);
  font-weight: 400;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: transparent;
  font-size: 14px;

  &:hover {
    background: rgba(66, 133, 244, 0.04);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  > img {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
`;

export const ButtonJoin = styled.a`
  font-size: 16px;
  padding: 12px 24px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  margin-right: 12px;
  border-radius: 24px;
  transition-duration: 150ms;
  font-weight: 700;

  &:hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ButtonSignIn = styled(ButtonSecondary)`
  width: auto;
  background-color: rgba(0, 0, 0, 0);
  color: ${variables.colors.blue};
  border-color: rgb(10, 102, 194);
  margin-bottom: 0;

  &:hover {
    background-color: rgba(112, 181, 249, 0.1);
    color: ${variables.colors.blue};
    text-decoration: none;
  }
`;

export const ButtonSharePost = styled.button`
  min-height: 44px;
  width: 100%;
  height: min-content;
  position: relative;
  border-radius: 22px;
  padding: 10px 14px;
  font-size: 14px;
  line-height: 1em;
  font-weight: 700;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 0px 1px inset;
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ButtonFollow = styled.button`
  width: auto;
  height: min-content;
  position: relative;
  border-radius: 16px;
  padding: 6px 16px;
  font-size: 16px;
  line-height: 1em;
  font-weight: 700;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 0px 1px inset;
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:before {
    content: "";
    display: block;
    background: url("./images/widget-icon.svg") center no-repeat;
    background-size: 100%;
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
