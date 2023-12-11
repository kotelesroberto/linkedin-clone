/**
 *
 * Component: Awards
 * @desc This component is for showing the user's awards
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";
import styled from "styled-components";

const ProfileCardAwards = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const profileUid = props.profileuid;

  const navigate = useNavigate();

  const createAssociated = (item) => {
    return (
      <Associated>
        <img src={item.icon} alt={item.name} />
        <span>{item.name}</span>
      </Associated>
    );
  };

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  const contentToShow = [
    {
      title: "24th Annual Webby Awards",
      title2: "Issued by The Webby Awards, New York · Aug 2020",
      content: createAssociated({
        name: "Company 1 name comes here",
        icon: "/images/home-logo.svg",
      }),
      content4:
        "The International Academy of Digital Arts and Sciences recognised our team work as a selection in the 24h Annual Webby Awards.",
    },
    {
      title: "23th Annual Webby Awards",
      title2: "Issued by The Webby Awards, New York · Aug 2019",
      content: createAssociated({
        name: "Company 2 name comes here",
        icon: "/images/home-logo.svg",
      }),
      content4:
        "The International Academy of Digital Arts and Sciences recognised our team work as a selection in the 24h Annual Webby Awards.",
    },
  ];

  const extraButton = (
    <DiscoverMore
      title={["Show all honors & awards", "Show all honors & awards"]}
      link="#"
      onclick={(e) => doDemo(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Honors & awards"
      panel="Awards"
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

export default ProfileCardAwards;
