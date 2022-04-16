import React from "react";

function TeamMember({ image, name, position, details, link }) {
  return (
    <div className="flex m-5 w-fit justify-center ">
       <a className="h-fit" target={"_blank"} href={link}>
      <img
        src={image}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain "
        alt=""
      />
      </a>

      <div className="memberDetails ml-5 text-left   max-w-[50%] md:max-w-[60%] ">
        <h3 className="subway-100 text-[#FF6F00] text-[14px] sm:text-[20px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[32px] 4xl:text-[40px]  ">
          {name}
        </h3>
        <h5 className=" roboto-condensed-bold text-[#FFD500] text-[8px] sm:text-[12px] md:text-[10px] mb-1 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[22px] 4xl:text-[32px] ">
          {position}
        </h5>
        <p className="roboto-condensed text-white text-[6px] sm:text-[10px] md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[10px] 3xl:text-[12px] 4xl:text-[16px]">
          {details}
        </p>
      </div>
    </div>
  );
}

export default TeamMember;
