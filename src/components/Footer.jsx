import Image from 'next/image';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F]  p-10 text-white">

      <Image width="250" height="50" src="/logo-xl.png" alt="footer logo"></Image>

  <aside>
    
    <p>
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

    <p>Social Links</p>
    <div>
      
    </div>
    
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
     <FaInstagram className="" />
     <IoLogoFacebook />
     <FaTwitter />
    </div>
  </nav>

  <div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </div>
</footer>
  );
};

export default Footer;