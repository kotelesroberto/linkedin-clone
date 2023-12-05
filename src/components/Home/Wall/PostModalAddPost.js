import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { ButtonSecondary, ButtonEmoji } from "../../Common/Buttons";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import ReactPlayer from "react-player";

const PostModalAddPost = (props) => {
  const uploadedFiles = props.uploadedFiles;
  const editorText = props.editorText;
  const setEditorText = props.setEditorText;
  const error = props.error;

  /*=============================================
  =            Textarea handlers            =
  =============================================*/

  const textareaPlaceholder = "What do you want to talk about?";

  /* Add textarea Insert emoji */
  const [charPosition, setCharPosition] = useState(0);
  const [externalMediaUrl, setExternalMediaUrl] = useState("");

  const onchangeTextarea = () => {
    const comment = document.getElementById("postMessage");
    setCharPosition(comment.selectionStart);
    setEditorText(comment.value);
    getFirstYoutubeLink(editorText);
  };

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // make url srings anchored in the content
  const doUrlify = (text) => {
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + "</a>";
    });
  };

  // get extracted url addresses from content
  const getFirstMediaLink = (text) => {
    const matches = text.match(urlRegex);
    return matches;
  };

  // get youtube video extracted from content
  const getFirstYoutubeLink = (text) => {
    const urlRegex =
      /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
    const matches = text.match(urlRegex);
    if (matches) {
      setExternalMediaUrl(matches[0]);
    } else {
      setExternalMediaUrl("");
    }
    return matches;
  };

  /*=============================================
  =            Emoji            =
  =============================================*/
  const [emojiPanel, setEmojiPanel] = useState(false);

  const onEmojiSelect = (e) => {
    setEditorText(
      editorText.substring(0, charPosition) +
        e.native +
        editorText.substring(charPosition)
    );
    clickEmojiTrigger();
  };

  const clickEmojiTrigger = () => {
    setEmojiPanel(!emojiPanel);
  };

  return (
    <ContainerAside>
      <textarea
        name=""
        id="postMessage"
        cols="30"
        rows="4"
        aria-placeholder={textareaPlaceholder}
        placeholder={textareaPlaceholder}
        onChange={onchangeTextarea}
        onClick={onchangeTextarea}
        value={editorText}
        autoFocus={ true }
      ></textarea>

      <ThumbContainer>
        {
          /* Render a YouTube video player */
          externalMediaUrl && <ReactPlayer url={externalMediaUrl} />
        }
        {uploadedFiles.map((file) => (
          <ThumbWrapper key={file.path}>
            <ThumbImage file={file} />
          </ThumbWrapper>
        ))}
      </ThumbContainer>

      {error && <Error>{error}</Error>}

      <Pickercontainer>
        <ButtonEmoji onClick={clickEmojiTrigger} />
        {emojiPanel && (
          <EmojiContainer>
            <Picker data={data} onEmojiSelect={onEmojiSelect} />
          </EmojiContainer>
        )}
      </Pickercontainer>
    </ContainerAside>
  );
};

const ContainerAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  padding: 16px 24px;

  textarea {
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    max-height: 400px;
    background-color: transparent;
    resize: none;
    height: auto;
  }
`;

const ThumbImage = (props) => {
  const file = props.file;

  return (
    <>
      <img
        className="thumbImage"
        src={file.preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        title={file.path + ", " + file.size + " bytes"}
        alt={file.path + ", " + file.size + " bytes"}
      />
    </>
  );
};

const ThumbContainer = styled.ul`
  list-style: none;
  margin: 0;
  /* padding: 16px 24px; */
  padding: 0;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 6px;
  overflow-x: auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  & > div {
    /* width: auto !important;
    height: auto !important; */
    max-height: 300px;
    flex-shrink: 0;
  }
`;

const ThumbWrapper = styled.li`
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }

  img {
    &.thumbImage {
      width: auto;
      max-height: 300px;
      height: auto;

      @media (max-width: 768px) {
        max-height: initial;
      }
    }
  }
`;

const Pickercontainer = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
`;

const EmojiContainer = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 50;
`;

const Error = styled.div`
  color: red;
`;

export default PostModalAddPost;
