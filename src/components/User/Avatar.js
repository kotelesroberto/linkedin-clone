import React from "react";
import {
  UserAvatarBox,
  UserAvatarPhoto,
  UserAvatarDetails,
  UserName,
  UserPosition,
} from "../_library/User";

import { ButtonFollow } from "../_library/Buttons";

const Avatar = (props) => {
  return (
    <UserAvatarBox className={props.classname ? props.classname : ""}>
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
