import React from "react";
import { UserPhoto } from "../Common/User";
import { connect } from "react-redux";

const ProfileCardUserPhoto = (props) => {
  return (
    <UserPhoto status="opentowork">
      <img src={props.user.photoURL} alt={props.user.displayName} />
    </UserPhoto>
  );
};

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ProfileCardUserPhoto);
