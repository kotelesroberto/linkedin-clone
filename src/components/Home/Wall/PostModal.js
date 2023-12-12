import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as variables from "../../_library/Variables";
import { Card } from "../../_library/Cards";
import { ButtonPrimary, ButtonSecondary } from "../../_library/Buttons";
import { IconButtonRow } from "../../_library/Icons";
import PostModalHeader from "./PostModalHeader";
import AddEventForm from "./AddEventForm";
import UploadInProgress from "./UploadInProgress";
import EditProfileData from "../../User/EditPanels/EditProfileData";
import ShowImage from "../../User/ShowPanel/ShowImage";

import DropZone from "./DropZone";
import {
  UploadFile,
  SaveContentIntoFirebase,
} from "../../../utils/firebaseFunctions";
import {
  actionSetShowModal,
  actionSetPreviousShowModal,
  actionIsImagesUploadDone,
} from "../../../redux/actions/actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [eventForm, setEventForm] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImagesOnServer, setUploadedImagesOnServer] = useState([]);

  const showModal = props.showModal;
  const previousShowModal = props.previousShowModal;
  const setShowModal = props.setShowModal;
  const setPreviousShowModal = props.setPreviousShowModal;
  const setImagesUploadDone = props.setImagesUploadDone;

  console.log("PostModal showModal", showModal);
  console.log("PostModal showModal props.user", props.user);

  const changeShowModal = (e, newModalState = "") => {
    console.log("c changeShowModal");
    setPreviousShowModal(showModal);
    setShowModal(newModalState);
  };

  const closeModal = (e) => {
    e.preventDefault();
    erasePostData(e);
    setShowModal("");
  };

  const gotoBack = (e) => {
    e.preventDefault();
    setShowModal(previousShowModal);

    setPreviousShowModal("");
    setUploadedFiles([]);
  };

  const erasePostData = (e) => {
    // erase data from state
    setEditorText("");
    setUploadedFiles([]);
    setUploadedImagesOnServer([]);
    setPreviousShowModal("");
  };

  const clickPost = (e) => {
    e.preventDefault();

    let postRef = "";

    // post data to server
    setShowModal("is-posting");

    const data = {
      uid: props.user.uid,
      displayName: props.user.displayName,
      username: props.user.email,
      verified: props.user.emailVerified,
      timestamp: Date.now(),
      text: editorText,
      // image: imageAsUrl.imgUrl,
      // imageAlt: "",
      avatar: props.user.photoURL,
      comments: "",
      numComments: 0,
      reposts: Math.floor(Math.random() * 1000) + 1,
      likes: [],
    };

    // save post content into Firestore
    SaveContentIntoFirebase("posts", data, (response) => {
      postRef = response.id;
    });

    // Upload files and save into Firestore
    if (uploadedFiles.length) {
      // upload images first and after the content
      uploadedFiles.map((item) => {
        UploadFile({
          folder: "images/posts",
          imageAsFile: item,
          setUrl: (resp) => {
            // add image to component state
            let temp = uploadedImagesOnServer.push({ imgUrl: resp });
            setUploadedImagesOnServer(temp);

            SaveContentIntoFirebase(
              "post-images",
              {
                postRef: postRef,
                imgUrl: resp,
                timestamp: Date.now(),
              },
              () => {
                console.log("Image upload is DONE");

                if (uploadedImagesOnServer.length === uploadedFiles.length) {
                  // notify Redux store that all images are done
                  setImagesUploadDone(postRef);

                  // close modal
                  closeModal(e);
                  erasePostData();
                }
              }
            );
          },
        });
      });
    } else {
      // close modal
      closeModal(e);
      erasePostData();
    }
  };

  const clickPostEvent = (e) => {
    e.preventDefault();

    // post data to server
    // TODO: add function to save event

    erasePostData(e);
  };

  let classes = "";

  if (showModal.includes("view-image")) {
    classes = "view-image";
  } else if (showModal.includes("edit-profile")) {
    classes = showModal.split("--")[0].toLowerCase();
  } else {
    classes = showModal.toLowerCase();
  }

  return (
    <>
      {!!showModal && (
        <Container>
          <Content className={classes}>
            <PostModalHeader showModal={showModal} closeModal={closeModal} />
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
              {showModal.includes("edit-profile--") && (
                <EditProfileData
                  panel={showModal}
                  showModal={showModal}
                  closeModal={closeModal}
                />
              )}
              {showModal.includes("view-image") && (
                <ShowImage showModal={showModal} closeModal={closeModal} />
              )}
            </UploadArea>

            <Footer
              className={showModal.includes("edit-profile--") ? "hidden" : ""}
            >
              <ButtonRow>
                {previousShowModal && showModal !== "view-image" && (
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

                {showModal === "view-image" && (
                  <>
                    <ButtonPrimary onClick={(e) => closeModal(e)}>
                      Close
                    </ButtonPrimary>
                  </>
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
  background-color: ${variables.colors.modalBackground};
`;

const Content = styled(Card)`
  width: 90%;
  max-width: 1128px;
  background-color: ${variables.colors.white};
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
  overflow: visible;

  &.addpost,
  &.addevent {
    max-width: 744px;
    min-height: 40%;
  }
  &.is-posting {
    max-width: 744px;
    min-height: 40%;
  }

  &.edit-profile {
    min-height: 40%;
    width: 60%;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  &.view-image {
    min-height: initial;
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
  border-top: 1px solid ${variables.colors.border2};

  &.hidden {
    display: none;
  }
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
      box-shadow: ${variables.colors.boxShadow2};

      span {
        display: block;
      }
    }

    span {
      position: absolute;
      top: -40px;
      display: block;
      white-space: nowrap;
      background-color: ${variables.colors.white};
      border: 1px solid ${variables.colors.colorFont};
      border-radius: 8px;
      padding: 8px;
      display: none;
      box-shadow: ${variables.colors.boxShadow2};
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
  console.log({ state });
  return {
    user: state.userState.user,
    showModal: state.popupModalState.popupModal.showModal,
    previousShowModal: state.popupModalState.popupModal.previousShowModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(actionSetShowModal(newPopupState));
    },
    setPreviousShowModal: (prevPopupState) => {
      console.log("d setPreviousShowModal", prevPopupState);
      dispatch(actionSetPreviousShowModal(prevPopupState));
    },
    setImagesUploadDone: (postRef) => {
      dispatch(actionIsImagesUploadDone(postRef));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
