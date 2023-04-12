/**
 * The navbar - should display in all pages except login and signup
 */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../../assets/images/profile-img.jpg";
import UserDetailsModal from "../UI/userDetailsModal";

const Navbar = () => {
  const location = useLocation();
  const [userModal, setUserModal] = useState(false);

  const toggleModalOpened = () => setUserModal((prev) => !prev);
  const closeModal = () => setUserModal(false);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navbar}>
        {/* Navbar brand */}
        <Link to={"/"} className={styles.navbarBrand}>
          IMAGERY
        </Link>

        {/* Search Bar, Display only on home page */}
        {location.pathname === "/" && (
          <div className="flex-1 text-center hidden md:block">
            <input
              type="text"
              className="full-rounded-input"
              placeholder="Search Folder..."
            />
          </div>
        )}

        {/* User Details */}
        <div className="relative">
          <div className={styles.userDetails} onClick={toggleModalOpened}>
            <img
              src={user?.dp}
              loading="lazy"
              alt={user?.firstname}
              className={styles.userImg}
            />
            <p>
              {user?.firstname} {user?.lastname}
            </p>
          </div>
          {userModal && <UserDetailsModal />}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navContainer: "w-full p-6 bg-white border-b-[1px]",
  navbar:
    "w-full max-w-[1200px] mx-auto flex items-center gap-4 justify-between",
  navbarBrand:
    "text-mainBlue text-[1.4rem] font-bold tracking-wide cursor-pointer",
  userDetails: "flex items-center gap-2 cursor-pointer",
  userImg: "w-[35px] h-[35px] object-cover object-center rounded-full",
};

export default Navbar;
