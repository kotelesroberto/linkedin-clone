/**
 * Component
 * Feed
 * Jobs list item
 * 2023, Robert Koteles
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import styled from "styled-components";

import { Card, CardContainer } from "../../../_library/Cards";
import { UserAvatarPhoto } from "../../../_library/User";
import {
  IconGlobe,
  ButtonActionContainer,
  ButtonAction,
} from "../../../_library/Icons";

import * as variables from "../../../_library/Variables";

const Job = (props) => {
  const parentKey = props.parentkey;
  const content = props.content;

  console.log({ content });

  useEffect(() => {
    // Start the pooled timer which runs every 60 seconds
    // (60000 milliseconds) by default.
    Moment.startPooledTimer();
  }, []);

  return (
    <JobCard>
      <JobContainer>
        <JobTop>
          <JobPhoto>
            <img src={content.image} alt={content.company} />
          </JobPhoto>
          <JobInfo>
            <JobName href={content.link}>{content.title}</JobName>
            <JobCompany>{content.company}</JobCompany>
            <JobLocation>{content.location}</JobLocation>
            <JobSalary>{content.salary}</JobSalary>
            <JobDescription>{content.description}</JobDescription>

            {content.easyapply && <JobRow>Easy apply</JobRow>}
            {content.active && (
              <JobRow>
                <img src="/images/active-recruiting.svg" alt="Active Job" />
                Actively Recruiting
              </JobRow>
            )}

            <JobDate>
              <Moment fromNow>{new Date(content.timestamp)}</Moment> •{" "}
              <IconGlobe />
            </JobDate>
          </JobInfo>

          <FeedItemActions>
            <FeedItemAction>
              <img
                src="/images/icon-close.svg"
                alt="Hide post"
                className="close-icon"
              />
            </FeedItemAction>
          </FeedItemActions>
        </JobTop>
        <JobContent>
          <span>{content.content}</span>
        </JobContent>
      </JobContainer>
    </JobCard>
  );
};

const JobCard = styled(Card)`
  display: flex;
  flex-direction: column;
  color: ${variables.colors.colorFont};
  padding: 12px;
`;

const JobContainer = styled(CardContainer)``;

const JobTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const JobContent = styled.div`
  color: ${variables.colors.colorFont};
  font-size: 14px;

  span {
    display: block;
    margin-bottom: 4px;
  }
`;

const JobRow = styled(JobContent)`
display: flex;
align-items: center;
margin: 4px 0;
color: ${variables.colors.colorFont};
font-style: italic;
font-weight: 700;

img {
  margin-right: 12px;
}
`;

const JobImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;

  a {
    margin-left: 5px;

    &:first-child {
      margin-left: 0;
    }
  }

  img {
    display: block;
    object-fit: fill;
    width: auto;
    max-width: 100%;
    height: 100%;
  }
`;

const JobPhoto = styled(UserAvatarPhoto)``;

const JobInfo = styled.div``;

const JobName = styled.a`
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  color: ${variables.colors.link};
`;

const JobCompany = styled.div`
  display: block;
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: ${variables.colors.colorFont};
  margin-bottom: 8px;
`;

const JobLocation = styled(JobCompany)``;

const JobSalary = styled(JobCompany)``;

const JobDescription = styled(JobCompany)`
  font-size: 12px;
  opacity: 0.7;
`;

const JobDate = styled.span`
  font-size: 12px;
`;

const FeedItemActions = styled(ButtonActionContainer)``;

const FeedItemAction = styled(ButtonAction)`
  img {
    &.close-icon {
      width: 30px;
      height: 20px;
      opacity: 0.5;
    }
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Job);
