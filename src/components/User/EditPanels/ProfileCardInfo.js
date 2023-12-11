import React from "react";

function ProfileCardInfo(props) {
  const user = props.user;

  const onChange = props.onchange;

  return (
    <>
      <label htmlFor="name">First and last name</label>
      <input
        type="text"
        id="name"
        autoFocus={true}
        value={user && user.displayName}
        onChange={(e) => onChange(e, false, "displayName")}
      />

      <label htmlFor="headline">Headline</label>
      <input
        type="text"
        id="headline"
        value={user && user.shortDescription}
        onChange={(e) => onChange(e, false, "shortDescription")}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={user && user.location}
        onChange={(e) => onChange(e, false, "location")}
      />
    </>
  );
}

export default ProfileCardInfo;
