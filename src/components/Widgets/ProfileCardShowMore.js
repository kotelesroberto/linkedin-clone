import React, { useEffect } from "react";
import styled from "styled-components";

const ProfileCardShowMore = (props) => {
  return (
    <ShowMore showOn={props.showOn} textAlign={props.textAlign}>
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
  text-align: center;
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
  cursor: pointer;

  ${(props) =>
    props.showOn === "mobile" &&
    `
    display: none;
    
    @media (max-width: 768px) {
      display: flex;
    }
    `};

  ${(props) =>
    props.textAlign === "left" &&
    `
    justify-content: flex-start;
    padding-left: 30px;
    `};

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
    width: 16px;
    height: 16px;
  }
`;

export default ProfileCardShowMore;
