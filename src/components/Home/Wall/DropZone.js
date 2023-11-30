import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

import { ButtonSecondary } from "../../Common/Buttons";

const DropZone = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
    let tempUploadedFiles = uploadedFiles;
    tempUploadedFiles.push(acceptedFiles);
    setUploadedFiles(tempUploadedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDrop,
    autoFocus: true,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
    },
    maxFiles: 3,
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />

      <img src="./images/uploadAssetBg.svg" alt="" />
      {isDragActive ? (
        <h2>Select files to begin or drag files here</h2>
      ) : (
        <h2>Select files to begin</h2>
      )}
      <p>Share images or a single video in your post.</p>
      <ButtonSecondary>Upload from computer</ButtonSecondary>

      <aside>
        <h4>Accepted files</h4>
        <ul>
          {uploadedFiles.length &&
            uploadedFiles.map((file) => (
              <li key={file[0].path}>
                {file[0].path} - {file[0].size} bytes
              </li>
            ))}
        </ul>
        <h4>Rejected files</h4>
      </aside>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DropZone;
