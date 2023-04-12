import { QueryClient, useQuery } from "react-query";
import { http } from "../../axios.config";
import { errorRes, loadingRes, successRes } from "../responses";

export const useGetAllFolders = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: "get-folders",
    queryFn: async () => {
      loadingRes("Fetching folders");
      const { data } = await http.get("/folder");

      return data?.folders;
    },
  });

  return data;
};

export const addFolder = async (name, cover) => {
  const queryClient = new QueryClient();

  loadingRes("Adding folder");
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("cover", cover);

    const { data } = await http.post("/folder", formData);

    successRes("Folder added successfully");

    await queryClient.invalidateQueries("get-folders");
    return data?.folders;
  } catch (error) {
    errorRes(error.response.data.err);
  }
};
