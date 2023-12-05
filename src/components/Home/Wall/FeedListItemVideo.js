import React from "react";
import ReactPlayer from "react-player";
import { getFirstYoutubeLink } from "../../../utils/getVideoLink";

const FeedListItemVideo = (props) => {
  let externalMediaUrl = "";

  getFirstYoutubeLink(props.content, (result) => {
    externalMediaUrl = result;
  });

  return (
    <>
      {
        /* Render a YouTube video player */
        externalMediaUrl && <ReactPlayer url={externalMediaUrl} />
      }
    </>
  );
};

export default FeedListItemVideo;
