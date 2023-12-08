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
  const profileUid = props.profileuid;

  const navigate = useNavigate();

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  const clickShowCertification = (e) => {
    console.log("clickShowCertification");
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

  const contentToShow = [
    {
      image: "/upload/logo-scrum.jpg",
      title: "Scrum Developer Certificate of Proficiency",
      title2: "Scrum.org",
      title3: "Issued Jul 2022",
      title4: "Credential ID 819943",
      content: createShowCredentialButton({
        name: "Show credential",
        icon: "/images/icon-external.svg",
        onclick: (e) => clickShowCertification(e),
      }),
    },
  ];

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

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
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems items={contentToShow} />
    </ProfileCardBox>
  );
};

export default ProfileCardCertifications;
