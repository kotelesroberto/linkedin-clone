/**
 *
 * Component: User profile page's right column
 * 2023, Robert Koteles
 */

import styled from "styled-components";
import React from "react";
import PeopleListTeaser from "../../Widgets/PeopleListTeaser";
import FooterInlineMenu from "../../Footer/FooterInlineMenu";

const RightCol = () => {
  // TODO: fetch from API later, as JSON object
  const peopleMayYouKnow = [
    {
      name: "Janis Joplin",
      position: "Singer and story teller",
      avatar: "/images/avatar.svg",
      link: "./in/demo",
    },
    {
      name: "Jimi Hendrix",
      position:
        "American guitarist, songwriter and singer. Although his mainstream career spanned only four years, he is widely regarded as the greatest and one of the most influential electric guitarists in the history of popular music",
      avatar: "/images/avatar.svg",
      link: "./in/demo",
    },
    {
      name: "Eric Clapton",
      position: "Guitarist",
      avatar: "/images/avatar.svg",
      link: "./in/demo",
    },
    {
      name: "Superman",
      position: "(Clark Kent in incognito)",
      avatar: "/images/avatar.svg",
      link: "./in/demo",
    },
  ];
  const peopleAlsoViewed = [
    {
      name: "Eric Clapton",
      position: "Guitarist",
      avatar: "/images/avatar.svg",
      link: "./in/demo",
    },
  ];

  return (
    <Container>
      <PeopleListTeaser
        people={peopleAlsoViewed}
        title="People also viewed"
        subtitle=""
      />
      <PeopleListTeaser
        people={peopleMayYouKnow}
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
