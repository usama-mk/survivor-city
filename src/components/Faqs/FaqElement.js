import React from "react";

function FaqElement({ question, answer }) {
  return (
    <div className="text-left max-w-[100%] text-[0.28rem] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] 4xl:text-[24px] mt-1 break-words sm:mt-3 xl:mt-6 2xl:mt-10 3xl:mt-12 4xl:mt-16  ">
      <h4 className="text-[#FFD500] roboto-bold">{`Q: ${question}`}</h4>
      <h4 className="text-white roboto-medium">{answer}</h4>
    </div>
  );
}

export default FaqElement;
