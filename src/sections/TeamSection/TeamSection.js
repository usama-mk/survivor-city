import React from 'react'
import member1 from '../../assets/images/member-1.png'
import member2 from '../../assets/images/member-2.png'
import member3 from '../../assets/images/member-3.png'
import member4 from '../../assets/images/member-4.png'
import member5 from '../../assets/images/member-5.png'
import TeamMember from '../../components/TeamMember/TeamMember'

function TeamSection() {
  return (
    <div className="teamWrapper pl-8 pr-8 flex justify-center  ">
     <div className="center flex flex-col items-center sm:w-[60%] ">
     <div className="row-1 flex justify-center  ">
        <TeamMember image={member1} name={"kaveh"} position={"Dev/Founder" } details={"With over a year in the crypto space and 6 months in theNFT space, I have seen what has rise to the top and what has fallen. I am proficient in Javascript and have spent 6 monthsunderstanding solidity. I know what it takes to keep a project going & I will make sure this project makes it to the top."} />
      </div>

      {/* <div className="row-2 flex justify-between flex-wrap sm:flex-nowrap"> */}
      
      <div className="row-2 sm:grid sm:grid-cols-2 gap-4 justify-items-center">
        <div className="r-2-c-1 w-fit  ">
        <TeamMember image={member2} name={"scott"} position={"Community manager" } details={" I have experience with managing small and large communities. I also managed communities in the NFT space by being a head mod in HeadDAO and helping to oversee and manage the DAO functions of HeadDAO. I believe in the power of communities and always strives to be honest and transparent in everything that I do in real life and in the metaverse."} />
        </div>

        <div className="r-2-c-2 w-fit">
        <TeamMember image={member3} name={"bruno"} position={"Game designer" } details={"Game Designer for 5 years, I worked on several small projects as a study. My main project is a mmorpg called Exotic Online. My favorite programming languages are gml, python and css. I make pixelarts in my spare time."} />
        </div>
      </div>

      {/* <div className="row-3 flex justify-between flex-wrap sm:flex-nowrap "> */}
      <div className="row-3 sm:grid sm:grid-cols-2 gap-4 justify-items-center">
      <div className="r-3-c-1">
      <TeamMember image={member4} name={"justice"} position={"Artist" } details={"I am passionate about creating genuine and meaningful artwork. I was accepted into the Orange County School of Arts but decided to turn down the offer to pursue a different path that suited my goals. I was the one and only artist for the Cryptidz NFT project and am currently in NDAs. Through NFTs, I hope I am able to inspire others and share my vision with the world. I aim to always produce quality work for my deserving audience."} />
        </div>

        <div className="r-3-c-2">
        <TeamMember image={member5} name={"artin"} position={"marketer" } details={"I have over a year of experience in marketing and solidity developer. I have worked on many projects, one being HeadDAO and I have shown signs of great leadership in past work. I am happy to be on the team."} />
        </div>
      </div>
     
     </div>
    </div>
  )
}

export default TeamSection