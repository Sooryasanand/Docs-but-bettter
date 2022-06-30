import React from "react";
import { Avatar } from "@material-tailwind/react";

function Header() {
  return (
    <header className="pt-5 sticky top-0 pl-10 text-xl pb-5 flex items-center bg-white z-50">
      <h3 className="text-xs md:text-base lg:text-lg">Docs But Bettter</h3>
      <div className="flex flex-grow items-center p-5 py-2 bg-grey-100 text-grey-600 rounded-lg mx-5 md:mx-20 focus-within:text-grey-600 focus-within:shadow-md">
        <input
          className="flex-grow px-5 text-base bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <Avatar
        className="hidden md:inline-flex mr-10 h-12 w-12 cursor-pointer"
        src="https://www.myconnect.com.au/assets/avatar-circle-blue-512dp.png"
        alt="avatar"
        loading="lazy"
      />
    </header>
  );
}

export default Header;
