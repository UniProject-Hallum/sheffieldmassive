import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#606060] mt-10  py-12">
      <div className="container mx-auto px-2 text-white w-3/4">
        <div className="flex  justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Explore</h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <ul className="ml-6">
              <li>Register</li>
              <li>Search</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">HandyMan</h2>
            <p>@ copy right 2022 by Handyman.co.uk</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
