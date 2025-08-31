import { MdMail } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Products } from "../Data/Products";

const Header = () => {
  const [active, setActive] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenSubCategory(null);
  };

  const toggleSubCategory = (sub) => {
    setOpenSubCategory(openSubCategory === sub ? null : sub);
  };

  return (
    <div className="sticky top-0 z-50">
      <div
        className="bg-[#00A183] text-white flex
       text-center justify-between    p-2 lg:p-1 lg:px-2 "
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
      <div className="flex  justify-between fixed py-1 px-2 sticky top-0 left-0  z-50 bg-white shadow-md">
        <div className="flex gap-10 ">
          <Link to="/">
            <img
              src="/images/BannersImg/SK_Logo.png"
              alt="Sree Kalai Printing Press Logo"
              className="w-[8rem] h-auto  "
            />
          </Link>
          <div>
            <img
              src="/images/BannersImg/oeko tex.jpg"
              alt="oeko tex"
              className="w-16"
            />
          </div>
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
            to="/products"
            className={({ isActive }) =>
              `  ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/infrastructure"
            className={({ isActive }) =>
              `  ${
                isActive ? "text-[#00A183]" : "text-black"
              } hover:text-[#00A183]`
            }
          >
            INFRASTRUCTURE
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
          className={`fixed py-[40px] top-0 lg:hidden left-0 h-full bg-white w-[80%] z-40 transform ${
            active ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out shadow-md`}
        >
          <div className="flex justify-between items-center px-4 ">
            <Link to="/" onClick={() => setActive(false)}>
              <img
                src="/images/BannersImg/SK_Logo.png"
                alt="Sree Kalai Printing Press Logo"
                className="w-[8rem]"
              />
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
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-[#00A183]"
                onClick={() => {
                  navigate("/products");
                  setActive(false);
                }}
              >
                <MdMiscellaneousServices /> PRODUCTS
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCategory("products");
                  }}
                  className="ml-auto"
                >
                  {openCategory === "products" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </div>

              {/* Show subcategories */}
              {openCategory === "products" && (
                <div className="ml-6 mt-2 flex flex-col gap-2 text-base">
                  {Products.map((category) => (
                    <div key={category.category}>
                      <div
                        className="flex items-center justify-between cursor-pointer hover:text-[#00A183]"
                        onClick={() => toggleSubCategory(category.category)}
                      >
                        {category.category}
                        {openSubCategory === category.category ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>

                      {/* Show items under category */}
                      {openSubCategory === category.category && (
                        <div className="ml-4 mt-1 flex flex-col gap-1 text-sm">
                          {category.items.map((item, index) => (
                            <div
                              key={item.id}
                              className="cursor-pointer hover:text-[#00A183] my-2"
                              onClick={() => {
                                navigate(`/product/${item.name}`);
                                setActive(false);
                              }}
                            >
                              {index + 1}.
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <NavLink
              to="/infrastructure"
              onClick={() => setActive(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive ? "text-[#00A183]" : "text-black"
                } hover:text-[#00A183]`
              }
            >
              <FaImages /> INFRASTRUCTURE
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
