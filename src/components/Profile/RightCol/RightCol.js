/**
 *
 * Component: User profile page's right column
 * 2023, Robert Koteles
 */

import styled from "styled-components";
import React from "react";
import PeopleListTeaser from "../../Widgets/PeopleListTeaser";
import FooterInlineMenu from "../../Footer/FooterInlineMenu";
import { peopleMayYouKnow, peopleAlsoViewed } from "../../../utils/demoData";

const RightCol = () => {
  return (
    <Container>
      <PeopleListTeaser
        items={peopleAlsoViewed}
        title="People also viewed"
        subtitle=""
      />
      <PeopleListTeaser
        items={peopleMayYouKnow}
        title="People you may know"
        subtitle="From your company"
      />
      <FooterInlineMenu extraClass="logo-last" logoVariation="-blue" />
    </Container>
  );
};

const Container = styled.div`
  min-width: 300px;
  width: 20%;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export default RightCol;
