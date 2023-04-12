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
      console.error(error);
      errorRes(error.response.data.err);
    }
  };

  const login = async (email, password) => {
    loadingRes("Logging you in");

    try {
      const { data } = await http.post("/auth/login", { email, password });

      successRes("Login Successful");

      return data.user;
    } catch (error) {
      console.error(error);
      errorRes(error.response.data.err);
    }
  };

  const logout = async () => {
    loadingRes("Logging you out");

    try {
      const { data } = await http.get("/auth/logout");

      successRes("Logged out successfully");

      return data?.message;
    } catch (error) {
      console.error(error);
      errorRes(error.response.data.err);
    }
  };

  return { register, login, logout };
};
