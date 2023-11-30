import React, { useCallback, useState } from "react";
import styled from "styled-components";
import * as variables from "../../Common/Variables";
import { ButtonActionContainer, ButtonAction } from "../../Common/Icons";
import { Card } from "../../Common/Cards";
import { ButtonSecondary } from "../../Common/Buttons";

import DropZone from "./DropZone";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const closeModal = (e) => {
    e.preventDefault();
    setEditorText("");
    props.handleModalClick(e);
  };

  // we have these data to post:
  console.log(editorText);
  console.log(uploadedFiles);

  return (
    <>
      {props.showModal && (
        <Container>
          <Content>
            <Header>
              <h2>Editor</h2>
              <ClosePopupActions>
                <ClosePopupAction onClick={(e) => closeModal(e)}>
                  <img
                    src="/images/icon-close.svg"
                    alt="Hide post"
                    className="close-icon"
                  />
                </ClosePopupAction>
              </ClosePopupActions>
            </Header>
            <UploadArea>
              <DropZone
                closeModal={closeModal}
                editorText={editorText}
                setEditorText={setEditorText}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
            </UploadArea>
            <Footer>
              <ButtonRow>
                <ButtonSecondary>Next</ButtonSecondary>
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

  @media (max-width: 1024px) {
    max-width: 552px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);

  h2 {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.9);
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

const ClosePopupActions = styled(ButtonActionContainer)`
  /* pointer-events: none; */
`;

const ClosePopupAction = styled(ButtonAction)`
  img {
    &.close-icon {
      width: 20px;
      pointer-events: none;
    }
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
  }
`;

export default PostModal;
