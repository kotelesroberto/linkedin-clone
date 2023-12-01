import React, { useState } from "react";
import styled from "styled-components";
import * as variables from "../../Common/Variables";
import { Card } from "../../Common/Cards";
import { ButtonSecondary } from "../../Common/Buttons";
import { IconButtonRow } from "../../Common/Icons";
import PostModalHeader from "./PostModalHeader";

import DropZone from "./DropZone";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const showModal = props.showModal;
  const handleModalClick = props.handleModalClick;

  const closeModal = (e) => {
    e.preventDefault();
    setEditorText("");
    setUploadedFiles([]);
    handleModalClick(e);
  };

  const clickPost = (e) => {
    // post data to server
    // TODO
    console.log(editorText);
    console.log(uploadedFiles);

    // erase data from state
    setEditorText("");
    setUploadedFiles([]);

    // close modal
    closeModal(e);
  };

  return (
    <>
      {!!showModal && (
        <Container>
          <Content className={showModal.toLowerCase()}>
            <PostModalHeader
              showModal={showModal}
              closeModal={closeModal}
              handleModalClick={handleModalClick}
            />
            <UploadArea>
              <DropZone
                showModal={showModal}
                closeModal={closeModal}
                editorText={editorText}
                setEditorText={setEditorText}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />

              <PostModalIconButtonRow>
                <button onClick={(e) => props.handleModalClick(e, "addMedia")}>
                  <img src="/images/photo-icon.svg" alt="Add media" />
                  <span>Add media</span>
                </button>
                <button onClick={(e) => props.handleModalClick(e, "addEvent")}>
                  <img src="/images/calendar-icon.svg" alt="Crate an event" />
                  <span>Crate an event</span>
                </button>
                <button>
                  <img
                    src="/images/article-icon.svg"
                    alt="Celebrate an occassion"
                  />
                  <span>Celebrate an occassion</span>
                </button>
              </PostModalIconButtonRow>
            </UploadArea>

            <Footer>
              <ButtonRow>
                {!!uploadedFiles.length ? (
                  <ButtonSecondary onClick={clickPost}>Post</ButtonSecondary>
                ) : (
                  <ButtonSecondary disabled={!editorText}>Next</ButtonSecondary>
                )}
              </ButtonRow>
            </Footer>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled(Card)`
  width: 90%;
  max-width: 1128px;
  background-color: #fff;
  min-height: 90%;
  overflow: initial;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: flex;
  flex-direction: column;
  padding: 0;

  &.addpost {
    max-width: 744px;
    min-height: 40%;
  }

  @media (max-width: 1024px) {
    max-width: 552px;
  }
`;

const UploadArea = styled.div`
  background-color: #f8fafd;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    margin-bottom: 12px;
  }

  ${ButtonSecondary} {
    width: auto;
  }
`;

const Footer = styled.div`
  background-color: ${variables.colors.white};
  border-top: 1px solid rgba(140, 140, 140, 0.2);
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;

  ${ButtonSecondary} {
    width: auto;
    margin-bottom: 0;

    &[disabled] {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

const PostModalIconButtonRow = styled(IconButtonRow)`
  padding: 16px;
  justify-content: flex-start;
  width: 100%;

  button {
    background-color: #f4f2ee;
    border-radius: 50%;
    padding: 12px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px;
    position: relative;

    &:hover {
      span {
        display: block;
      }
    }

    span {
      position: absolute;
      top: -40px;
      display: block;
      white-space: nowrap;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      padding: 8px;
      display: none;

      box-shadow: rgba(140, 140, 140, 0.2) 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;
      transition-property: box-shadow;
    }
  }

  img {
    margin: 0 !important;
  }
`;

export default PostModal;
