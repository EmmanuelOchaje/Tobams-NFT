import Image from "next/image";
import React from "react";

const Folder = () => {
  return (
    <div className="px-[8rem] py-[5rem]">
      <div className="relative w-full h-[500px]">
        <Image src="/assets/folder.png" fill alt="/" />
      </div>
    </div>
  );
};

export default Folder;
