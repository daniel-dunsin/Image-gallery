import React from "react";
import FolderImagesList from "../components/containers/folderImages/folderImagesList";
import Navbar from "../components/containers/navbar";
import { useGetFolderImages, addFolderImages } from "../api/hooks/useImages";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { deleteImage } from "../api/hooks/useImages";
import { deleteFolder } from "../api/hooks/useFolders";

const FolderImages = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: folder, isLoading, isError, refetch } = useGetFolderImages(id);

  const addImagesMutation = useMutation({
    mutationKey: "addFolderImages",
    mutationFn: async (e) => {
      await addFolderImages(e);
      refetch();
    },
  });

  const deleteImageMutation = useMutation({
    mutationKey: "delete-images",
    mutationFn: async (id) => {
      await deleteImage(id);
      refetch();
    },
  });

  const deleteFolderAsync = async () => {
    const message = await deleteFolder(id);
    if (message) {
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <FolderImagesList
        folder={folder}
        deleteImageMutation={deleteImageMutation}
        addImagesMutation={addImagesMutation}
        deleteFolder={deleteFolderAsync}
      />
    </React.Fragment>
  );
};

export default FolderImages;
