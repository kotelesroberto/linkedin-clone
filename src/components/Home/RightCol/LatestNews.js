import React from "react";
import styled from "styled-components";

const LatestNews = () => {
  return <Card>Latest News</Card>;
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(140, 140, 140, 0.2) 0px 0px 0px 1px;
  transition-property: box-shadow;
  padding: 12px;
`;

export default LatestNews;
