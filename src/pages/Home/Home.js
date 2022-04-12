import React from 'react'
import Header from '../../components/Header/Header'
import buildingsMoon from '../../assets/images/buildings-moon.png'
import interact from '../../assets/images/interact.png'
import Survivors from '../../components/Survivors/Survivors'
import roadmap from '../../assets/images/roadmap.png'
import roadmapDot from '../../assets/images/roadmapDot.png'
import upArrow from '../../assets/images/upArrow.png'
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

  const HoverElement=()=>{
    return(
      <div>
        <img src={upArrow} className='w-5' alt="" />
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

<div className="roadmap relative">
  <img src={roadmap} className='' alt="" />
  <img src={roadmapDot} className='absolute top-[66%] left-[15%] w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3.5rem] 4xl:w-24 ' alt="" />
  
  <img src={roadmapDot} className='absolute top-[66%] left-[35%] w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 4xl:w-24' alt="" />
  <img src={roadmapDot} className='absolute top-[55%] left-[41%] w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 4xl:w-24' alt="" />
  <img src={roadmapDot} className='absolute top-[47%] left-[50%] w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 4xl:w-24' alt="" />
  <img src={roadmapDot} className='absolute top-[47%] left-[68%] w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 4xl:w-24' alt="" />
  <img src={roadmapDot} className='absolute top-[47%] left-[88%] w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 4xl:w-24' alt="" />
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