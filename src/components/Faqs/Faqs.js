import React from 'react'
import faqsBg from '../../assets/images/faq-bg.png'
import FaqElement from './FaqElement'

function Faqs() {
  return (
    <div className="container relative text-center flex ">
  <img src={faqsBg} alt="faqs background" />
 
  <div className="absolute text-[0.5rem] top-[20%] left-[5%] max-w-[50%] ">
     <FaqElement question={"WHAT IS THE MINT PRICE?"}
     answer={"TBD max mint amount: presale gets 1, public gets 3"}
     />

     <FaqElement question={"When is the presale?"}
     answer={"2 days before mint"}
     />

     <FaqElement question={"When is mint?"}
     answer={"late March/early April"}
     />

     <FaqElement question={"Will there be breeding?"}
     answer={"There will be breeding after the game’s release"}
     /> 
  </div>
  {/* faq right */}
  <div className="absolute top-[20%] right-[5%] pl-10 max-w-[50%]  ">
  <FaqElement question={"What is the gameplay style?"}
     answer={"2D Top Down PvP and PvE game with group activities & group battles"}
     />

     <FaqElement question={"What is the gameplay style?"}
     answer={"2D Top Down PvP and PvE game with group activities and group battles"}
     />

     <FaqElement question={" Benefits of owning more than one?"}
     answer={"Benefits have been decided and will be announced later."}
     />

  </div>
 {/* faq right end */}
  <h3 className='absolute top-[40%] left-[50%] translate-x-[-70%] translate-y-[-50%] subway-100 text-[1rem] text-[#FFD500] ' >faq's</h3>

  <h3 className='absolute top-[88%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[0.5rem] text-white ' >meet the <span className='text-[#FFD500] ' >team</span> </h3>
</div>
  )
}

export default Faqs