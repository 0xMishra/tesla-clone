import React from "react";
import { useParams } from "react-router";
import { Navbar } from "./Home";
import Fade from "react-reveal/Fade";
import { bgImageArray, images } from "../data";
import { modelsArr, infoModelArr } from "../data";
import { Link } from "react-router-dom";
const Models = () => {
  const { id } = useParams();
  const { head1, para1, head2, para2, head3, para3 } = modelsArr[id];

  return (
    <>
      <div className=" h-screen bg-black overflow-x-hidden">
        <ModelHeader id={id} />

        {id <= 3 && (
          <>
            <div
              className={`bg-modelSInterior w-screen h-mid bg-no-repeat  bg-cover sm:bg-cover overflow-x-hidden transition-all flex mt-5 justify-center `}
            >
              <div className=" text-2xl pt-20 font-semibold ">
                All-New Interior
              </div>
            </div>
            <Fade left>
              <ModelIntro
                url="https://tesla-cdn.thron.com/delivery/public/image/tesla/2a7b8898-d56d-47d9-9f0c-916cc2e4a279/bvlatuR/std/840x472/MS-Interior-Grid-A-Mobile"
                heading="Game from Anywhere"
                info="  Up to 10 teraflops of processing power enables in-car gaming on-par
            with today’s newest consoles. Wireless controller compatibility lets
            you game from any seat."
              />
            </Fade>
            <Fade right>
              <ModelIntro
                url="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop"
                heading="Stay Connected"
                info=" Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.."
              />
            </Fade>
            <Fade left>
              <ModelIntro
                url="https://tesla-cdn.thron.com/delivery/public/image/tesla/c49862d9-6501-4d04-8d39-1929fa019bc5/bvlatuR/std/840x472/MS-Interior-Grid-C-Mobile"
                heading="Your Best Audio System"
                info="A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.."
              />
            </Fade>
            <>
              <ModelIntro
                url="https://tesla-cdn.thron.com/delivery/public/image/tesla/bc361d94-167c-49cb-8e0a-5724ce9ed607/bvlatuR/std/840x472/MS-Interior-Grid-D-Mobile"
                heading="Real Storage"
                info="With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.."
              />
              <section className={`modelInfo${id}`}>
                <div className="flex  justify-center text-white text-center pt-56 md:pt-80 pb-5">
                  <div className="px-4 mx-2  mw-max md:px-4 md:mx-0">
                    <h1 className="text-xl font-bold text-center">{head1}</h1>
                    <h1 className="text-sm font-semibold ">{para1}</h1>
                  </div>
                  <div className="px-4 mx-2 w-max md:px-4 md:mx-0">
                    <h1 className="text-xl font-bold text-center">{head2}</h1>
                    <h1 className="text-sm font-semibold">{para2}</h1>
                  </div>
                  <div className="px-4 mx-2 w-max md:px-4 md;mx-0">
                    <h1 className="text-xl font-bold text-center">{head3}</h1>
                    <h1 className="text-sm font-semibold">{para3}</h1>
                  </div>
                </div>
              </section>
              {infoModelArr.map((item) => {
                return <Property key={item.id} {...item} />;
              })}
              <img
                src={images[id].url}
                alt=""
                className={`w-screen h-72 md:h-96  object-cover`}
              />
              <BottomInfo id={id} />
            </>
          </>
        )}
      </div>
    </>
  );
};
const ModelIntro = ({ url, heading, info }) => {
  return (
    <Fade right>
      <div className="flex flex-col mt-20 lg:mx-20 md:items-center md:justify-center text-white sm:mx-5">
        <div className={`md:flex`}>
          <img
            src={url}
            alt=""
            className="w-screen h-4/5 md:w-mid sm:h-64 object-cover"
          />
          <div className="flex-col flex lg:mx-8 sm:mx-2">
            <h1 className="my-2 font-bold text-white text-xl  mx-5">
              {heading}
            </h1>
            <p className="mx-5 text-semibold tracking-tight lg:w-96 md:w-60">
              {info}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
const ModelHeader = ({ id }) => {
  return (
    <main className={`product${id}`}>
      <section className="relative top-2 w-screen">
        <Navbar />
        <ModelComponent modelName={bgImageArray[id]} id={id} />
      </section>
    </main>
  );
};
const ModelComponent = ({ modelName, id }) => {
  const { header, head1, para1, head2, para2, head3, para3, slogan } =
    modelsArr[id];
  return (
    <>
      {" "}
      <Fade bottom>
        <article>
          <h1 className="text-center text-4xl   text-gray-900 font-semibold  mt-8 tracking-wider sm:text-5xl transition-all">
            {modelName.split("-").join(" ")}
          </h1>
          <div className="text-center">
            <h1 className={`text-black mt-1 text-lg select-none underline`}>
              {header}
            </h1>
          </div>

          {slogan && (
            <div
              className={`text-xl font-semibold text-center mt-60 md:mt-72  text-white mb-4 select-none `}
            >
              {slogan}
            </div>
          )}
          <section className=" md:flex-row flex flex-col  justify-center items-center">
            <div className="flex  justify-between text-white text-center">
              <div className="px-4 mx-2  mw-max md:px-4 md:mx-0">
                <h1 className="text-xl font-bold text-center">{head1}</h1>
                <h1 className="text-sm font-semibold ">{para1}</h1>
              </div>
              <div className="px-4 mx-2 w-max md:px-4 md:mx-0">
                <h1 className="text-xl font-bold text-center">{head2}</h1>
                <h1 className="text-sm font-semibold">{para2}</h1>
              </div>
              <div className="px-4 mx-2 w-max md:px-4 md;mx-0">
                <h1 className="text-xl font-bold text-center">{head3}</h1>
                <h1 className="text-sm font-semibold">{para3}</h1>
              </div>
            </div>
            <div className="flex flex-col   justify-center items-center sm:flex-row mr-10 w-11/12 md:w-72">
              <Link
                to="/2"
                className="w-11/12  md:w-72 py-2 text-center bg-transparent border-4 border-white ml-4 text-white font-semibold rounded-3xl mb-4 sm:mb-0 sm:mr-8 mt-5 md:mt-0 cursor-pointer transition-all hover:bg-white hover:text-black"
              >
                ORDER NOW
              </Link>
            </div>
          </section>
        </article>
      </Fade>
    </>
  );
};

const Property = ({ head, title, para }) => {
  return (
    <Fade top>
      <div className="px-10 bg-white py-16 md:flex  md:justify-center md:items-center">
        <div className="w-max md:ml-32 flex flex-col">
          <h1 className="font-light text-2xl">{head}</h1>
          <h1 className="font-semibold text-2xl mb-3 ">{title}</h1>
          <div className="w-11/12  md:w-40 py-2 text-center bg-transparent border-4 border-black hover:text-white font-semibold rounded-3xl  cursor-pointer transition-all hover:bg-black hidden md:block">
            ORDER NOW
          </div>
        </div>
        <p className="lg:mx-32 lg:w-11/12 md:mx-12">{para}</p>
        <div className="w-11/12  md:w-96 py-2 text-center bg-transparent border-4 border-black ml-4 md:hidden hover:text-white font-semibold rounded-3xl mb-4 sm:mb-0 sm:mr-8 mt-5 md:mt-0 cursor-pointer transition-all hover:bg-black ">
          ORDER NOW
        </div>
      </div>
    </Fade>
  );
};

const BottomInfo = ({ id }) => {
  return (
    <>
      <div className="flex flex-col px-4 pt-16 bg-white justify-between md:items-center pb-6">
        <h1 className="text-3xl font-semibold ml-6 mb-5">
          {bgImageArray[id].split("-").join(" ")}
        </h1>
        <Fade bottom>
          <div className="flex sm:flex-row flex-col">
            <Link
              to="/4"
              className="w-11/12 sm:w-72 md:w-80 lg:w-96 py-2 text-center bg-transparent border-2 border-black ml-4 hover:text-white font-normal rounded-3xl mb-4 sm:mb-0 sm:mr-8 mt-5 md:mt-0 cursor-pointer transition-all hover:bg-black "
            >
              ORDER NOW
            </Link>
            <Link
              to="/3"
              className="w-11/12 sm:w-72 md:w-80 py-2 text-center bg-transparent border-2 border-black ml-4 hover:text-white font-normal rounded-3xl mb-4 sm:mb-0 sm:mr-8 mt-5 md:mt-0 cursor-pointer transition-all hover:bg-black lg:w-96"
            >
              COMPARE
            </Link>
          </div>
        </Fade>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white pb-4">
        <h1 className="text-xs cursor-pointer px-4 py-2">Tesla @2021</h1>
        <h1 className="text-xs cursor-pointer px-4 py-2">Privacy & Legal</h1>
        <h1 className="text-xs cursor-pointer px-4 py-2">Careers</h1>
        <h1 className="text-xs px-4 cursor-pointer py-2">News</h1>
      </div>
    </>
  );
};
export default Models;
