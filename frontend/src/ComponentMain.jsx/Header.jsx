import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SiGreatlearning } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from "@/redux/user/userSlice";
import { CiLight } from "react-icons/ci";
import ToastNotification from "@/utils/ToastNotification";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    setMenuOpen(false)
    setMobileMenuOpen(false)
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        dispatch(resetState());
        ToastNotification("Logout successful! Navigating to login.", "success");
        navigate("/login", { replace: true });
       // Ensure navigation replaces history
      } else {
        ToastNotification("Logout failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      ToastNotification("An error occurred during logout. Please try again.", "error");
    }
  };

  return (
    <div className="w-full bg-white ">
      {/* Desktop and Tablet View */}
      <div className="hidden lg:flex items-center justify-between p-3 lg:px-36 sm:px-4">
        <Link to="/">
          <div className="flex items-center gap-3">
            <SiGreatlearning className="font-extrabold text-3xl" />
            <span className="text-2xl font-semibold">E-Learning</span>
          </div>
        </Link>

        {currentUser ?(
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={currentUser?.profilePicture || "/default-profile.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                onClick={handleOpen}
              />
              {menuOpen && (
                <div className="absolute top-full w-40 mt-2 bg-white shadow-md rounded flex flex-col">
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/my-learning">My Learning</Link>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/profile">Edit Profile</Link>
                  </div>
                  {currentUser?.role=="instructor"?(
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/dashboard">DashBoard</Link>
                  </div>
                  ):""}
                
                  <div
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
            <CiLight className="font-semibold text-3xl cursor-pointer" />
          </div>
        ):(
          <div className="flex items-center gap-3">
          <Link to="/login"  className="font-medium border-2 px-2 py-1 rounded-full">Login</Link>
          <Link to="/login" className="font-medium border-2 px-2 py-1 rounded-full">Signup</Link>
          </div>
        )}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between p-3 px-4">
        <Link to="/">
          <div className="flex items-center gap-3">
            <SiGreatlearning className="font-extrabold text-2xl" />
            <span className="text-xl font-semibold">E-Learning</span>
          </div>
        </Link>

        <Menu
          className="text-3xl cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {mobileMenuOpen && (
        <div className="bg-white shadow-md flex flex-col p-4 space-y-4 lg:hidden">
          {currentUser ? (
            <>
              <div className="flex items-center gap-4">
                <img
                  src={currentUser?.profilePicture || "/default-profile.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                  onClick={handleOpen}
                />
              </div>
              {menuOpen && (
                <div className="bg-white shadow-md rounded flex flex-col">
                  <Link to="/my-learning" className="px-4 py-2 hover:bg-gray-100">
                    My Learning
                  </Link>
                  <button
                    className="text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            
            </>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
