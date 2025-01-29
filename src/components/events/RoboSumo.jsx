import React from 'react';
import {Fade} from 'react-awesome-reveal';

const RoboSumo = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">ROBO SUMO</h1>
          
          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GENERAL RULES</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	The competition is based on bot standing last.<br/></li>
                <li>	First round will be the qualifiers, where two team will compete with each other with their bots, last one standing inside the arena wins the round.<br /></li>
                <li>	The total game time is 6 mins with two halves.<br/></li>
                <li>	If Team A bot pushes the opponent team B bot to out of the circle. Team A will be awarded points<br/></li>
                <li>	Also, if a bot hasn’t moved from its spot more than 60 seconds, team will be awarded zero marks.<br/></li>
                <li>	If any of the robots starts off before start up call, the counter would be restarted and the machines will get a second chance. If repeated again then team will be disqualified.<br/></li>
                <li>	The robot must be ready when call is made for your team.<br/></li>
                <li>	Team members will be allowed only three times to touch or reset their robots position during the run. However, this will lead to a time penalty and timer will not stop during this course of action.<br/></li>
                <li>	Machine must not contain any readymade kits, pneumatic &hydraulic systems, IC engines.<br/></li>
                <li>	Decision about your robot will be taken by the organizers.<br/></li>
                <li>	The rules may or may not change before the match <br/></li>
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
              <li>THARUN KUMAR U - 8248970515   </li>
              <li>PRAWIN PV - 8122142085</li>
            </ul>
          </section>

          {/* Registration Fees */}
          <div className="mb-12">
            <h2 className="text-2xl text-center text-[#00df9a] font-semibold">Registration Fees ₹600</h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfrBYQc0z27CtYZ3fscsJpcCHYi3OO7DBhItKvvYWEu0wrijw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00df9a] text-white rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-transparent hover:text-[#00df9a] border-2 border-[#00df9a]"
            >
              Register
            </a>
            <a
              href="https://drive.google.com/file/d/1ujgEj0ESD6f4dY4GOvbvLGEzMYA-QIGw/view?usp=sharing"
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

export default RoboSumo;