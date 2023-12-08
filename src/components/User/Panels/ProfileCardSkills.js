/**
 *
 * Component: Skils
 * @desc This component is for showing the skills of the user
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";
import styled from "styled-components";

const ProfileCardSkills = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const profileUid = props.profileuid;

  const navigate = useNavigate();

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  const createAssociated = (item) => {
    return (
      <Associated>
        <img src={item.icon} alt={item.name} />
        <span>{item.name}</span>
      </Associated>
    );
  };

  const contentToShow = [
    {
      title: "Accessibility",
      content: createAssociated({
        name: "12 experiences across Apple and 4 other companies",
        icon: "/upload/logo-apple.svg",
      }),
    },
    {
      title: "CSS3 / SASS / LESS",
      content: createAssociated({
        name: "5 experiences across Google and 4 other companies",
        icon: "/upload/logo-google.svg",
      }),
    },
    {
      title: "Webpack",
      content: createAssociated({
        name: "8 experiences across BMW and 4 other companies",
        icon: "/upload/logo-bmw.svg",
      }),
    },
    {
      title: "React",
      content: createAssociated({
        name: "7 experiences across Forbes and 2 other companies",
        icon: "/upload/logo-forbes.svg",
      }),
    },
    {
      title: "JavaScript",
      content: createAssociated({
        name: "15 experiences across Google and 3 other companies",
        icon: "/upload/logo-google.svg",
      }),
    },
  ];

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all skills", "Show all skills"]}
      link="#"
      onclick={(e) => doDemo(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Skills"
      subtitle="You've added the maximum number of skills"
      subtitleicon="/images/icon-info.svg"
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems items={contentToShow} />
    </ProfileCardBox>
  );
};

const Associated = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  img {
    width: 24px;
    height: auto;
    margin-right: 12px;
  }

  span {
    font-size: 14px;
  }
`;

export default ProfileCardSkills;
