/**
 *
 * Component: Activity
 * @desc This component is for showing the user's activity
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";

const ProfileCardActivity = (props) => {
  const profileUid = props.profileuid;
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  return (
    <ProfileCardBox
      title="Activity"
      content={"TODO: add content information here"}
      panel="activity"
      iseditmode={isEditMode}
    ></ProfileCardBox>
  );
};

export default ProfileCardActivity;
