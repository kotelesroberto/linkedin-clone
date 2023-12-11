/**
 *
 * Component: Licences and Certifications
 * @desc This component is for showing the user's licences and certifications
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";
import { ButtonFourth } from "../../Common/Buttons";

const ProfileCardCertifications = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const navigate = useNavigate();

  const user = props.user;
  let certifications =
    user && user.extra && user.extra.certifications
      ? user.extra.certifications
      : [];

  const clickShowCertification = (e) => {
    doDemo(e);
  };

  const createShowCredentialButton = (item) => {
    return (
      <ButtonFourth onClick={item.onclick}>
        <span>{item.name}</span>
        <img src={item.icon} alt={item.name} />
      </ButtonFourth>
    );
  };

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  // As we use data with different keys in Friebase from what we need for <ContentListItems /> Component={, we need to transform keys by using a map transformation
  const keyMap = {
    image: "logo", // Image of the certification
    title: "title", // Title
    title2: "organisation", // Organisation
    title3: "issued", // Year of issue
    title4: "credential", // Credential identification
  };

  let userCertifications = [];

  certifications.map((certificationItem) => {
    let userExperienceItem = {};
    for (const key in keyMap) {
      // if the key value is an array, convert into string to display on the page
      if (
        Object.prototype.toString.call(certificationItem[keyMap[key]]) ===
        "[object Array]"
      ) {
        userExperienceItem[key] = certificationItem[keyMap[key]].join(", ");
      } else {
        userExperienceItem[key] = certificationItem[keyMap[key]];
      }
    }

    // date when user worked here
    userExperienceItem.content = createShowCredentialButton({
      name: "Show credential",
      icon: "/images/icon-external.svg",
      onclick: (e) => clickShowCertification(e),
    }); // Content with button
    userCertifications.push(userExperienceItem);
  });

  const extraButton = (
    <DiscoverMore
      title={[
        "Show all licences & certifications",
        "Show all licences & certifications",
      ]}
      link="#"
      onclick={(e) => doDemo(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Licenses & certifications"
      panel="certifications"
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      {userCertifications.length && (
        <ContentListItems items={userCertifications} />
      )}
    </ProfileCardBox>
  );
};

export default ProfileCardCertifications;
