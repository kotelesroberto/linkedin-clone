import React from "react";

const FeedListItemImage = (props) => {
  console.log("FeedListItemImage", props);
  return (
    <a href={props.image.url} target="_blank">
      <img src={props.image.url} alt={props.image.title} />
    </a>
  );
};

export default FeedListItemImage;
