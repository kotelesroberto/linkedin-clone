/**
 *
 * Component: Education
 * @desc This component is for showing the user's education history
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";

const ProfileCardEducation = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  const navigate = useNavigate();

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  const contentToShow = [
    {
      image: "/upload/university_of_debrecen.jpg",
      title: "University of Debrecen",
      title2: "University degree, Mathematics and Computer Science",
      title3: "2000 - 2006",
      content2: "Grade: Master",
      content3:
        "12 semesters at Debrecen, Hungary, focus on Math theories and Computer technics.",
    },
  ];

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  return (
    <ProfileCardBox
      title="Education"
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
    >
      <ContentListItems items={contentToShow} />
    </ProfileCardBox>
  );
};

export default ProfileCardEducation;
