import React from "react";
import styled from "styled-components";

const ProfileCardShowMore = () => {
  return (
    <ShowMore>
      <a>Show more</a>

      <img
        src="/images/down-icon-2.svg"
        alt="Open dropdown"
        className="icon-arrow"
      />
    </ShowMore>
  );
};

const ShowMore = styled.div`
  display: none;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 2px 8px;
  margin-top: 8px;
  cursor: pointer;
  padding: 4px 8px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }

  img {
    margin-left: 4px;
  }
`;

export default ProfileCardShowMore;
