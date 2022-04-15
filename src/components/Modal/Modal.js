import React from "react";
import survivorsBg from "../../assets/images/survivors-bg.png";

export default function Modal({ modal, setModal, toggleModal, text, heading }) {
  //   if(modal) {
  //     document.body.classNameList.add('active-modal')
  //   } else {
  //     document.body.classNameList.remove('active-modal')
  //   }

  return (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:min-w-[760px] md:max-w-[1000px]  2xl:max-w-[1200px]  3xl:max-w-[1300px]  4xl:max-w-[1900px] ">
          <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm lg:text-lg xl:text-xl "
                onClick={toggleModal}
              >
                X
              </button>
            </div>
            <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start relative text-center">
                <img src={survivorsBg} alt="" />
                <h3 className="absolute top-[18%] left-[50%] translate-x-[-50%] translate-y-[-50%] subway-100 text-[15px] text-[#FFD500] md:text-[18px] lg:text-[22px] 3xl:text-[26px] 4xl:text-[40px]">
                  {heading}
                </h3>

                {(heading === "overview" || heading === "intro") && (
                  <h3 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[50%] overflow-auto text-[8px] text-[white] text-center roboto-medium md:text-[12px] lg:text-[16px] 3xl:text-[20px] 4xl:text-[35px] ">
                    {text}
                  </h3>
                )}
                {heading === "combat" && (
                  <h3 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[50%] overflow-auto text-[8px] text-[white] text-center roboto-medium md:text-[12px] lg:text-[16px] 3xl:text-[20px] 4xl:text-[35px] ">
                    <span className="text-[#FFD500]">The Bars</span>
                    <br />
                    <span>Health Bar</span>
                    <br />
                    <span>
                      The main bar, this is your life's bar so if it gets to 0%
                      you are dead and gameover. You can restore life by waiting
                      a bit or collecting special items in the map.
                    </span>
                    <br />
                    <br />
                    <span>Energy Bar</span>
                    <br />
                    <span>
                      Well, everyone on Survivor City has an Energy Bar, this
                      bar will be spent when you use skills, different skills
                      spend different amounts of energy, and also you can
                      recover by waiting or with items that will spawn in the
                      map.
                    </span>
                    <br />
                    <br />
                    <span className="text-[#FFD500]">Movement</span>
                    <br />
                    <span>
                      You can move your character around with WASD or the ARROW
                      KEYS, you can also use a DASH to dodge attacks or to get
                      out of sticky situations.
                    </span>
                    <br />
                    <br />
                    <span className="text-[#FFD500]">POWERS AND ATTACKS</span>
                    <br />
                    <span>
                      Here, you can attack with your basic attack using the
                      mouse 1 button. The damage of it depends on the character.
                      Also, each character has 3 main powers, some are ranged
                      (projectiles etc) and some are melee (punches etc) and so
                      on... You can activate it by spending Energy Bar.
                    </span>
                    <br />
                  </h3>
                )}

                {/* gamemodes */}
                {heading === "gamemodes" && (
                  <h3 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[50%] overflow-auto text-[8px] text-[white] text-center roboto-medium md:text-[12px] lg:text-[16px] 3xl:text-[20px] 4xl:text-[35px] ">
                    <span>
                      PvE and missions (main gamemode) - Here you can join a map
                      and play against the computer (bots). The map and the
                      quests change from hero to villain, there are 3 quests for
                      heroes and 3 quests for villains,with more being added as
                      time goes on. Quests so far:
                    </span>
                    <br />
                    <br />
                    <span className="text-[#FFD500]">Heroes</span>
                    <br />
                    <span>
                      1. "Prevent the villains from stealing the energy prism!"
                      - Here you need to defeat the villains on the pathway and
                      prevent them from stealing the energy prism, there is a
                      timer and if you don't get to the energy prism in time and
                      defeat all the enemies, you lose and it's gameover.
                    </span>
                    <br />
                    <br />

                    <span>
                      2. "Save the captured heroes from the villains!" - The
                      villains capture a few heroes, go to their base where they
                      are hidden, and destroy the 3 generators to free the
                      heroes.
                    </span>
                    <br />
                    <span>
                      3. "Clear the tracks for the train!" Break the obstacles
                      the villains have placed to stop trains from passing while
                      they try to stop you.
                    </span>
                    <br />
                    <br />
                    <span className="text-[#FFD500]">Villains</span>
                    <br />
                    <span>
                      <span>
                        1. "Steal the gold and defeat the heroes!" - Enter the
                        complex, pass through the security to steal 3 golden
                        bars, defeat the villains there and leave.
                      </span>
                      <br />
                      <span>
                        2. "Destroy the city power station!" - Destroy the 2
                        main generators to destroy the city power station before
                        the timer ends, and defeat any heroes if necessary.
                      </span>
                      <br />
                      <span>
                        3. "Prevent the heroes from finishing their research!" -
                        Don't let the heroes finish their research, invade their
                        base and destroy the computer while the heroes try to
                        stop you.
                      </span>
                    </span>
                    <br />
                    <br />
                    <span className="text-[#FFD500]">PvP and events</span>
                    <br />
                    <span>
                      Here you can play in an online open world map, you can
                      walk free and be part of a team (villain or heroes), you
                      can beat other players of the opposite team, break things
                      over the city to get score points (as a villain) and
                      more!There will be special events on this online mode, so
                      stay tuned for new updates!
                    </span>
                  </h3>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* after modal content */}
    </>
  );
}
