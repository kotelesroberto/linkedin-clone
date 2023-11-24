import React, { useState } from "react";
import styled from "styled-components";

const ProfileCardImpressions = () => {
  const [numProfileViewers, setNumProfileViewers] = useState(150);
  const [numPostImpressions, setNumPostImpressions] = useState(259);

  return (
    <Container>
      <CardImpression>
        <CardImpressionRow>
          <CardImpressionCol>Profile viewers</CardImpressionCol>
          <CardImpressionCol>{numProfileViewers}</CardImpressionCol>
        </CardImpressionRow>
        <CardImpressionRow>
          <CardImpressionCol>Post impressions</CardImpressionCol>
          <CardImpressionCol>{numPostImpressions}</CardImpressionCol>
        </CardImpressionRow>
      </CardImpression>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);
  padding: 16px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardImpression = styled.div``;

const CardImpressionRow = styled.div`
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CardImpressionCol = styled.div`
  color: rgba(0, 0, 0, 0.6);

  &:nth-child(2) {
    color: rgb(10, 102, 194);
  }
`;

export default ProfileCardImpressions;
