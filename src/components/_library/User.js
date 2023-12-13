import styled from "styled-components";
import * as variables from "./Variables";

export const UserAvatarList = styled.div`
  padding: 0 12px;
  &.col-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const UserAvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: ${variables.colors.colorFont};
  border-bottom: 1px solid ${variables.colors.border2};
  padding: 12px 0;
  overflow: hidden;
  opacity: 1;
  transition: max-height 0.3s, opacity 0.1s, padding 0.1s;

  .col-2 & {
    width: 50%;
  }

  &:last-child {
    border-bottom: none;
  }

  &.closed {
    max-height: 0;
    opacity: 0;
    padding: 0;
    border-bottom: none;
  }
`;

export const UserAvatarPhoto = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  background-color: ${variables.colors.white};
  border: 2px solid ${variables.colors.white};

  margin-right: 8px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    border-radius: 50%;
    overflow: hidden;
  }

  &:before {
    content: "";
    display: block;
    background: url("./images/photo.svg") center no-repeat;
    background-size: 60%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
`;

export const UserAvatarDetails = styled.div``;

export const UserPhoto = styled(UserAvatarPhoto)`
  width: 72px;
  height: 72px;
  margin: -38px auto 1.2rem;

  &.big {
    width: 152px;
    height: 152px;
    margin-left: 2.4rem;
    cursor: pointer;
  }

  &:after {
    ${(props) =>
      props.status &&
      props.status === "opentowork" &&
      `
        content: "";
        display: block;
        background: url("/upload/opentowork.png") center no-repeat;
        background-size: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
      `};
  }
`;

export const UserName = styled.h4``;
export const UserPosition = styled.span`
  display: block;
  font-size: 14px;
  color: ${variables.colors.colorFont};
  margin-bottom: 8px;
`;
