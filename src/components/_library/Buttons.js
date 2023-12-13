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
  border: 1px solid ${variables.colors.buttonPrimaryBorder};
  cursor: pointer;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: ${variables.colors.buttonPrimaryBackground};

  &:hover {
    box-shadow: none;
    outline: none;
    background-color: ${variables.colors.buttonPrimaryBackgroundHover};
    color: ${variables.colors.buttonPrimaryHover};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${variables.colors.buttonSecondaryBackground};
  border-color: ${variables.colors.buttonSecondaryBorder};
  color: ${variables.colors.buttonSecondaryFont};
  white-space: nowrap;

  &:hover {
    background-color: ${variables.colors.buttonSecondaryBackgroundHover};
    border-color: ${variables.colors.buttonSecondaryBorderHover};
  }
`;

export const ButtonTertiary = styled(ButtonPrimary)`
  width: auto;
  background-color: ${variables.colors.buttonTertiaryBackground};
  border-color: ${variables.colors.buttonTertiaryBorder};
  color: ${variables.colors.buttonTertiaryFont};
  white-space: nowrap;
`;

export const ButtonFourth = styled(ButtonPrimary)`
  width: auto;
  background-color: ${variables.colors.buttonFourthBackground};
  color: ${variables.colors.buttonFourthFont};
  white-space: nowrap;
`;

export const ButtonWithImage = styled(ButtonPrimary)`
  min-height: 38px;
  border-color: ${variables.colors.buttonWithImageBorder};
  font-weight: 400;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: transparent;
  font-size: 14px;

  &:hover {
    color: ${variables.colors.colorFontHover};
    background: ${variables.colors.buttonWithImageBackgroundHover};
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
  color: ${variables.colors.buttonJoinFont};
  cursor: pointer;
  margin-right: 12px;
  border-radius: 24px;
  transition-duration: 150ms;
  font-weight: 700;

  &:hover {
    text-decoration: none;
    color: ${variables.colors.buttonJoinFontHover};
    background-color: ${variables.colors.buttonJoinBackgroundHover};
  }
`;

export const ButtonSignIn = styled(ButtonSecondary)`
  width: auto;
  background-color: ${variables.colors.buttonSignInBackground};
  color: ${variables.colors.buttonSignInFont};
  border-color: ${variables.colors.buttonSignInBorder};
  margin-bottom: 0;

  &:hover {
    background-color: ${variables.colors.buttonSignInBackgroundHover};
    color: ${variables.colors.buttonSignInFontHover};
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
  background-color: ${variables.colors.buttonSharePostBackground};
  color: ${variables.colors.buttonSharePostFont};
  border: 1px solid ${variables.colors.buttonSharePostBorder};
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: ${variables.colors.buttonSharePostBoxShadowHover} 0px 0px 0px
      1px inset;
    outline: none;
    background-color: ${variables.colors.buttonSharePostBackgroundHover};
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
  color: ${variables.colors.buttonFollowFont};
  border: 1px solid ${variables.colors.buttonFollowBorder};
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: ${variables.colors.buttonFollowBoxShadowHover} 0px 0px 0px 1px
      inset;
    outline: none;
    background-color: ${variables.colors.buttonFollowBackgroundHover};
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
  background-color: ${variables.colors.buttonSecondaryBackground};
  color: ${variables.colors.buttonSecondaryFont};
  border-color: ${variables.colors.buttonSecondaryBorder};
  margin: 0 auto -24px auto;
  padding-top: 6px;
  padding-bottom: 6px;
  box-shadow: ${variables.colors.buttonNewPostBoxShadow};
  z-index: 5;
  position: relative;

  &:hover {
    box-shadow: ${variables.colors.buttonNewPostBoxShadowHover};
    background-color: ${variables.colors.buttonSecondaryBackgroundHover};
    color: ${variables.colors.buttonSecondaryFont};
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
  background-color: ${variables.colors.socialCountButtonBackground};
  padding: 4px;

  &:hover {
    background-color: ${variables.colors.socialCountButtonBackgroundHover};
  }
`;
