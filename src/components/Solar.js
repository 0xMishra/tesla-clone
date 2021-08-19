import React from "react";
import { useParams } from "react-router";
import Fade from "react-reveal/Fade";
const Solar = () => {
  const { id } = useParams();
  return <div>{id > 3 && <SolarComponent />}</div>;
};

const SolarComponent = () => {
  return (
    <div className="flex flex-col">
      <Fade top>
        <img
          src="https://www.tesla.com/sites/default/files/solarroof/v3/design/solar-roof_design_M.jpg"
          alt=""
          className="w-screen h-96 md:72 object-cover"
        />
      </Fade>
      <Fade left>
        <SolarProperty
          head="Design"
          title="A Beautiful Roof"
          para="Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling."
        />
      </Fade>
      <Fade bottom>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ce2a02fa-6b9b-4c0a-aa3b-9ebe5cfeb03b/bvlatuR/std/800x950/SR-Value-M"
          alt=""
          className="w-screen h-96 md:72 object-cover"
        />
      </Fade>
      <Fade right>
        <SolarProperty
          head="Value"
          para="Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill."
          title="Pay Less for Electricity"
        />
      </Fade>
      <video className="w-screen h-96" controls>
        <source src="https://www.tesla.com/sites/default/files/solarroof/v3/durability/SolarRoof-Durability-Mobile-800x950.mp4" />
      </video>
      <Fade left>
        <SolarProperty
          head="Durability"
          title="Built to Last"
          para="Solar Roof tiles are more than three times stronger than standard roofing tiles and are engineered for all-weather protection. With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come."
        />
      </Fade>
      <div className="my-5"></div>
      <Fade right>
        <SolarProperty
          para="Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything."
          title="Trusted Expertise"
          head="Installation"
        />
      </Fade>
      <video className="w-screen h-96" controls>
        <source src="https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Design.mp4" />
      </video>
      <Fade top>
        <img
          src="https://www.tesla.com/sites/default/files/solarroof/v3/inverter/Inverter_V8_M.jpg"
          alt=""
          className="w-screen h-96 md:72 object-cover mt-20"
        />
      </Fade>
      <Fade left>
        <SolarProperty
          para="Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable. With built-in connectivity, Tesla Solar Inverter will continue to improve with each over-the-air software update."
          title="Maximum Solar Production"
          head="Efficiency"
        />
      </Fade>
      <Fade bottom>
        <img
          src="https://www.tesla.com/sites/default/files/solarroof/v3/control/SR_App_Mobile.jpg"
          alt=""
          className="w-screen h-96 md:72 object-cover"
        />
      </Fade>
      <Fade right>
        <SolarProperty
          para="With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access"
          title="Monitor and Optimize"
          head="Control"
        />
      </Fade>
      <Fade top>
        <img
          src="https://www.tesla.com/sites/default/files/solarroof/specs/PanelMeasure_mobile2x.png"
          alt=""
          className="w-screen h-96 md:72 object-cover bg-black "
        />{" "}
      </Fade>
      <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white pb-4">
        <h1 className="text-xs cursor-pointer px-4 py-2">Tesla @2021</h1>
        <h1 className="text-xs cursor-pointer px-4 py-2">Privacy & Legal</h1>
        <h1 className="text-xs cursor-pointer px-4 py-2">Careers</h1>
        <h1 className="text-xs px-4 cursor-pointer py-2">News</h1>
      </div>
    </div>
  );
};

const SolarProperty = ({ head, title, para }) => {
  return (
    <div
      className={`px-10 bg-white pt-6 pb-6 flex flex-col md:flex-row md:justify-center md:items-center`}
    >
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
  );
};
export default Solar;
