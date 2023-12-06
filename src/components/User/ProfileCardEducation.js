import React from "react";
import styled from "styled-components";

const ProfileCardEducation = () => {
  // TODO: read it from Firebase as an API JSON object
  const edication = {
    title: "University of Debrecen Official",
    image: {
      src: "./upload/university_of_debrecen.jpg",
    },
  };

  return (
    <Container>
      <img
        src={edication.image.src}
        alt={edication.title}
        aria-label={edication.title}
      />
      <div>{edication.title}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 30%;

  @media (max-width: 580px) {
    display: none;
  }

  img {
    width: 32px;
    border-radius: 50%;
    height: auto;
    margin-right: 8px;
  }
  div {
    font-size: 14px;
    font-weight: 700;
  }
`;

export default ProfileCardEducation;
