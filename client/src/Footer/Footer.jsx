import React from "react";
import {
  footerContent,
  footerProfile,
  nameMe,
  profileLink,
} from "../utils/constants/stringConstants";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-5 shadow-md py-5 w-full border-t-cyan-200">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <ul className="flex flex-wrap gap-4 sm:gap-10">
            {footerContent.map((item) => (
              <li
                className="text-gray-800 font-semibold text-sm sm:text-base hover:text-blue-600 transition-colors duration-200"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          &#169; {footerProfile}
          <a
            href={profileLink}
            className="font-semibold text-black hover:text-blue-800 underline ml-1 transition-colors duration-200"
          >
            {nameMe}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
