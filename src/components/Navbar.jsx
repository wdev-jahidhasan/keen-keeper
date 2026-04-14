import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5 md:px-8 lg:px-16 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
            <li><Link href="/" className="text-lg"><IoHomeOutline /> Home</Link></li>
          <li><Link href="/timeline" className="text-lg"><RiTimeLine /> Timeline</Link></li>
          <li><Link href="/stats" className="text-lg"><TfiStatsUp /> Stats</Link></li>
          </ul>
        </div>
        <Image width={150} height={50} src="/logo.png" alt="logo"></Image>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/" className="text-lg"><IoHomeOutline /> Home</Link></li>
          <li><Link href="/timeline" className="text-lg"><RiTimeLine /> Timeline</Link></li>
          <li><Link href="/stats" className="text-lg"><TfiStatsUp /> Stats</Link></li>
        </ul>
      </div>
    </div>

  );
};

export default Navbar;