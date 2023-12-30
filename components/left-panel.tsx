import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonGroup from "./social-links";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import socialMediaConfig from "../config.json";

const LeftPanel = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="lg:w-[22%] w-full p-4 pt-0">
      {/* Content for the left column */}
      <div className="bg-gray-200 rounded-3xl p-0 py-4 h-auto flex justify-center relative">
        <Image
          src="/logo.jpg"
          height={120}
          width={120}
          quality={85}
          loading="eager"
          alt="Picture of Marshall"
          className="absolute top-[-60px] rounded-full"
        />
        <div className="mt-14 text-center w-full">
          <h1 className="text-xl font-bold w-full">
            {socialMediaConfig.profile.fullname || "Anonymous Person"}
          </h1>
          {socialMediaConfig.profile && socialMediaConfig.profile.jobtitle && (
            <p className="text-sm font-semibold w-full">
              {socialMediaConfig.profile.jobtitle}
            </p>
          )}
          <ButtonGroup />
          <div className="flex flex-col-reverse text-left py-1 divide-gray-400 mx-4 mb-4 text-black bg-gray-300 rounded-2xl px-3 divide-y divide-y-reverse mt-5">
            <div className="flex items-center space-x-3 py-2">
              <div className="bg-gradient-to-r from-red-600 to-indigo-600  h-11 flex justify-center w-11 drop-shadow-2xl px-2 py-2 font-semibold text-white items-center space-x-1 rounded-xl">
                <FaPhoneVolume className="h-5 w-5" />
              </div>
              <div className="flex flex-col m-0 p-0 py-1">
                <span className="text-sm font-semibold mb-0 pb-0">Phone</span>
                <span className="font-medium text-lg mt-0 pb-0">
                  +123 456 7890
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <div className="bg-gradient-to-r from-red-600 to-indigo-600  h-11 flex justify-center w-11 drop-shadow-2xl px-2 py-2 font-semibold text-white items-center space-x-1 rounded-xl">
                <MdEmail className="h-5 w-5" />
              </div>
              <div className="flex flex-col m-0 p-0 py-1">
                <span className="text-sm font-semibold mb-0 pb-0">Email</span>
                <span className="font-medium text-lg mt-0 pb-0">
                  hi@thefrontlinegen.com
                </span>
              </div>
            </div>
            {socialMediaConfig.profile && socialMediaConfig.profile.country && (
              <Link
                href={
                  "https://www.google.com/maps/search/" +
                  (socialMediaConfig.profile.region ||
                    socialMediaConfig.profile.country)
                }
              >
                <div className="flex items-center space-x-3 py-2">
                  <div className="bg-gradient-to-r from-red-600 to-indigo-600  h-11 flex justify-center w-11 drop-shadow-2xl px-2 py-2 font-semibold text-white items-center space-x-1 rounded-xl">
                    <FaMapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col m-0 p-0 py-1">
                    <span className="text-sm font-semibold mb-0 pb-0">
                      Location
                    </span>
                    <span className="font-medium text-lg mt-0 pb-0">
                      {socialMediaConfig.profile &&
                        socialMediaConfig.profile.region && (
                          <>{socialMediaConfig.profile.region},</>
                        )}{" "}
                      {socialMediaConfig.profile &&
                        socialMediaConfig.profile.country && (
                          <>{socialMediaConfig.profile.country}</>
                        )}
                    </span>
                  </div>
                </div>
              </Link>
            )}
            {socialMediaConfig.profile &&
              socialMediaConfig.profile.birthday &&
              socialMediaConfig.profile.birthmonth && (
                <div className="flex items-center space-x-3 py-2">
                  <div className="bg-gradient-to-r from-red-600 to-indigo-600  h-11 flex justify-center w-11 drop-shadow-2xl px-2 py-2 font-semibold text-white items-center space-x-1 rounded-xl">
                    <FaCakeCandles className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col m-0 p-0 py-1">
                    <span className="text-sm font-semibold mb-0 pb-0">
                      Birthday
                    </span>
                    <span className="font-medium text-lg mt-0 pb-0">
                      {socialMediaConfig.profile &&
                        socialMediaConfig.profile.birthday && (
                          <>{socialMediaConfig.profile.birthday}</>
                        )}{" "}
                      {socialMediaConfig.profile &&
                        socialMediaConfig.profile.birthmonth && (
                          <>
                            {
                              monthNames[
                                socialMediaConfig.profile.birthmonth - 1
                              ]
                            }
                          </>
                        )}{" "}
                      {socialMediaConfig.profile &&
                        socialMediaConfig.profile.birthyear && (
                          <>{socialMediaConfig.profile.birthyear}</>
                        )}
                    </span>
                  </div>
                </div>
              )}
          </div>
          {/* <Link href="mailto:thefrontlinegenisis@proton.me" className="py-2 px-3 rounded-full bg-gradient-to-r from-red-600 to-indigo-600 text-white"><IoMdCloudDownload className='inline-block text-inherit mr-1'/> Request CV</Link> */}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
