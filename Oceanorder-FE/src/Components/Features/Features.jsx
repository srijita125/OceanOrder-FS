import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { ImPower } from "react-icons/im";
import { TiTick } from "react-icons/ti";

import Feature from "../../assets/Images/feature.jpeg";

const Features = () => {
  return (
    <div
      className="w-full  bg-cover md:flex gap-12 items-start justify-center shadow-xl md:justify-between py-10 px-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Feature})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100%",
        width: "full",
        marginBottom: "50px",
      }}
    >
      <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className="rounded-full border-8 border-amber-400 p-4">
          <VscWorkspaceTrusted
            style={{
              fontSize: "50px",
              color: "white",
            }}
          />
        </div>
        <h3 className="text-3xl font-bold text-white">Safe</h3>
        <p className="text-white">
          Our products are secure and private out-of-the-box
        </p>
      </div>
      <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className="rounded-full border-8 border-amber-400 p-4">
          <ImPower
            style={{
              fontSize: "50px",
              color: "white",
            }}
          />
        </div>
        <h3 className="text-3xl font-bold text-white">Efficient</h3>
        <p className="text-white">
          Feel good about your wallet and the environment
        </p>
      </div>
      <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className="rounded-full border-8 border-amber-400 p-4">
          <TiTick
            style={{
              fontSize: "50px",
              color: "white",
            }}
          />
        </div>
        <h3 className="text-3xl font-bold text-white">Proven</h3>
        <p className="text-white">Leading the Smart Home world for 10 years</p>
      </div>
    </div>
  );
};

export default Features;
