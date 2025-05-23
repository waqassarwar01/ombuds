import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#007282] text-white p-10">
        <div className="flex flex-col gap-4 md:ml-56">
          <span className="font-bold text-lg">Registered Address</span>
          <span className="text-sm">Premier House</span>
          <span className="text-sm">First Floor, 1-5 Argyle Way</span>
          <span className="text-sm">Stevenage, SG1 2AD</span>
          <span className="text-sm">
            Registered in England and Wales: 14275884
          </span>
        </div>
      </div>

      <div className="bg-black text-white p-10">
        <span className="md:ml-56">© 2025 The Ombuds Group</span>
      </div>
    </>
  );
};

export default Footer;
