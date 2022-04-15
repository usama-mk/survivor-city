import React from 'react'
import survivorsBg from '../../assets/images/survivors-bg.png'
import survivorPerson from '../../assets/images/survivorPerson.png'

function Survivors({text, images}) {
  return (
    <div className='container relative text-center text-white  ' >
    <img src={survivorsBg} className=' ' alt="" />
    <h3 className='absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[20px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] 3xl:text-[80px] 4xl:text-[90px] text-[#FFD500]' >{text}</h3>
    <img className='absolute top-[60%] sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] ' src={survivorPerson} alt='persons' />
    {/* <img src="" alt="" /> */}
    <h3 className='absolute top-[88%] left-[50%] translate-x-[-50%] translate-y-[-20%] subway-100 text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[45px] 4xl:text-[55px] text-[#FFD500]  ' >road<span className='text-white' >map</span> </h3>
</div>
  )
}

export default Survivors