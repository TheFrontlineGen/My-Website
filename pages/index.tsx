import type { NextPage } from "next";
import LeftPanel from "../components/left-panel";
import RightPanel from "../components/right-panel";

import { FaPhoneVolume } from "react-icons/fa6";

const Home: NextPage = () => {
  return (
    <div className=" bg-black w-screen h-screen">
      <div className="flex justify-center pt-32">
        {/* Left column */}
        <LeftPanel />

        {/* Right column */}
        <RightPanel />
      </div>
    </div>
  );
};

export default Home;
