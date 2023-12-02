import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as variables from "../../Common/Variables";
import { Card } from "../../Common/Cards";
import { ButtonPrimary, ButtonSecondary } from "../../Common/Buttons";
import { IconButtonRow } from "../../Common/Icons";
import PostModalHeader from "./PostModalHeader";
import AddEventForm from "./AddEventForm";
import UploadInProgress from "./UploadInProgress";

import DropZone from "./DropZone";
import UploadFile from "../../../utils/uploadFile";
import { doPostContentIntoFirebase } from "../../../redux/actions/actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [eventForm, setEventForm] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImagesOnServer, setUploadedImagesOnServer] = useState([]);

  const showModal = props.showModal;
  const setShowModal = props.setShowModal;
  const handleModalClick = props.handleModalClick;

  const [previousShowModal, setPreviousShowModal] = useState("");

  const changeShowModal = (e, newModalState = "") => {
    setPreviousShowModal(showModal);
    handleModalClick(e, newModalState);
  };

  const closeModal = (e) => {
    e.preventDefault();
    erasePostData(e);
    handleModalClick(e);
  };

  const gotoBack = (e) => {
    e.preventDefault();
    handleModalClick(e, previousShowModal);
    setPreviousShowModal("");
    setUploadedFiles([]);
  };

  const erasePostData = (e) => {
    // erase data from state
    setEditorText("");
    setUploadedFiles([]);
    setUploadedImagesOnServer([]);
  };

  const clickPost = (e) => {
    e.preventDefault();

    let postRef = "";

    // post data to server
    // TODO
    console.log(editorText);
    console.log(uploadedFiles);

    setShowModal("is-posting");

    const data = {
      displayName: props.user.displayName,
      username: props.user.email,
      verified: props.user.emailVerified,
      timestamp: Date.now() / 1000,
      text: editorText,
      // image: imageAsUrl.imgUrl,
      // imageAlt: "",
      avatar: props.user.photoURL,
      comments: "",
      numComments: Math.floor(Math.random() * 1000) + 1,
      reposts: Math.floor(Math.random() * 1000) + 1,
      likes: Math.floor(Math.random() * 1000) + 1,
    };

    // save post content into Firestore
    doPostContentIntoFirebase("posts", data, (response) => {
      postRef = response;
    });

    // Upload files and save into Firestore
    if (uploadedFiles.length) {
      // upload images first and after the content
      uploadedFiles.map((item) => {
        UploadFile({
          folder: "images/posts",
          imageAsFile: item,
          setUrl: (resp) => {
            let temp = uploadedImagesOnServer.push({ imgUrl: resp });
            setUploadedImagesOnServer(temp);

            doPostContentIntoFirebase(
              "post-images",
              {
                postRef: postRef,
                imgUrl: resp,
              },
              () => {}
            );

            if (uploadedImagesOnServer.length === uploadedFiles.length) {
              // close modal
              closeModal(e);
            }
          },
        });
      });
    } else {
      // close modal
      closeModal(e);
    }
  };

  const clickPostEvent = (e) => {
    e.preventDefault();

    // post data to server
    // TODO
    console.log(editorText);
    console.log(uploadedFiles);

    erasePostData(e);

    // close modal
    // closeModal(e);
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
              {["addPost", "addMedia"].includes(showModal) && (
                <>
                  <DropZone
                    showModal={showModal}
                    closeModal={closeModal}
                    editorText={editorText}
                    setEditorText={setEditorText}
                    uploadedFiles={uploadedFiles}
                    setUploadedFiles={setUploadedFiles}
                  />

                  {showModal === "addPost" && (
                    <PostModalIconButtonRow>
                      <button onClick={(e) => changeShowModal(e, "addMedia")}>
                        <img src="/images/photo-icon.svg" alt="Add media" />
                        <span>Add media</span>
                      </button>
                      <button onClick={(e) => changeShowModal(e, "addEvent")}>
                        <img
                          src="/images/calendar-icon.svg"
                          alt="Crate an event"
                        />
                        <span>Crate an event</span>
                      </button>
                      <button>
                        <img
                          src="/images/starburst-icon.svg"
                          alt="Celebrate an occassion"
                        />
                        <span>Celebrate an occassion</span>
                      </button>
                    </PostModalIconButtonRow>
                  )}
                </>
              )}

              {showModal === "addEvent" && <AddEventForm />}
              {showModal === "is-posting" && <UploadInProgress />}
            </UploadArea>

            <Footer>
              <ButtonRow>
                {previousShowModal && (
                  <ButtonPrimary onClick={gotoBack}>Back</ButtonPrimary>
                )}
                {["addPost", "addMedia"].includes(showModal) &&
                  (!!uploadedFiles.length ? (
                    <ButtonSecondary onClick={clickPost}>Post</ButtonSecondary>
                  ) : (
                    <ButtonSecondary disabled={!editorText} onClick={clickPost}>
                      Next
                    </ButtonSecondary>
                  ))}

                {showModal === "addEvent" && (
                  <ButtonSecondary
                    disabled={!eventForm.length}
                    onClick={clickPostEvent}
                  >
                    Next
                  </ButtonSecondary>
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
  max-height: 100vh;
  overflow: initial;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;

  &.addpost,
  &.addevent {
    max-width: 744px;
    min-height: 40%;
  }
  &.is-posting {
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

  ${ButtonPrimary},
  ${ButtonSecondary} {
    width: auto;
    margin-bottom: 0;
    margin-left: 6px;

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
      box-shadow: rgba(140, 140, 140, 0.2) 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;

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

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doPostContentIntoFirebase: (collectionName, data, callback) => {
      dispatch(doPostContentIntoFirebase(collectionName, data, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
