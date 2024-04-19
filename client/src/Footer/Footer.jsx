import React from "react";
import {
  footerContent,
  footerProfile,
  nameMe,
  profileLink,
} from "../utils/constants/stringConstants";

const Footer = () => {
  return (
    <div className="bg-[#E6E7E8] shadow-top h-36 text-center  pt-5 sm:p-5  absolute w-full ">
      <div className="flex justify-center">
        <ul className="flex gap-4 sm:gap-20 py-5">
          {footerContent.map((item) => (
            <li className="text-black font-bold" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p>
        &#169;
        {footerProfile}
        <a href={profileLink} className="font-semibold underline ml-1">
          {nameMe}
        </a>
      </p>
    </div>
  );
};

export default Footer;
