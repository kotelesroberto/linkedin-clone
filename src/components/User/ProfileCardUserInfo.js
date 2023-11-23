import React from "react";
import styled from "styled-components";

const ProfileCardUserInfo = () => {
  return (
    <UserCardInfo>
      <UserCardName>
        <a href="#">Robert Koteles</a>
      </UserCardName>
      <UserCardDescription>
        Professional Senior Web Developer | Tech leader | Certified Scrum
        Developer | Musician | Human being (SC Cleared)
      </UserCardDescription>
    </UserCardInfo>
  );
};

const UserCardInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);
  padding: 0 12px;
  padding-bottom: 16px;
`;

const UserCardName = styled.h3`
  font-size: 16px;
`;

const UserCardDescription = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 16px;
  display: block;
  margin-top: 4px;
`;

export default ProfileCardUserInfo;
