import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className=" mb-20 flex iteam-center justify-between py-6">
      <div className="flex flex-shrink -0 iteams-center">
        {/* right side small logo img */}
        <h1 className="m-8 flex items-center justify-center gap-4 text-2xl">
          Protfolio
        </h1>
        <img className="mx-2 w-10" src="" alt="" />
      </div>
      {/* displying the i-cons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </nav>
  );
};
