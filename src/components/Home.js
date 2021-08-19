import React, { useState } from "react";
import "../index.css";
import "react-slidedown/lib/slidedown.css";
import { useGlobalContext } from "../Context";
import Sidebar from "./Sidebar";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { bgImageArray } from "../data";
import { useEffect } from "react";
const Home = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Sidebar />
      <div className="py-1 text-gray-500 bg-white w-screen flex justify-center items-center fixed top-0 left-0 z-20">
        <a
          href="https://github.com/mishra811/tesla-clone"
          className="text-md  text-light underline pt-3 pb-3"
        >
          Build with React by Kundan Mishra
        </a>
      </div>
      <Model />
    </main>
  );
};

const Model = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setIndex(Math.floor(Math.random() * 5));
    }, 2000);
  }, []);
  return (
    <main
      className={`bg-${bgImageArray[index]} w-screen h-screen bg-no-repeat bg-cover sm:bg-cover pl-4 pr-3 transition-all overflow-x-hidden`}
    >
      <section className="fixed top-14 w-screen">
        <Navbar />
        <Fade bottom>
          <article data-aos="fade-down">
            <h1 className="text-center text-4xl  font-semibold text-gray-700 -mt-3 tracking-wider sm:text-5xl transition-all">
              {bgImageArray[index].split("-").join(" ")}
            </h1>
            <div className="text-center">
              <h1 className="text-gray-600 mt-1">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline hover:text-black transition-all"
                >
                  Touchless Delivery
                </a>
              </h1>
            </div>
            <div className="flex flex-col  mt-64 sm:mt-72 justify-center items-center sm:flex-row mr-10">
              <div className="w-11/12  sm:w-72 py-2 text-center bg-gray-550 text-white rounded-3xl mb-4 sm:mb-0 sm:mr-8 cursor-pointer">
                CUSTOM ORDER
              </div>
              <div className="w-11/12  sm:w-72 py-2 text-center bg-gray-150 text-gray-700 rounded-3xl sm:ml-8 cursor-pointer">
                EXISTING INVENTORY
              </div>
            </div>
            <div className="flex justify-center items-center   transform scale-105">
              <div className="w-20 h-20 mb-2 pl-6 pr-6 py-5 animate-bounce mt-3">
                <img
                  src="https://image.flaticon.com/icons/png/128/271/271210.png"
                  alt=""
                  className="w-10"
                />
              </div>
            </div>
          </article>
        </Fade>
      </section>
    </main>
  );
};

export const Navbar = () => {
  const { showSidebar } = useGlobalContext();
  return (
    <div className="flex justify-between items-center -mt-3 ">
      <div className=" ">
        <img
          src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg"
          alt=""
          className="w-32"
        />
      </div>
      <div className="lg:flex lg:items-center justify-evenly  hidden text-sm  ">
        {bgImageArray.map((item, index) => {
          return (
            <Link
              to={`/${index}`}
              key={index}
              className="px-5 hover:bg-gray-450 py-2 hover:rounded-lg cursor-pointer transition-all"
            >
              {item.split("-").join(" ")}
            </Link>
          );
        })}
      </div>
      <div className="md:flex md:items-center justify-evenly text-sm font-semibold pr-5 ">
        <Link
          to="/"
          className="px-5 hidden lg:block hover:bg-gray-450 py-2 cursor-pointer transition-all"
        >
          Shop
        </Link>
        <Link
          to="/"
          className="px-5 hidden lg:block hover:bg-gray-450 py-2 transition-all cursor-pointer"
        >
          Account
        </Link>
        <h1
          className="px-5 bg-gray-450 py-2 rounded-lg cursor-pointer mr-2"
          onClick={showSidebar}
        >
          Menu
        </h1>
      </div>
    </div>
  );
};
export default Home;
