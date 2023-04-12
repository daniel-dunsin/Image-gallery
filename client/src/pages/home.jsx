/**
 * Lists all the folders a user has created
 */

import React from "react";
import AddFolderModal from "../components/containers/home/addFolderModal";
import FoldersList from "../components/containers/home/foldersList";
import Navbar from "../components/containers/navbar";
import { useGlobalContext } from "../context";
import { useGetAllFolders } from "../api/hooks/useFolders";

const Home = () => {
  const { addFolderModalOpen } = useGlobalContext();

  const data = useGetAllFolders();

  return (
    <React.Fragment>
      <Navbar />
      {addFolderModalOpen && <AddFolderModal />}
      <FoldersList folders={data} />
    </React.Fragment>
  );
};

export default Home;
