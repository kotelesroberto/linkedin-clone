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

  img {
    width: 100%;
    height: auto;
    border: 2px solid #fff;
    border-radius: 50%;
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
    z-index: 2;
  }
`;

export default ProfileCardUserPhoto;
