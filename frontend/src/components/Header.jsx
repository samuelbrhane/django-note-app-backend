import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[50px] bg-blue-400 text-white py-3 px-2 md:px-8 lg:px-12">
      <Link to="/" className="text-xl font-bold">
        Notes App
      </Link>
    </div>
  );
};

export default Header;
