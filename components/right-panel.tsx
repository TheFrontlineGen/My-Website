import React, { useState } from "react";
import { GrOverview } from "react-icons/gr";
import { PiBrain } from "react-icons/pi";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiChat, PiStar, PiHeart } from "react-icons/pi";

const RightPanel = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <p>Overview Content</p>;
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
            <GrOverview className="h-11 w-11" />
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
      <div className="bg-gray-200 rounded-3xl p-4 h-32">{renderContent()}</div>
    </div>
  );
};

export default RightPanel;
