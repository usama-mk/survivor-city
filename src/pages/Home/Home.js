import React, { useState } from 'react'
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
import Modal from '../../components/Modal/Modal'

function Home() {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText]= useState("")
  const [modalHeading, setModalheading]= useState("")

  const toggleModal = (name) => {
    if(name=="intro"){
      setModalheading("intro")
      setModalText("After nuclear warfare ravaged the metaverse, Vivor was left demolished and their population decimated. ­­Only 8888 people managed to carry on after the war. These brave souls proudly declared themselves the Survivors. Due to the nuclear fallout, some of the Survivors discovered they acquired special abilities. The nuclear war the Survivors lived through was hard and cruel. Surviving this trauma required many to do unthinkable things to survive. This broke 2888 of the Survivors who now follow a life of crime as they have lost their humanity. The rest swore to stop these criminals in order to help bring humanity back from the brink of destruction and they cling to the dream of once again living in peace and safety. After some time the city was renamed to Survivor City, and this is where our story takes place.")
    }
    else if(name=="overview"){
      setModalheading("overview")
      setModalText(`The gameplay consists of heroes vs villains and there are a lot of playable characters there. You can choose if you want to be a hero or a villain.There are 2 types of gamemodes, the PvE (where you can do missions and get "tokens") and the PvP where there will be events on an open world map with other players (we are gonna talk more about this soon).`)
    }
    else if(name=="gamemodes"){
      setModalheading("gamemodes")
      setModalText("After nuclear warfare ravaged the metaverse, Vivor was left demolished and their population decimated. ­­Only 8888 people managed to carry on after the war. These brave souls proudly declared themselves the Survivors. Due to the nuclear fallout, some of the Survivors discovered they acquired special abilities. The nuclear war the Survivors lived through was hard and cruel. Surviving this trauma required many to do unthinkable things to survive. This broke 2888 of the Survivors who now follow a life of crime as they have lost their humanity. The rest swore to stop these criminals in order to help bring humanity back from the brink of destruction and they cling to the dream of once again living in peace and safety. After some time the city was renamed to Survivor City, and this is where our story takes place.")
    }
    else if(name=="combat"){
      setModalheading("combat")
      setModalText("After nuclear warfare ravaged the metaverse, Vivor was left demolished and their population decimated. ­­Only 8888 people managed to carry on after the war. These brave souls proudly declared themselves the Survivors. Due to the nuclear fallout, some of the Survivors discovered they acquired special abilities. The nuclear war the Survivors lived through was hard and cruel. Surviving this trauma required many to do unthinkable things to survive. This broke 2888 of the Survivors who now follow a life of crime as they have lost their humanity. The rest swore to stop these criminals in order to help bring humanity back from the brink of destruction and they cling to the dream of once again living in peace and safety. After some time the city was renamed to Survivor City, and this is where our story takes place.")
    }
    setModal(!modal);
  };

  const Interact=({text})=>{
    return(
      
       <div className='container relative text-center text-white cursor-pointer ' onClick={()=>toggleModal(text)}  >
        <img src={interact} className='w-20 sm:w-28 md:w-32 lg:w-36 xl:w-40 3xl:w-48 4xl:w-56 ' alt="" />
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] 3xl:text-[26px] 4xl:text-[32px] ' >{text}</h3>
    </div>
      
    )
  }

  const HoverElement=({text, imgTop, imgLeft, textTop, textLeft})=>{
    return(
      <div className='hoverElement absolute top-[90%] hidden  ' >
       <div className="flex justify-center">
       <img src={upArrow} className={` w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3.5rem] 4xl:w-24 object-contain`} alt="" />
       </div>
        <p className={`font-bold bg-[#FFD500] text-black p-2 rounded-2xl text-[6px] w-28 sm:w-44 sm:text-[8px] md:w-48 md:text-[10px] lg:w-56 lg:text-[12px] 2xl:w-72 2xl:text-[14px] 4xl:w-96 4xl:text-[20px]  `} >
            {text}
        </p>
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
          <h1 className=' subway-100 text-[#FFD500] sm:text-[20px] md:text-[28px] lg:text-[45px] xl:text-[50px] 2xl:text-[55px] 3xl:text-[70px] 4xl:text-[90px] ' >survivor <span className='text-white ' >city</span></h1>
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
{
   modal &&
   <Modal modal={modal} setModal={setModal} toggleModal={toggleModal} heading={modalHeading} text={modalText} />
}

<div className="survivors flex justify-center">
  <Survivors text={"survivors"} />
</div>

<div className="roadmap flex flex-col items-center relative">
  <img src={roadmap} className='' alt="" />
  <div className='absolute top-[66%] left-[25%]' >
  <div className="flex flex-col items-center ">
  <img src={roadmapDot} className=' dot-one  w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 2xl:w-16 4xl:w-24 cursor-pointer ' alt="" />
  <HoverElement text={"Minecraft competitions for and giveaways for whitelist spots. Mint is in Q2 at 0.088 ETH per Survivor"} />
  </div>
 
  </div>
  
  {/* 2 */}
  <div className='absolute top-[66%] left-[35%]' >
  <div className="flex flex-col items-center ">
  <img src={roadmapDot} className=' dot-one  w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 2xl:w-16 4xl:w-24 cursor-pointer ' alt="" />
  <HoverElement text={"Late Q2 / Early Q3: Token + staking will be released. biweekly auctions, only with our native token"} />
  </div>
  </div>
  {/* 2 end */}

  {/* 3 */}
  <div className='absolute top-[55%] left-[41%]' >
  <div className="flex flex-col items-center ">
  <img src={roadmapDot} className=' dot-one  w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 2xl:w-16 4xl:w-24 cursor-pointer ' alt="" />
  <HoverElement text={"Early Q3: NFT World competitions where participants get $WRLD Tokens while game finishes up development"} />
  </div>
  </div>
  {/* 3 end */}

   {/* 4 */}
   <div className='absolute top-[47%] left-[50%]' >
  <div className="flex flex-col items-center ">
  <img src={roadmapDot} className=' dot-one  w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 2xl:w-16 4xl:w-24 cursor-pointer ' alt="" />
  <HoverElement text={"Mid Q3: Sale of NFT upgrades and land plots with our native token (guns, swords, etc.), which will make your playable NFT earn more tokens in game"} />
  </div>
  </div>
  {/* 4 end */}

   {/* 5 */}
   <div className='absolute top-[47%] left-[68%]' >
  <div className="flex flex-col items-center ">
  <img src={roadmapDot} className=' dot-one  w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 2xl:w-16 4xl:w-24 cursor-pointer ' alt="" />
  <HoverElement text={"Early Q4: Launch of P2E game, with guidance into phase 2 of survivor city"} />
  </div>
  </div>
  {/* 5 end */}

     {/* 6 */}
   <div className='absolute top-[47%] left-[80%]' >
  <div className="flex flex-col items-center ">
  <img src={roadmapDot} className=' dot-one  w-3 sm:w-5 md:w-7 lg:w-12 xl:w-[3rem] 2xl:w-16 4xl:w-24 cursor-pointer ' alt="" />
  <HoverElement text={"??????"} />
  </div>
  </div>
  {/* 6 end */}
 
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