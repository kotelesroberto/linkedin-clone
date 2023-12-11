import React from "react";

const EditProfileData = (props) => {
  const panelToEdit = props.panel.replace("edit-profile--", "");

  return <div>EditProfileData: {panelToEdit}</div>;
};

export default EditProfileData;
