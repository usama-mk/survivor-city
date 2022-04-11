import React from 'react'
import Header from '../../components/Header/Header'
import buildingsMoon from '../../assets/images/buildings-moon.png'
import interact from '../../assets/images/interact.png'

function Home() {

  const Interact=({text})=>{
    return(
      <div className='container relative text-center text-white  ' >
          <img src={interact} className='w-20 ' alt="" />
          <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[8px] ' >{text}</h3>
      </div>
    )
  }
  return (
    <div className='sectionsWrapper' >
      <div className="section-one bg-1">
        <Header/>
        <div className="buildings-moon-wrapper">
          <img src={buildingsMoon} className='object-contain p-5' alt="" />
        </div>

        <div className="title">
          <h1 className=' subway-100 text-[#FFD500]' >SURVIVOR <span className='text-white ' >CITY</span></h1>
        </div>

        <div className="interact flex justify-between p-8 ">
          <div className="col-1 m-2 ">
            <Interact text={"intro"}/>
          </div>

          <div className="col-2 m-2">
            <div>
            <Interact text={"overview"}/>
            </div>
            <div className='mt-2' >
            <Interact text={"gamemodes"}/>
            </div>
          </div>

          <div className="col-3 m-2">
          <Interact text={"combat"}/>
          </div>
        </div>
      </div>

      <div className="section-two">

      </div>
      
    </div>
  )
}

export default Home