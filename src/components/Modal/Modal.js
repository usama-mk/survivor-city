import React, { useState } from "react";
import "./Modal.css";
import survivorsBg from '../../assets/images/survivors-bg.png'

export default function Modal({modal, setModal, toggleModal, text, heading}) {
 

//   if(modal) {
//     document.body.classNameList.add('active-modal')
//   } else {
//     document.body.classNameList.remove('active-modal')
//   }

  return (
    <>
    
<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

   
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div className="relative inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:min-w-[760px] md:max-w-[1000px]  2xl:max-w-[1200px]  3xl:max-w-[1300px]  4xl:max-w-[1900px] ">
      <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start relative text-center">
          <img src={survivorsBg} alt="" />
    <h3 className='absolute top-[18%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[15px] text-[#FFD500] md:text-[18px] lg:text-[22px] 3xl:text-[26px] 4xl:text-[40px]' >{heading}</h3>

    <h3 className='absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[50%] overflow-auto text-[8px] text-[white] text-center roboto-medium md:text-[12px] lg:text-[16px] 3xl:text-[20px] 4xl:text-[35px] ' >{text}</h3>
         
        </div>
      </div>
      <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm lg:text-lg xl:text-xl " onClick={toggleModal} >Close</button>
   
      </div>
    </div>
  </div>
</div>

    {/* after modal content */}
    </>
  );
}