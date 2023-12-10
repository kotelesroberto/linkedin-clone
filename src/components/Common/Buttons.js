import styled from "styled-components";
import * as variables from "./Variables";

export const ButtonPrimary = styled.button`
  width: auto;
  height: min-content;
  min-height: 48px;
  border-radius: 24px;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  border: 1px solid ${variables.colors.maincolor11};
  cursor: pointer;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &:hover {
    box-shadow: none;
    outline: none;
    background-color: ${variables.colors.maincolor12};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${variables.colors.maincolor8};
  border-color: ${variables.colors.maincolor8};
  color: ${variables.colors.white};
  white-space: nowrap;

  &:hover {
    background-color: ${variables.colors.maincolor9};
    border-color: ${variables.colors.maincolor9};
  }
`;

export const ButtonTertiary = styled(ButtonPrimary)`
  width: auto;
  background-color: ${variables.colors.white};
  border-color: ${variables.colors.maincolor1};
  color: ${variables.colors.maincolor1};

  white-space: nowrap;

  &:hover {
  }
`;

export const ButtonFourth = styled(ButtonPrimary)`
  width: auto;
  background-color: ${variables.colors.white};
  color: ${variables.colors.maincolor3};
  white-space: nowrap;

  &:hover {
  }
`;

export const ButtonWithImage = styled(ButtonPrimary)`
  min-height: 38px;
  border-color: ${variables.colors.maincolor10};
  font-weight: 400;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: transparent;
  font-size: 14px;

  &:hover {
    background: ${variables.colors.maincolor18};
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
  color: ${variables.colors.maincolor11};
  cursor: pointer;
  margin-right: 12px;
  border-radius: 24px;
  transition-duration: 150ms;
  font-weight: 700;

  &:hover {
    text-decoration: none;
    color: ${variables.colors.maincolor3er};
    background-color: ${variables.colors.maincolor12};
  }
`;

export const ButtonSignIn = styled(ButtonSecondary)`
  width: auto;
  background-color: transparent;
  color: ${variables.colors.maincolor1};
  border-color: ${variables.colors.maincolor8};
  margin-bottom: 0;

  &:hover {
    background-color: ${variables.colors.maincolor19};
    color: ${variables.colors.maincolor1};
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
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${variables.colors.white};
  color: ${variables.colors.maincolor3};
  border: 1px solid ${variables.colors.maincolor16};
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: ${variables.colors.maincolor11} 0px 0px 0px 1px inset;
    outline: none;
    background-color: ${variables.colors.maincolor12};
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
  color: ${variables.colors.maincolor3};
  border: 1px solid ${variables.colors.maincolor3};
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: ${variables.colors.maincolor11} 0px 0px 0px 1px inset;
    outline: none;
    background-color: ${variables.colors.maincolor12};
  }

  &:before {
    content: "";
    display: block;
    background: url("/images/widget-icon.svg") center no-repeat;
    background-size: 100%;
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

export const ButtonEmoji = styled(ButtonFollow)`
  &:before {
    background: url("/images/emoji.svg") center no-repeat;
    background-size: 100%;
    margin-right: 0px;
  }
`;
export const EditButton = styled(ButtonFollow)`
  &:before {
    background: url("/images/edit-icon.svg") center no-repeat;
    background-size: 100%;
    margin-right: 0px;
  }
`;

export const ButtonNewPost = styled(ButtonSignIn)`
  min-height: initial;
  background-color: ${variables.colors.maincolor1};
  color: ${variables.colors.white};
  border-color: ${variables.colors.maincolor8};
  margin: 0 auto -24px auto;
  padding-top: 6px;
  padding-bottom: 6px;
  box-shadow: ${variables.colors.maincolor14} 0px 0px 0px 1px,
    ${variables.colors.maincolor15} 0px 4px 4px 0px;
  z-index: 5;
  position: relative;

  &:hover {
    box-shadow: ${variables.colors.maincolor14} 0px 0px 0px 1px,
      ${variables.colors.maincolor15} 0px 4px 4px 0px;
    background-color: ${variables.colors.maincolor2};
    color: ${variables.colors.white};
    text-decoration: none;
  }

  &:before {
    content: "";
    display: block;
    background: url("/images/arrow-up-white.svg") center no-repeat;
    background-size: 100%;
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

export const SocialCountButton = styled.button`
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  padding: 4px;

  &:hover {
    background-color: #f2f2f2;
  }
`;
