/**
 * Component
 * Feed: Jobs
 * Feed container
 * 2023, Robert Koteles
 */

import React, { useEffect, useRef, useState, useMemo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Card, CardContainer } from "../../../_library/Cards";
import FeedListItem from "./FeedListItem";
import DiscoverMore from "../../../Widgets/DiscoverMore";
import { jobs } from "../../../../utils/demoData";

const Feed = (props) => {
  // all jobs
  const [messagesToShow, setMessagesToShow] = useState("");

  useEffect(() => {
    setMessagesToShow(jobs);
  }, []);

  return (
    <JobList key="job-list">
      <JobListContainer>
        <JobListTitle>Recommended for you</JobListTitle>
        <JobListSubTitle>
          Based on your profile and search history
        </JobListSubTitle>
        {messagesToShow &&
          messagesToShow.map((item, index) => (
            <FeedListItem
              content={{ ...item }}
              key={`job-jobs-item-${item.timestamp}-${index}`}
              parentkey={`job-list-item-${item.id}-index`}
              className={`job-list-item-${item.id}-index`}
            />
          ))}
      </JobListContainer>

      <DiscoverMore
        title={["Discover more", "Hide"]}
        link="/demo"
        onclick={() => {}}
      />
    </JobList>
  );
};

const JobList = styled(Card)`
  /* padding: 12px; */
`;

const JobListContainer = styled.div`
  padding: 0 12px;
`;

const JobListTitle = styled.h2`
  font-size: 18px;
`;

const JobListSubTitle = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Feed);
