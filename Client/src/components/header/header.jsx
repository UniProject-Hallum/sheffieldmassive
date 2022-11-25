import { useNavigate } from "react-router-dom";
import { useUser } from "../../auth/useUser";
import React from "react";

function Header() {
  const navigate = useNavigate();
  const user = useUser();
  let isLoggedIn = false;

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    navigate(0);
  };

  if (user) {
    isLoggedIn = true;
  }

  return (
    <header>
      <div className="sm:flex justify-between item-center text-center w-full sm:px-20 mt-4">
        <a href="/">
          <h1 className="font-sans font-bold text-5xl ml-3 pt-2">
            HandyMan<span className="text-cyan-600">4u</span>
          </h1>
        </a>
        <div className="sm:flex pt-5">
          {isLoggedIn ? (
            <button onClick={logout} className="font-medium">
              {" "}
              logout
            </button>
          ) : (
            <>
              <a href="/login">
                <button className="py-1 bg-[#fccc35] px-5 border rounded-xl  hover:bg-[#606060] hover:text-white hover:scale-110">
                  Login
                </button>
              </a>
              <a href="/register">
                <button className="text-white py-1 bg-[#606060] px-5 border rounded-xl hover:bg-[#fccc35] hover:scale-110">
                  Register
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
