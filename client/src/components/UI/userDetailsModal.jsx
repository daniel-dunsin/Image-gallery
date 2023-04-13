/**
 * The small tab that has the logout button
 */

import React from "react";
import { BiLogOut } from "react-icons/bi";
import profile from "../../assets/images/profile-img.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/hooks/useAuth";

const UserDetailsModal = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutUser = async () => {
    const message = await logout();
    if (message) {
      navigate("/login");
      localStorage.removeItem("user");
    }
  };

  return (
    <div className="w-[90vw] max-w-[250px] bg-white rounded-md shadow-md absolute top-[105%] right-0 user-details z-[999]">
      <div className="flex items-center gap-3 flex-wrap p-4">
        <img
          src={user?.dp}
          alt={user?.firstname}
          className="w-[80px] h-[80px] object-center object-cover rounded-full"
        />
        <div>
          <h2 className="text-mainBlue font-bold">
            {user?.firstname} {user?.lastname}
          </h2>
          <p className="text-[14px]">{user?.email}</p>
        </div>
      </div>
      <p className="p-4 text-mainBlue cursor-pointer" onClick={logoutUser}>
        <span className="align-middle inline-block pr-1">
          <BiLogOut />
        </span>
        Logout
      </p>
    </div>
  );
};

export default UserDetailsModal;
