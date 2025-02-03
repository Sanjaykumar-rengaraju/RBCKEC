import React from 'react';
import {Fade} from 'react-awesome-reveal';

const RoboSoccer = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">ROBO SOCCER</h1>
          
          {/* Robot Specifications Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">ROBOT SPECIFICATIONS</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>The dimensions of the bot must not exceed (30 cm x 30 cm x 30 cm) at any point of the game.</li>
              <li>Both wired and wireless robots are allowed.</li>
              <li>The weight of the wired bot should not exceed 5 kgs and wireless should not exceed 8 kgs.</li>
              <li>Maximum voltage for batteries both in bot and remote should not exceed 12V.</li>
              <li>The bot can have 4-wheel drive or 2-wheel drive mechanism; all the tyres must contribute into the motion.</li>
              <li>The body of the robot must not be taken from any readymade toys.</li>
              <li>Dribbler mechanisms are allowed.</li>
              <li>In case of wired control, the participants must ensure that the wire length should be minimum 5 meters.</li>
              <li>Wires must be routed through a pole at least 45cm high.</li>
              <li>Wires must remain slack during gameplay.</li>
              <li>In case of wireless control, must support dual-frequency operation to avoid interference.</li>
              <li>RF modules from toy cars may be used. However, use of IC engines and LEGO kits will attract disqualification.</li>
            </ul>
          </section>

          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GENERAL RULES</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>Robot should be as per the given specifications.</li>
              <li>Each team can have a maximum of 4 members. Students from different institutes can form a team.</li>
              <li>Each member of the team must contain the identity card of his/her respected institute.</li>
              <li>Unethical behaviour could lead to disqualification. Event coordinators have all the rights to take final decision for any matter during the event.</li>
              <li>The bot will be checked by organizers for compliance before competition. Judges' decision is final.</li>
              <li>Judge's decision will be considered final.</li>
              <li>Teams may register online for the event or spot registrations are also available.</li>
            </ul>
          </section>

          {/* Game Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GAME RULES</h2>
            
            {/* Arena Specifications */}
            <h3 className="text-2xl text-[#00df9a] font-semibold">Arena Specifications</h3>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>Dimensions: 4m x 2m, walls are 15cm high.</li>
              <li>Goals: 30cm wide.</li>
              <li>Surface: Plywood for smooth movement.</li>
              <li>Ball: Standard home-playing tennis ball (6.7 cm diameter).</li>
              <li>Damaging any part of the arena will result in disqualification.</li>
              <li>Only coordinators and 4 team members per team are allowed inside the boundary during matches.</li>
              <li>Spectators must remain outside the boundary to allow enough space for teams.</li>
              <li>Arena specifications may change based on the club's decisions.</li>
            </ul>

            {/* Scoring Pattern */}
            <h3 className="text-2xl text-[#00df9a] font-semibold">Scoring Pattern</h3>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>Standard football scoring rules apply.</li>
              <li>The team scoring the most goals by the end of full time wins.</li>
              <li>Aggressive attacks against an opponent’s bot will result in a penalty shootout.</li>
              <li>Immobilization of a bot for 15 seconds will lead to disqualification.</li>
              <li>Direct goals are valid.</li>
            </ul>

            {/* Gameplay Rules */}
            <h3 className="text-2xl text-[#00df9a] font-semibold">Gameplay Rules</h3>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>A bot must not hold the ball for more than 3 seconds in a stationary position.</li>
              <li>The ball must remain in motion when the bot is moving.</li>
              <li>Robots can push or hit the ball, but they cannot grab or withhold it.</li>
              <li>Match Duration Based on Number of Teams (approx. 10mins).</li>
              <li>The match duration will vary based on the number of participating teams.</li>
            </ul>

            {/* Referee and Organizers */}
            <h3 className="text-2xl text-[#00df9a] font-semibold">Referee and Organizers</h3>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>The referee makes all decisions, and participants must abide by them.</li>
              <li>The event organizers can make changes to the rules, such as clarifying rules or modifying rules due to special circumstances.</li>
            </ul>
          </section>

          {/* Student Coordinators Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">STUDENT COORDINATORS</h2>
            <ul className="space-y-4 text-xl font-light text-gray-300">
              <li>HARIKRISHNAN S - 9361285226</li>
              <li>AMARNATH M - 8870601260</li>
            </ul>
          </section>

          {/* Registration Fees */}
          <div className="mb-12">
            <h2 className="text-2xl text-center text-[#00df9a] font-semibold">Registration Fees ₹600</h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScI177YpUxJWWzHMqhog4j6fiMF7i65tdrBOZzmDWHyN26REA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00df9a] text-white rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-transparent hover:text-[#00df9a] border-2 border-[#00df9a]"
            >
              Register
            </a>
            <a
              href="https://drive.google.com/file/d/1XjLhLERqcXYuDFOcKrgrZsgF3NUp95iT/view?usp=sharing"
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

export default RoboSoccer;