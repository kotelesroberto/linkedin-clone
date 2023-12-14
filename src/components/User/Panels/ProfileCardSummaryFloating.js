import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileCardUserPhoto from "./ProfileCardUserPhoto";
import ProfileCardUserInfo from "./ProfileCardUserInfo";
import ProfileCardButtons from "./ProfileCardButtons";
import * as variables from "../../_library/Variables";

const ProfileCardSummaryFloating = (props) => {
  const profileUser = props.profileuser;
  const panel = props.panel; // it's used on lfoating profile strip too
  const [classes, setClasses] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 540) {
        setClasses("visible");
      } else {
        setClasses("");
      }
    });
  }, []);

  return (
    <Container className={classes}>
      <ContainerInner>
        <ProfileCardUserPhoto
          iseditmode={false}
          classes={"panel"}
          profileuser={profileUser}
        />
        <ProfileCardUserInfo
          iseditmode={false}
          isprofilepage={false}
          user={profileUser}
          panel={true}
        />
        <ProfileCardButtons user={profileUser} panel={true} />
      </ContainerInner>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  position: fixed;
  top: 53px;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: ${variables.colorDefinitions.white};
  box-shadow: ${variables.colors.boxShadow2};
  transform: translate3d(0, -100%, 0);
  transition: transform 0.3s;

  &.visible {
    transform: translate3d(0, 0, 0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1128px;
  padding: 10px 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    max-width: 576px;
  }
`;

export default ProfileCardSummaryFloating;
