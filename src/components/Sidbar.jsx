import { FaHome } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { LiaStoreSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import logo from "../assets/logo.png";

const Sidbar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${
        sidebarToggle ? "  hidden" : "block"
      } w-64 bg-gray-800 fixed h-full`}
    >
      <div>
        <h1 className=" flex text-2x text-white font-bold  justify-center items-center  h-16">
          HEALTH ASSIST
        </h1>
        {/* <img
          className="flex text-2x text-white font-bold  justify-center items-center w-full  h-16"
          src={logo}
          alt=""
        /> */}
      </div>
      <hr className="border-t-2 border-white" />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4  flex">
          <a href="/Dashboard" className="px-14 ">
            <FaHome className="inline-block w-6 h-6 mr-6 -mt-2"></FaHome>
            Dashboard
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4  flex">
          <a href="/Users" className="px-14 ">
            <FaUser className="inline-block w-6 h-6 mr-6 -mt-2"></FaUser>
            Users
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4  flex">
          <a href="/operation" className="px-14 ">
            <FaTasks className="inline-block w-6 h-6 mr-6 -mt-2"></FaTasks>
            Operations
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4  flex">
          <a href="/" className="px-14 ">
            <LiaStoreSolid className="inline-block w-6 h-6 mr-6 -mt-2"></LiaStoreSolid>
            Stock
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-4  flex">
          <a href="/" className="px-14 ">
            <TbMapSearch className="inline-block w-6 h-6 mr-6 -mt-2"></TbMapSearch>
            Carte
          </a>
        </li>
      </ul>
      <span className="text-white font-bold absolute bottom-[5%] w-full flex justify-center ">
        <a href="">
          <CiLogout className="inline-block w-6 h-6 mr-6 -mt-2" />
          LOGOUT
        </a>
      </span>
    </div>
  );
};

export default Sidbar;
