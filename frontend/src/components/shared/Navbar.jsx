import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-16">
          <div>
            <h1 className="text-2xl font-bold">
              Job <span className="text-blue-500">Portal</span>
            </h1>
          </div>
          <div>
            <ul className="flex font-medium items-center gap-4">
              <li>Home</li>
              <li>Job</li>
              <li>Browse</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
