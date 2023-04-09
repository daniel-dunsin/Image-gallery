/**
 * Lists all the folders a user has created
 */

import React from "react";
import AddFolderModal from "../components/containers/home/addFolderModal";
import FoldersList from "../components/containers/home/foldersList";
import Navbar from "../components/containers/navbar";
import { useGlobalContext } from "../context";

const Home = () => {
  const { addFolderModalOpen } = useGlobalContext();
  return (
    <React.Fragment>
      <Navbar />
      {addFolderModalOpen && <AddFolderModal />}
      <FoldersList />
    </React.Fragment>
  );
};

export default Home;
