/**
 * The small tab that has the logout button
 */

import React from "react";
import { BiLogOut } from "react-icons/bi";
import profile from "../../assets/images/profile-img.jpg";

const UserDetailsModal = () => {
  return (
    <div className="w-[90vw] max-w-[250px] bg-white rounded-md shadow-md absolute top-[105%] right-0 user-details">
      <div className="flex items-center gap-3 flex-wrap p-4">
        <img
          src={profile}
          alt="username"
          className="w-[80px] h-[80px] object-center object-cover rounded-full"
        />
        <div>
          <h2 className="text-mainBlue font-bold">Adejare Daniel</h2>
          <p className="text-[14px]">adejaredaniel12@gmail.com</p>
        </div>
      </div>
      <p className="p-4 text-mainBlue cursor-pointer">
        <span className="align-middle inline-block pr-1">
          <BiLogOut />
        </span>
        Logout
      </p>
    </div>
  );
};

export default UserDetailsModal;
