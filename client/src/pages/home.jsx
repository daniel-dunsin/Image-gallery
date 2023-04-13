/**
 * Lists all the folders a user has created
 */

import React from "react";
import AddFolderModal from "../components/containers/home/addFolderModal";
import FoldersList from "../components/containers/home/foldersList";
import Navbar from "../components/containers/navbar";
import { useGlobalContext } from "../context";
import { useGetAllFolders } from "../api/hooks/useFolders";
import { useMutation } from "react-query";
import { addFolder } from "../api/hooks/useFolders";

const Home = () => {
  const { addFolderModalOpen, setAddFolderModalOpen } = useGlobalContext();

  const { data, refetch } = useGetAllFolders();

  // Mutation for adding folder
  const mutation = useMutation({
    mutationKey: ["add-folder"],
    mutationFn: async ({ name, cover }) => {
      const data = await addFolder(name, cover);
      setAddFolderModalOpen(false);
      await refetch();
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      {addFolderModalOpen && <AddFolderModal mutation={mutation} />}
      <FoldersList folders={data} />
    </React.Fragment>
  );
};

export default Home;
