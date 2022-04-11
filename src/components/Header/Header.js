import React from 'react'
import logo from '../../assets/images/logo.png'
import twitterLogo from '../../assets/images/twitter.png'
import openseaLogo from '../../assets/images/opensea.png'
import discordLogo from '../../assets/images/discord.png'

function Header() {
  return (
    <div className='header flex justify-between' >
        <div className="logo">
            <img src={logo} 
             alt=""
             className='w-9'
             />
        </div>

        <div className="headerIcons flex">
                <img src={twitterLogo}  className='w-6 mr-2 object-contain ' alt="" />
                <img src={openseaLogo}  className='w-6 mr-2 object-contain ' alt="" />
                <img src={discordLogo}  className='w-6 mr-2 object-contain ' alt="" />
        </div>
    </div>
  )
}

export default Header