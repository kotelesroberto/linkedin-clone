import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  getUserProfile,
  createUserExtraEntry,
} from "../../utils/userManagement";

const EditProfileData = (props) => {
  const panelToEdit = props.panel.replace("edit-profile--", "");
  const user = props.user;

  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {
    if (user && user.uid) {
      getUserProfile(user.uid, true)
        .then((result) => {
          console.log("getUserProfile EDIT RESULT", result);
          setProfileUser({ ...result[0] });

          if (!result.hasExtra) {
            createUserExtraEntry(user.uid);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [props.user]);

  useEffect(() => {
    switch (panelToEdit) {
      case "about":
        // TODO: read data from database

        break;

      default:
        break;
    }
  }, []);

  return <div>EditProfileData: {panelToEdit}</div>;
};

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  console.log({ state });
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(EditProfileData);
