import React from 'react'

function TeamMember({image, name, position, details}) {
  return (
    <div className='flex m-5  ' >
        <img src={image} className='w-16 h-16 object-contain ' alt="" />

        <div className="memberDetails ml-5 text-left text-[0.2em] max-w-[50%] ">
            <h3 className='subway-100 text-[#FF6F00] text-[5em] ' >{name}</h3>
            <h5 className=' roboto-condensed-bold text-[#FFD500] text-[2em] mb-1 ' >{position}</h5>
            <p className='roboto-condensed text-white ' >{details}</p>
        </div>

    </div>
  )
}

export default TeamMember