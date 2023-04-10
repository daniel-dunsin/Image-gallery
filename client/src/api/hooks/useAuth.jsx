import { errorRes, loadingRes, successRes } from "../responses";
import { http } from "../../axios.config";

export const useAuth = () => {
  const register = async (email, password, firstname, lastname, dp) => {
    loadingRes("Creating your account");

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("dp", dp);

    try {
      const { data } = await http.post("/auth/register", formData);
      successRes("Account Created Successfully");
      return data.user;
    } catch (error) {
      console.log(error);
      errorRes(error.response.data.err);
    }
  };

  return { register };
};
