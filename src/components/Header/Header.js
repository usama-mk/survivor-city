import React from 'react'
import logo from '../../assets/images/logo.png'
import twitterLogo from '../../assets/images/twitter.png'
import openseaLogo from '../../assets/images/opensea.png'
import discordLogo from '../../assets/images/discord.png'

function Header() {
  return (
    <div className='header flex justify-between p-5' >
        <div className="logo">
            <img src={logo} 
             alt=""
             className='w-9 sm:w-16 md:w-20 lg:w-28 3xl:w-32 4xl:w-40 '
             />
        </div>

        <div className="headerIcons flex">
                <img src={twitterLogo}  className='w-6 mr-2 object-contain sm:w-9 md:w-12 lg:w-16 3xl:w-20 4xl:w-24 ' alt="" />
                <img src={openseaLogo}  className='w-6 mr-2 object-contain sm:w-9 md:w-12 lg:w-16 3xl:w-20 4xl:w-24' alt="" />
                <img src={discordLogo}  className='w-6 mr-2 object-contain sm:w-9 md:w-12 lg:w-16 3xl:w-20 4xl:w-24' alt="" />
        </div>
    </div>
  )
}

export default Header