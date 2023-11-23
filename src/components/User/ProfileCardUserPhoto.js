import React from "react";
import styled from "styled-components";

const ProfileCardUserPhoto = () => {
  return (
    <UserPhoto>
      <img src="./upload/userphoto.jpg" alt="Robert Koteles" />
    </UserPhoto>
  );
};

const UserPhoto = styled.div`
  width: 72px;
  height: 72px;
  margin: -38px auto 1.2rem;
  position: relative;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;

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
  &:after {
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
  }
`;

export default ProfileCardUserPhoto;
