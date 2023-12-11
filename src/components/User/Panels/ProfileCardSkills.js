/**
 *
 * Component: Skils
 * @desc This component is for showing the skills of the user
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useEffect, useRef, useState } from "react";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";
import styled from "styled-components";

import { companies as demoCompanies } from "../../../utils/demoData";

const ProfileCardSkills = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const [openedStatus, setOpenedStatus] = useState("closed");
  const [userSkills, setUserSkills] = useState([]);

  const thisListRef = useRef();
  const maxItemsToShow = 5;

  const user = props.user;
  let skills = user && user.extra && user.extra.skills ? user.extra.skills : [];

  const createAssociated = (item) => {
    return (
      <Associated>
        <img src={item.icon} alt={item.name} />
        <span>{item.name}</span>
      </Associated>
    );
  };

  const selectRandomAssociate = () => {
    const randomCompany =
      demoCompanies[Math.floor(Math.random() * demoCompanies.length)];
    const randomCount = Math.floor(Math.random() * 30);

    return {
      name: `12 experiences across ${randomCompany.name} and ${randomCount} other companies`,
      icon: randomCompany.icon,
    };
  };

  useEffect(() => {
    let tempUserSkills = [];
    skills.map((skillItem) => {
      let temp = {};

      temp.title = skillItem;
      temp.content = createAssociated(selectRandomAssociate());

      tempUserSkills.push(temp);
    });

    setUserSkills((prevState) => tempUserSkills);
  }, [props.user]);

  const toggleView = (e) => {
    e.preventDefault();

    setOpenedStatus(openedStatus === "closed" ? "open" : "closed");

    thisListRef.current.querySelectorAll("& > li").forEach((item, index) => {
      if (index >= maxItemsToShow) {
        item.classList.toggle("closed");
      }
    });
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all skills", "Hide skills"]}
      link="#"
      onclick={(e) => toggleView(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Skills"
      subtitle="You've added the maximum number of skills"
      subtitleicon="/images/icon-info.svg"
      panel="skills"
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems
        items={userSkills}
        parentRef={thisListRef}
        maxItemsToShow={maxItemsToShow}
      />
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
