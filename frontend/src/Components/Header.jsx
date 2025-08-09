import { MdMail } from "react-icons/md";
import logo from "../assets/HeaderImages/Sree Kalai Printing Press Logo - Copy.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import iso from "../assets/FooterImages/iso.jpg";
import ieko from "../assets/FooterImages/oeko tex.jpg";
import gots from "../assets/FooterImages/gots.jpg";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="bg-[#00A183] text-white flex
       text-center justify-between   p-2 lg:p-1 lg:px-2 "
      >
        <div className="flex items-center gap-2">
          <MdMail className="text-lg" />
          <a href="mailto:kalaiprinting@gmail.com" className="hover:underline">
            kalaiprinting@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lg" />
          <a href="tel:9361011583" className="hover:underline">
            9361011583
          </a>
        </div>
      </div>
      <div className="flex  justify-between relative py-2 px-4">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-[8rem] h-auto  " />
          </Link>
        </div>
        <div className="flex gap-1">
          <img src={ieko} alt="" className="w-22" />
          <img src={iso} alt="" className="w-15 " />
          <img src={gots} alt="" className="w-15 " />
        </div>
        <div className="lg:flex hidden tracking-wide text-base font-medium   w-[70%] gap-10 items-center justify-end">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `  ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `  ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `  ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            CONTACT US
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `  ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            BLOGS
          </NavLink>
        </div>
        <div
          onClick={() => setActive(true)}
          className="cursor-pointer lg:hidden flex items-center z-50 hover:text-[#00A183]"
        >
          <MdMenu className="text-2xl" />
        </div>
        {active && (
          <div
            className="fixed inset-0   backdrop-blur-sm lg:backdrop-blur-none  z-30 transition-opacity duration-300"
            onClick={() => setActive(false)}
          />
        )}

        <div
          className={`fixed py-[40px] top-0 lg:hidden left-0 h-full bg-white w-[60%] z-40 transform ${
            active ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out shadow-md`}
        >
          <div className="flex justify-between items-center px-4 ">
            <Link to="/" onClick={() => setActive(false)} >
              <img src={logo} alt="Logo" className="w-[8rem]" />
            </Link>
            <MdClose
              onClick={() => setActive(false)}
              className="text-2xl cursor-pointer text-[#00A183]"
            />
          </div>
          <div className="flex flex-col tracking-wider gap-4 p-6 text-lg font-medium">
            <NavLink
              to="/"
              onClick={() => setActive(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-[#00A183]" : "text-black"
                } hover:text-[#00A183]`
              }
            >
              <MdHome /> HOME
            </NavLink>

            <NavLink
              to="/about-us"
              onClick={() => setActive(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-[#00A183]" : "text-black"
                } hover:text-[#00A183]`
              }
            >
              <MdInfo /> ABOUT US
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setActive(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-[#00A183]" : "text-black"
                } hover:text-[#00A183]`
              }
            >
              <MdMiscellaneousServices /> SERVICES
            </NavLink>

            <NavLink
              to="/contact-us"
              onClick={() => setActive(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-[#00A183]" : "text-black"
                } hover:text-[#00A183]`
              }
            >
              <MdContactMail /> CONTACT US
            </NavLink>

            <NavLink
              to="/blogs"
              onClick={() => setActive(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-[#00A183]" : "text-black"
                } hover:text-[#00A183]`
              }
            >
              <FaImages /> BLOGS
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
