import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { ButtonSecondary, ButtonEmoji } from "../../Common/Buttons";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const PostModalAddPost = (props) => {
  const uploadedFiles = props.uploadedFiles;
  const editorText = props.editorText;
  const setEditorText = props.setEditorText;

  const textareaPlaceholder = "What do you want to talk about?";

  /* Add textarea Insert emoji */
  const [charPosition, setCharPosition] = useState(0);
  const [emojiPanel, setEmojiPanel] = useState(false);

  const onchangeTextarea = () => {
    const comment = document.getElementById("postMessage");
    setCharPosition(comment.selectionStart);
    setEditorText(comment.value);
  };

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
        rows="10"
        aria-placeholder={textareaPlaceholder}
        placeholder={textareaPlaceholder}
        onChange={onchangeTextarea}
        onClick={onchangeTextarea}
        value={editorText}
      ></textarea>

      <ThumbContainer>
        {uploadedFiles.map((file) => (
          <ThumbWrapper key={file.path}>
            <ThumbImage file={file} />
          </ThumbWrapper>
        ))}
      </ThumbContainer>

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

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ThumbWrapper = styled.li`
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }

  img {
    &.thumbImage {
      width: 100%;
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
`;

export default PostModalAddPost;
