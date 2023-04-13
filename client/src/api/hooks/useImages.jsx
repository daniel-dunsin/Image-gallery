import { QueryClient, useQuery } from "react-query";
import { http } from "../../axios.config";
import { errorRes, loadingRes, successRes } from "../responses";

export const useGetFolderImages = (id) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "get-folder-images",
    queryFn: async () => {
      const { data } = await http.get("/image/" + id);
      return data?.folder;
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export const addFolderImages = async (e) => {
  const queryClient = new QueryClient();

  const folderId = e.target.name;

  const formData = new FormData();

  for (let i = 0; i < e.target.files.length; i++) {
    formData.append("images[]", e.target.files[i]);
  }

  loadingRes("Adding images");

  try {
    const { data } = await http.post("/image/" + folderId, formData);

    successRes("Images added successfully");

    queryClient.invalidateQueries("get-folder-images");

    return data?.folders;
  } catch (error) {
    errorRes(error.response.data.err);
  }
};

export const deleteImage = async (id) => {
  loadingRes("Deleting Image");
  try {
    await http.delete("/image/" + id);
    successRes("Image Deleted Successfully");
  } catch (error) {
    errorRes(error.response.data.err);
  }
};
