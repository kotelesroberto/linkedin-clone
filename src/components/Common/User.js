import styled from "styled-components";

export const UserAvatarList = styled.div`
  padding: 0 12px;
`;

export const UserAvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);
  padding: 12px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const UserAvatarPhoto = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
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

  &:after {
    ${(props) =>
      props.status &&
      props.status === "opentowork" &&
      `
        content: "";
        display: block;
        background: url("./upload/opentowork.png") center no-repeat;
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
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 8px;
`;