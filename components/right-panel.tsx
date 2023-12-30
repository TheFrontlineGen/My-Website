import React, { useState } from "react";
import {
  PiChat,
  PiStar,
  PiHeart,
  PiHouse,
  PiGraduationCapLight,
  PiBrain,
} from "react-icons/pi";
import socialMediaConfig from "../config.json";

const RightPanel = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <>
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="mt-2">
              {socialMediaConfig.profile && socialMediaConfig.profile.about && (
                <>{socialMediaConfig.profile.about}</>
              )}
            </p>
            {/* <h1 className="text-3xl font-bold mt-5">What I Do</h1>
            <div className="mt-2 flex flex-col space-x-2">
              <div className="w-[45%] inline-flex col-span-1 bg-gradient-to-r from-red-600 to-indigo-600 p-3 rounded-3xl">
                asd
              </div>
              <div className="w-[45%] inline-flex col-span-1 bg-gradient-to-r from-red-600 to-indigo-600 p-3 rounded-3xl">
                asd
              </div>
            </div> */}
          </>
        );
      case "experience":
        return <p>Experience Content</p>;
      case "education":
        return <p>Education Content</p>;
      case "blog":
        return <p>Blog Content</p>;
      case "refs":
        return <p>Refs Content</p>;
      case "socials":
        return <p>Socials Content</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-2/3 hidden md:flex flex-col">
      {/* First element on the right */}
      <div className="mb-4 bg-gray-200 rounded-3xl p-4 h-auto">
        <div className="flex space-x-4 w-full justify-center">
          <button
            className={`${
              activeSection === "overview"
                ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white"
                : "bg-gray-300 text-black/75"
            } px-4 h-20 w-20 py-3 font-semibold flex flex-col items-center rounded-xl`}
            onClick={() => setActiveSection("overview")}
          >
            <PiHouse className="h-11 w-11" />
            <span className="text-sm mt-1">Overview</span>
          </button>
          <button
            className={`${
              activeSection === "experience"
                ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white"
                : "bg-gray-300 text-black/75"
            } px-4 h-20 w-20 py-3 font-semibold flex flex-col items-center rounded-xl`}
            onClick={() => setActiveSection("experience")}
          >
            <PiBrain className="h-11 w-11 " />
            <span className="text-sm mt-1">Experience</span>
          </button>
          <button
            className={`${
              activeSection === "education"
                ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white"
                : "bg-gray-300 text-black/75"
            } px-4 h-20 w-20 py-3 font-semibold flex flex-col items-center rounded-xl`}
            onClick={() => setActiveSection("education")}
          >
            <PiGraduationCapLight className="h-11 w-11 " />
            <span className="text-sm mt-1">Education</span>
          </button>
          <button
            className={`${
              activeSection === "blog"
                ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white"
                : "bg-gray-300 text-black/75"
            } px-4 h-20 w-20 py-3 font-semibold flex flex-col items-center rounded-xl`}
            onClick={() => setActiveSection("blog")}
          >
            <PiChat className="h-11 w-11 " />
            <span className="text-sm mt-1">Blog</span>
          </button>
          <button
            className={`${
              activeSection === "refs"
                ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white"
                : "bg-gray-300 text-black/75"
            } px-4 h-20 w-20 py-3 font-semibold flex flex-col items-center rounded-xl`}
            onClick={() => setActiveSection("refs")}
          >
            <PiStar className="h-11 w-11 " />
            <span className="text-sm mt-1">Refs</span>
          </button>
          <button
            className={`${
              activeSection === "socials"
                ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white"
                : "bg-gray-300 text-black/75"
            } px-4 h-20 w-20 py-3 font-semibold flex flex-col items-center rounded-xl`}
            onClick={() => setActiveSection("socials")}
          >
            <PiHeart className="h-11 w-11 " />
            <span className="text-sm mt-1">Socials</span>
          </button>
          {/* Add similar onClick handlers for other buttons */}
        </div>
      </div>

      {/* Second element on the right */}
      <div className="bg-gray-200 rounded-3xl p-5 pr-20 h-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default RightPanel;
