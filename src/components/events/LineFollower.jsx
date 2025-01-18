import React from 'react';
import {Fade} from 'react-awesome-reveal';

const LineFollower = () => {
  return (
    <Fade top duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">LINE FOLLOWER</h1>
          
          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GENERAL RULES</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	Maximum Number of members in a team is 4.<br/></li>
                <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
                <li>	Only one autonomous bot per team is allowed.<br/></li>
                <li>	At the start of the task, the bot will be placed at the starting point. Only two members of a team is allowed to be near the game field while starting the bot.<br/></li>
                <li>	The starting procedure of the bot should be simple and should not involve giving any manual force or impulse in any direction.<br/></li>
                <li>	Here two rounds, one trial round is allowed before the start of the first round.<br/></li>
                <li>	The teams that clear the first round will be allowed to enter the second round(as per the number of teams).<br/></li>
                <li>	When the bot starts, no team member is allowed to touch the bot or enter the arena.<br/></li>
                <li>	The game will start only when organizers give the signal.<br/></li>
                <li>	The bot which starts the START tile and reaches the FINISH tile by following the black lines in the shortest time will be nominated as the winner.<br/></li>
                <li>	Violating any of the given rules will end in deduction of points for the corresponding team.<br/></li>
                <li>	The decision of the co-ordinator will be final and binding upon all participants.<br/></li>
            </ul>
          </section>

          {/* Bot Specifications Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">BOT SPECIFICATIONS</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	Using greater voltages than 12V is forbidden.<br/></li>
                <li>	Bot dimension should be maximum of 25cm x 25cm x 25cm.<br/></li>
                <li>	Bot can have microcontroller or any IC Gates for automatic movement and should not be controlled manually.<br/></li>
                <li>	Participating teams should bring their own requirements for entire competition.<br/></li>
            </ul>
          </section>

          {/* Student Coordinators Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">STUDENT COORDINATORS</h2>
            <ul className="space-y-4 text-xl font-light text-gray-300">
              <li>KIRUPAKAR N  - 8148976048   </li>
              <li>DHARSHANA S - 6382049626</li>
            </ul>
          </section>

          {/* Registration Fees */}
          <div className="mb-12">
            <h2 className="text-2xl text-center text-[#00df9a] font-semibold">Registration Fees ₹500</h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeE6SQ7umOlwsqUfz4HArrvI1wVn49pARjGirdrc1zO_FuNNg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00df9a] text-white rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-transparent hover:text-[#00df9a] border-2 border-[#00df9a]"
            >
              Register
            </a>
            <a
              href="https://drive.google.com/file/d/1gB1gPWYvEdk5nbFF9WtEv2UxHgERiCUM/view?usp=sharing"
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

export default LineFollower;
