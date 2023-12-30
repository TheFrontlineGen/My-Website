import React from "react";
import { FaXTwitter, FaGithub, FaTwitch } from "react-icons/fa6";
import Link from "next/link";
import socialMediaConfig from "../config.json";

const ButtonGroup = () => {
  return (
    <div className="flex space-x-2 w-full justify-center mt-4 text-lg">
      {socialMediaConfig.twitter && socialMediaConfig.twitter.handle && (
        <Link href={`https://twitter.com/@${socialMediaConfig.twitter.handle}`}>
          <FaXTwitter />
        </Link>
      )}
        {socialMediaConfig.github && socialMediaConfig.github.username && (
        <Link href={`https://github.com/${socialMediaConfig.github.username}`}>
          <FaGithub />
        </Link>
      )}
       {socialMediaConfig.twitch && socialMediaConfig.twitch.username && (
        <Link href={`https://twitch.tv/${socialMediaConfig.twitch.username}`}>
          <FaTwitch />
        </Link>
      )}
    </div>
  );
};

export default ButtonGroup;
