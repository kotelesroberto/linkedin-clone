import React from "react";
import styled from "styled-components";

const ProfileCardEducationBox = (props) => {
  const user = props.user;
  const education = user.extra ? user.extra.education : "";

  // TODO: read it from Firebase as an API JSON object
  // const edication = {
  //   title: "University of Debrecen Official",
  //   image: {
  //     src: "/upload/university_of_debrecen.jpg",
  //   },
  // };

  return (
    <Container>
      {education && (
        <>
          <img
            src={education[0].logo}
            alt={education[0].name}
            aria-label={education[0].name}
          />
          <div>
            <span>{education[0].name}</span>
            <span>{education[0].degree}</span>
          </div>
        </>
      )}
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
    display: flex;
    flex-direction: column;

    span {
      &:first-child {
        font-weight: 700;
      }
    }
  }
`;

export default ProfileCardEducationBox;
