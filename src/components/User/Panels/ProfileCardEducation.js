/**
 *
 * Component: Education
 * @desc This component is for showing the user's education history
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";

const ProfileCardEducation = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  const user = props.user;
  let educations =
    user && user.extra && user.extra.education ? user.extra.education : [];

  // As we use data with different keys in Friebase from what we need for <ContentListItems /> Component={, we need to transform keys by using a map transformation
  const keyMap = {
    image: "logo", // Image of the school
    title: "name", // Name of the school
    title2: "degree", // Name of degree
    title3: "from", // Year range
    content2: "grade", // Grade
    content3: "info", // Description
  };

  let userEducations = [];

  educations.map((educationItem) => {
    let userExperienceItem = {};
    for (const key in keyMap) {
      // if the key value is an array, convert into string to display on the page
      if (
        Object.prototype.toString.call(educationItem[keyMap[key]]) ===
        "[object Array]"
      ) {
        userExperienceItem[key] = educationItem[keyMap[key]].join(", ");
      } else {
        userExperienceItem[key] = educationItem[keyMap[key]];
      }
    }

    // date when user worked here
    userExperienceItem.title3 = `${educationItem.from} - ${educationItem.to}`;
    userEducations.push(userExperienceItem);
  });

  return (
    <ProfileCardBox title="Education" panel="education" iseditmode={isEditMode}>
      <ContentListItems items={userEducations} />
    </ProfileCardBox>
  );
};

export default ProfileCardEducation;
