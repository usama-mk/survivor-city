import React from 'react'
import Header from '../../components/Header/Header'
import buildingsMoon from '../../assets/images/buildings-moon.png'
import interact from '../../assets/images/interact.png'
import Survivors from '../../components/Survivors/Survivors'
import tempRoadmap from '../../assets/images/tempRoadmap.png'
import Faqs from '../../components/Faqs/Faqs'
import Footer from '../../components/Footer/Footer'
import TeamSection from '../../sections/TeamSection/TeamSection'

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
        <div className="buildings-moon-wrapper flex justify-center">
          <img src={buildingsMoon} className='object-contain p-5' alt="" />
        </div>

        <div className="title">
          <h1 className=' subway-100 text-[#FFD500]' >survivor <span className='text-white ' >city</span></h1>
        </div>
{/* interact start */}
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
{/* interact end */}

{/* survivors start */}

<div className="survivors flex justify-center">
  <Survivors text={"survivors"} />
</div>

<div className="roadmap">
  <img src={tempRoadmap} alt="" />
</div>
      </div>

{/* section 2  */}
      <div className="section-two sec-2-bg">
        {/* faq start */}
        <div className="faqs flex justify-center">
          <Faqs/>
        </div>
        {/* faq end */}

    {/* team start */}
    <TeamSection/>
    {/* team end */}

    {/* footer start */}
    <Footer/>
    {/* footer end */}
      </div>
      
    </div>
  )
}

export default Home