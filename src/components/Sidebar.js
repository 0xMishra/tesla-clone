import React from "react";
import "../index.css";
import { useGlobalContext } from "../Context";
import { bgImageArray } from "../data";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { sidebar, hideSidebar, width, display } = useGlobalContext();

  return (
    <>
      <div
        className={`fixed  top-0 flex ${display}  bg-gray-650  z-50 transition-all ${width}`}
        onClick={hideSidebar}
      >
        <div className=" w-screen h-screen "></div>
        <div
          className={`bg-white  pl-5 pt-10 text-sm font-bold  ${sidebar} transition-all `}
        >
          <div className="flex justify-between items-centertransition-all">
            <h1 className="text-xl"></h1>
            <h1
              className="text-3xl cursor-pointer font-light pr-5 -mt-8 mb-8"
              onClick={hideSidebar}
            >
              x
            </h1>
          </div>
          <div className="h-max pl-3 sm:pt-4  flex flex-col text-lg sm:text-sm pt-1">
            {bgImageArray.map((item, index) => {
              return (
                <Link
                  to={`/${index}`}
                  key={index}
                  className="text-md font-medium tracking-wider pb-3 cursor-pointer hover:bg-gray-650 pt-3  pl-4 transition-all rounded-lg"
                >
                  {item.split("-").join(" ")}
                </Link>
              );
            })}

            <h1 className="text-md font-medium tracking-wider pb-3 pt-3 hover:bg-gray-650 pl-4 cursor-pointer">
              Existing Inventory{" "}
            </h1>
            <h1 className="text-md font-medium tracking-wider pt-3 pb-3  hover:bg-gray-650 pl-4 cursor-pointer">
              Used Inventory{" "}
            </h1>

            <Link
              to="/"
              className="text-md font-medium tracking-wider pt-3 pb-3 pl-4  hover:bg-gray-650 cursor-pointer"
            >
              Shop{" "}
            </Link>
            <Link
              to="/"
              className="text-md font-medium tracking-wider pt-3 pb-3 pl-4  hover:bg-gray-650 cursor-pointer"
            >
              Account{" "}
            </Link>
            <Link
              to="/"
              className="text-md font-medium tracking-wider pt-3 pb-3 pl-4  hover:bg-gray-650 cursor-pointer"
            >
              Home{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
