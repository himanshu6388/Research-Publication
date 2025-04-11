import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const LoginBtn = () => {
  const dropdownRef = useRef(null);
  const loginRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      loginRef.current,
      {
        y: -50,
        opacity: 0,
        visibility: "hidden",
      },
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
      }
    );

    // Check if the user is logged in (using localStorage or sessionStorage)
    const token = localStorage.getItem("authToken"); // Example token, change as needed
    if (token) {
      setIsLoggedIn(true);
      const storedUserName = localStorage.getItem("userName"); // Example, change to your storage method
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    // Clear session or localStorage data
    localStorage.removeItem("authToken"); // Remove auth token
    localStorage.removeItem("userName"); // Remove username
    setIsLoggedIn(false);
    setUserName(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <div className="bg-[#24cfa6] text-white rounded-full w-8 h-8 flex items-center justify-center">
            {userName && userName.charAt(0).toUpperCase()}
          </div>
          <span className="text-white font-semibold">{userName}</span>
          <button
            onClick={handleLogout}
            className="py-2 px-6 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <NavLink
          to="/login"
          ref={loginRef}
          className="py-2 px-6 bg-[#24cfa6] text-black hover:bg-[#24cfa2] rounded"
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default LoginBtn;
