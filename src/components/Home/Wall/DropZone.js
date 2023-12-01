import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

import { ButtonSecondary } from "../../Common/Buttons";
import PostModalAddPost from "./PostModalAddPost";

const DropZone = (props) => {
  const editorText = props.editorText;
  const setEditorText = props.setEditorText;
  const uploadedFiles = props.uploadedFiles;
  const setUploadedFiles = props.setUploadedFiles;

  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
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
    setError("");
    
    if (file.size > 5000000) {
      setError("Too big file, please select smaller one!");
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
    props.closeModal(new Event("click"));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

      {!uploadedFiles.length && (
        <Container {...getRootProps()}>
          <img src="./images/uploadAssetBg.svg" alt="" />
          {isDragActive ? (
            <h2>Select files to begin or drag files here</h2>
          ) : (
            <h2>Select files to begin</h2>
          )}
          <p>Share images or a single video in your post.</p>
          <ButtonSecondary>Upload from computer</ButtonSecondary>

          {error && <Error>{error}</Error>}
        </Container>
      )}

      {!!uploadedFiles.length && (
        <PostModalAddPost
          uploadedFiles={uploadedFiles}
          editorText={editorText}
          setEditorText={setEditorText}
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
