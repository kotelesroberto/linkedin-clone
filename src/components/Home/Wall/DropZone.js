import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

import { ButtonSecondary } from "../../_library/Buttons";
import PostModalAddPost from "./PostModalAddPost";

const DropZone = (props) => {
  const editorText = props.editorText;
  const setEditorText = props.setEditorText;
  const uploadedFiles = props.uploadedFiles;
  const setUploadedFiles = props.setUploadedFiles;
  const showModal = props.showModal;
  const closeModal = props.closeModal;

  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // setError("");
    setUploadedFiles([]);

    setUploadedFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const fileSizeValidator = useCallback((file) => {
    if (file.size > 5000000) {
      setError(
        "One of the files was bigger than 5MB, please select smaller one!"
      );
      return {
        code: "size-too-large",
        message: `Too big file!`,
      };
    }

    return null;
  }, []);

  const onError = useCallback((error) => {
    // Do something with the files
    setError(error.message);
    alert(error.message);
    setUploadedFiles([]);
    closeModal(new Event("click"));
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      noDragEventsBubbling: false,
      onDrop: onDrop,
      onError: onError,
      autoFocus: true,
      accept: {
        "image/*": [],
        "video/mov": [".mov"],
        "video/avi": [".avi"],
        "video/mpeg": [".mpeg"],
        "video/mpg": [".mpg"],
      },
      maxFiles: 3,
      maxSize: 5000000, // 5 MB
      multiple: true,
      autoFocus: true,
      validator: fileSizeValidator,
    });

  return (
    <>
      <input {...getInputProps()} />

      {showModal === "addMedia" && !uploadedFiles.length && (
        <Container {...getRootProps({ className: "dropzone" })}>
          <img src="./images/uploadAssetBg.svg" alt="" />
          {isDragActive ? (
            <h2>Select files to begin or drag files here</h2>
          ) : (
            <h2>Select files to begin</h2>
          )}

          {isDragReject && (
            <h3>You try to drag a file that gonna be rejected</h3>
          )}

          <p>Share images or a single video in your post.</p>
          <ButtonSecondary>Upload from computer</ButtonSecondary>

          {error && <Error>{error}</Error>}
        </Container>
      )}

      {((showModal === "addMedia" && uploadedFiles.length) ||
        showModal === "addPost") && (
        <PostModalAddPost
          uploadedFiles={uploadedFiles}
          editorText={editorText}
          setEditorText={setEditorText}
          error={error}
        />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

const Error = styled.div`
  color: red;
`;

export default DropZone;
