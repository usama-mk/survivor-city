import React from 'react'
import survivorsBg from '../../assets/images/survivors-bg.png'
import survivorPerson from '../../assets/images/survivorPerson.png'

function Survivors({text, images}) {
  return (
    <div className='container relative text-center text-white  ' >
    <img src={survivorsBg} className=' ' alt="" />
    <h3 className='absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[20px] text-[#FFD500]' >{text}</h3>
    <img className='absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] ' src={survivorPerson} />
    <img src="" alt="" />
    <h3 className='absolute bottom-[0%] left-[50%] translate-x-[-50%] translate-y-[-20%] subway-100 text-[15px] text-[#FFD500]' >road<span className='text-white' >map</span> </h3>
</div>
  )
}

export default Survivors