/**
 * Component
 * Feed
 * Render a YouTube video player for a Feed item
 * 2023, Robert Koteles
 */

import React from "react";
import ReactPlayer from "react-player";
import { getFirstYoutubeLink } from "../../../../utils/getVideoLink";

import styled from "styled-components";

const FeedListItemVideo = (props) => {
  let externalMediaUrl = "";

  getFirstYoutubeLink(props.content, (result) => {
    externalMediaUrl = result;
  });

  return (
    <>
      {externalMediaUrl && (
        <Container>
          {externalMediaUrl && <ReactPlayer url={externalMediaUrl} />}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 0px;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

export default FeedListItemVideo;
