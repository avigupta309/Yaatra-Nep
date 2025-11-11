import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bus,
  User,
  LogOut,
  LogIn,
  Settings,
  Sun,
  MoonIcon,
  UserCog,
  User2,
  Settings2,
} from "lucide-react";
import { useAuth } from "../../hooks/Auth";
import axios from "axios";
import { toast } from "react-toastify";

export function Header() {
  const { logged, theme, setTheme, authUser, setLogged } = useAuth();
  const authRole = authUser?.role;
  console.log(authRole);
  console.log(authUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const result = await axios.get("http://localhost:3000/api/logout", {
      withCredentials: true,
    });
    console.log(result.data);
    toast.error(`Log Out Sucessflly mr/ms ${authUser?.fullName}`);
    setTimeout(() => {
      setLogged(false);
      navigate("/login");
    }, 1000);
  };

  function renderRole() {
    console.log(authRole);
    if (authRole === "admin") {
      return (
        <Link
          to={"/##"}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <UserCog className="h-4 w-4 mr-2" />
          Admin
        </Link>
      );
    } else if (authRole === "operator") {
      return (
        <Link
          to={"/##"}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <Settings2 className="h-4 w-4 mr-2" />
          User
        </Link>
      );
    } else {
      return (
        <Link
          to={"/##"}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <User2 className="h-4 w-4 mr-2" />
          User
        </Link>
      );
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Yaatra */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <Bus className="h-8 w-8" />
            <span className="text-2xl font-bold">Yaatra</span>
          </Link>

          {/* Center: Styled text */}
          <div className="hidden md:block text-gray-700 text-lg font-medium">
            Your Journey, Our Passion
          </div>

          {/* Right: About Us + User Dropdown */}
          <div className="flex items-center space-x-6">
            <Link
              to="/about-us"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>

            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center p-2 rounded-full hover:bg-gray-100 transition"
              >
                <User className="h-6 w-6 text-gray-700" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                  {logged ? (
                    <>
                      {console.log(logged)}
                      <Link
                        to="/profile"
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          setTheme(!theme);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        {theme ? (
                          <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                        ) : (
                          <MoonIcon className="h-4 w-4 mr-2 text-blue-700" />
                        )}
                        Toggle Theme
                      </button>

                      {renderRole()}

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <div>
                      <Link
                        to="/login"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Sign Up
                      </Link>
                      <button
                        onClick={() => {
                          setTheme(!theme);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        {theme ? (
                          <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                        ) : (
                          <MoonIcon className="h-4 w-4 mr-2 text-blue-700" />
                        )}
                        Toggle Theme
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
