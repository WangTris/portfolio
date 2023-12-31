import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsEnvelope } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
// import { PiCertificate } from "react-icons/pi";

// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* Nav inner */}
        <div className="w-full max-w-[460px] border-2 border-text bg-accent/15 h-[86px] backdrop-blur-2xl rounded-full mx-auto px-5 flex justify-between items-center text-text">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <BsBriefcase />
          </Link>
          {/* <Link
            to="certificate"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <PiCertificate />
          </Link> */}
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <AiOutlineProject />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <BsEnvelope />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
