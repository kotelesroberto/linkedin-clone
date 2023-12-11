/**
 *
 * Component: Interests
 * @desc This component is for showing the user's interests
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

const ProfileCardInterests = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const profileUid = props.profileuid;

  return (
    <ProfileCardBox
      title="Interests"
      content={"TODO: add content information here"}
      panel="interests"
      iseditmode={isEditMode}
    ></ProfileCardBox>
  );
};

export default ProfileCardInterests;
