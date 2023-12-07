/**
 *
 * Component: Languages
 * @desc This component is for showing the languages the user speaks
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";

const ProfileCardLanguages = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  const navigate = useNavigate();

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  const contentToShow = [
    {
      title: "English",
      title2: "Professional working proficiency",
    },
    {
      title: "German",
      title2: "Elementary proficiency",
    },
  ];

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all languages", "Show all languages"]}
      link="#"
      onclick={(e) => doDemo(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Languages"
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems items={contentToShow} />
    </ProfileCardBox>
  );
};

export default ProfileCardLanguages;
