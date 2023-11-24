import React from "react";
import styled from "styled-components";
import {
  UserAvatarBox,
  UserAvatarPhoto,
  UserAvatarDetails,
  UserName,
  UserPosition,
} from "../Common/User";

import { ButtonFollow } from "../Common/Buttons";

const Avatar = (props) => {
  return (
    <UserAvatarBox>
      <UserAvatarPhoto>
        <img src={props.user.avatar} alt={props.user.name} />
      </UserAvatarPhoto>
      <UserAvatarDetails>
        <UserName>
          <a href={props.user.link}>{props.user.name}</a>
        </UserName>
        <UserPosition>{props.user.position}</UserPosition>
        <ButtonFollow data-link={props.user.link}>Connect</ButtonFollow>
      </UserAvatarDetails>
    </UserAvatarBox>
  );
};

export default Avatar;
