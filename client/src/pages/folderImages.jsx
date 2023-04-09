import React from "react";
import FolderImagesList from "../components/containers/folderImages/folderImagesList";
import Navbar from "../components/containers/navbar";

const FolderImages = () => {
  return (
    <React.Fragment>
      <Navbar />
      <FolderImagesList />
    </React.Fragment>
  );
};

export default FolderImages;
