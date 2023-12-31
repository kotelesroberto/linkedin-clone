/**
 *
 * Component: Impression
 * @desc This component is for showing the user's impressions
 * @author Robert Koteles
 * @version 1.0.0
 */

import React, { useState } from "react";
import styled from "styled-components";
import * as variables from "../../_library/Variables";

const ProfileCardImpressions = (props) => {
  const profileuid = props.userid;
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
  border-bottom: 1px solid ${variables.colors.border};
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
    background-color: ${variables.colors.listItemBackgroundHover};
  }
`;

const CardImpressionCol = styled.div`
  color: ${variables.colors.colorFont};

  &:nth-child(2) {
    color: ${variables.colors.link};

    &:hover {
      color: ${variables.colors.linkHover};
    }
  }
`;

export default ProfileCardImpressions;
