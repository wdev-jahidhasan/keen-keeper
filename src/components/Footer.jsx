import Image from 'next/image';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F]  p-10 text-white">

      <Image width="250" height="50" src="/logo-xl.png" alt="footer logo"></Image>
      <p className='text-[#e9e9e990]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

      <aside>
        <p className='font-semibold py-3'>Social Links</p>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <FaInstagram />
          <FaFacebook />
          <FaXTwitter />
        </div>
      </aside>

      <div className='border-t border-dotted border-gray-400 w-[90%] lg:w-[75%] pt-10 flex flex-col md:flex-row justify-between text-[#e9e9e990]'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <div className='flex gap-6'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;