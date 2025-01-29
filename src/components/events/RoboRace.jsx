import React from 'react';
import {Fade} from 'react-awesome-reveal';

const RoboRace = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">ROBO RACE</h1>
          
          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GENERAL RULES</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	A team should consist of 4 members.<br/></li>
                <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
                <li>  Students from different institutions can form a team. <br/></li>
                <li>	During the rounds, only two members of a team are allowed to enter the arena. However, the team can swap their members in different rounds.<br/></li>
                <li>	If the bot is taken out of the race for any repair, then the time will be stopped and bot have to start the race from the position. <br/></li>
                <li>	The decision of the coordinator will be final and binding upon all participants.<br/></li>
            </ul>
          </section>

          {/* Bot Specifications Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">BOT SPECIFICATIONS</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	Using greater voltages than 12V is forbidden.<br/></li>
                <li>	Bot dimension should be maximum of 30cm x 30cm x 30cm.<br/></li>
                <li>  Max weight of bot is 8kgs.<br/></li>
                <li>	Participating teams should bring their own requirements for entire competition.<br/></li>
            </ul>
          </section>

          {/* Student Coordinators Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">STUDENT COORDINATORS</h2>
            <ul className="space-y-4 text-xl font-light text-gray-300">
              <li>BHAVISH A - 7010534007   </li>
              <li>THAKHSHAN SP - 9514566966</li>
            </ul>
          </section>

          {/* Registration Fees */}
          <div className="mb-12">
            <h2 className="text-2xl text-center text-[#00df9a] font-semibold">Registration Fees ₹500</h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc6YmD5BdHdNDgAMLl-ueDUP4c49Txi1zZ0FnsiuSf8J22M6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00df9a] text-white rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-transparent hover:text-[#00df9a] border-2 border-[#00df9a]"
            >
              Register
            </a>
            <a
              href="https://drive.google.com/file/d/1b2D6MY08z1CQM0xPS_d26JXY2odocAOv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-[#00df9a] rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-[#00df9a] hover:text-white border-2 border-[#00df9a]"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default RoboRace;