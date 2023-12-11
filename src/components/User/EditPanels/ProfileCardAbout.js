import React from "react";

function ProfileCardAbout(props) {
  const user = props.user;
  
  const onChange = props.onchange;

  return (
    <>
      <textarea
        name=""
        id="postMessage"
        cols="30"
        rows="12"
        onChange={(e) => onChange(e, true, "about")}
        value={user && user.extra && user.extra.about}
        autoFocus={true}
      ></textarea>
    </>
  );
}

export default ProfileCardAbout;
