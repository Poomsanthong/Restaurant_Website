import Logo from "../assets/chang_thai_logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200">
      <div className="container py-3 sm:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-[50%] p-1 sm:p-2 ">
            <a href="#" className="flex items-center px-10">
              <img
                src={Logo}
                alt="Logo"
                className="w-32 sm:w-24 md:w-36 lg:w-40 xl:w-40 h-auto"
              />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <DarkMode />
            <ul className="hidden sm:flex gap-6 text-lg font-medium">
              <li>
                <a
                  href=""
                  className="inline-block py-4 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="inline-block py-4 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="inline-block py-4 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="inline-block py-4 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="flex items-center bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white py-2 px-4 rounded-full transition-all duration-300 shadow-lg">
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
