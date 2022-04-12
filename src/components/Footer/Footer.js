import React from 'react'
import twitter from '../../assets/images/twitter-y.png'
import opensea from '../../assets/images/opensea-y.png'
import discord from '../../assets/images/discord-y.png'
import logo from '../../assets/images/logo.png'
import up from '../../assets/images/up.png'

function Footer() {
  return (
    <div className='' >
        <div className="footer-bg h-16 sm:h-24 md:h-28 lg:h-48 relative  flex justify-between items-end pl-3 pr-3 ">
            
                {/* one */}
            <div className="social-rights">
                <div className="social mb-1 flex">
                <img src={twitter} className='w-5 object-contain mr-2' alt="" />
                <img src={opensea} className='w-5 object-contain mr-2' alt="" />
                <img src={discord} className='w-5 object-contain mr-2' alt="" />
                </div>

                <h5 className='roboto-condensed-bold text-[0.5em] text-white mb-0.3' >© COPY RIGHTS RESERVED, 2022</h5>
            </div>

            {/* two */}
            <img src={logo} className='w-12 object-contain pl-3 pb-1' alt="" />
            <img src={up} className='w-12 object-contain pl-3 pb-1 cursor-pointer absolute right-2 bottom-16 sm:bottom-24 md:bottom-28 lg:bottom-48 xl:bottom-56 2xl:bottom-64' alt="" />
            </div>
        

    </div>
  )
}

export default Footer