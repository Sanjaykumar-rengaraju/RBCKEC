import React from 'react';
import {Fade} from 'react-awesome-reveal';

const RoboSoccer = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">ROBO SOCCER</h1>
          
          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GENERAL RULES</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	Each team is required to construct a single robot.<br /></li>
                <li>	The maximum number of participants in a team is 4.<br /></li>
                <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
                <li>	However, students from different institutions can form a team.<br /></li>
                <li>	12V RPS (Regulated Power Supply) will be given by our team.<br/></li>
                <li>    you can bring your battery maximum 12 V (0-5) Amps as if you wish.<br /></li>
                <li>    Bots battery capacity should be maximum of 24V.</li>
                <li>	Match contains of two timeout of 20 seconds each.<br /></li>
                <li>	The games are similar to normal football tournaments.<br /></li>
                <li>	Depending on the no. of team, Knockouts or league groups will be made. Top 4 teams will be qualified for the Semi-Finals.<br /></li>
                <li>	Each match lasts for 4 minutes.<br /></li>
                <li>	Bots should not hold the ball for more than 10 secs, it leads to start the match from home position.<br /></li>
                <li>	The match time may vary according to the juries.<br /></li>
                <li>	The decision of the co-ordinators will be final.<br /></li>
            </ul>
          </section>

          {/* ARENA Specifications Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">ARENA SPECIFICATIONS</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	The dimensions of the play area are 4m x 2m.<br /></li>
                <li>	The height of the wall is 15cm.<br /></li>
                <li>	The goal width is 30cm wide.<br /></li>
                <li>	A golf ball or tennis ball will be used for the game.<br /></li>
                <li>	The arena is made of plywood on top for smooth movements.<br /></li>
                <li>	There will not be any extra metal casting, indicating the goal.<br /></li>
                <li>	Damaging any part of the arena (because of the respective Bot) will lead to disqualification.<br /></li>
                <li>	There will be a rectangular boundary in which the arena is placed. Inside the boundary of the arena, only the coordinators and four persons per each team to control bots are allowed when the match is going on.<br /></li>
                <li>	There will be negative points in case of any violation of the rules mentioned above.<br /></li>
                <li>	All the spectators are supposed to watch the match outside this boundary, this is to ensure that there is enough space for the team members to control the bots and move around.<br /></li>
                <li>	Specifications of the arena may change due to club decision.<br /></li>
            </ul>
          </section>

          {/* SCORING PATTERN Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">SCORING PATTERN</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	The scoring is same as the normal football games.<br /></li>
                <li>	The team which scores a maximum number of goals by the end of full time is considered as the winner of that particular game.<br /></li>
                <li>	Aggressive attacks against the bot will be awarded a penalty shootout.<br /></li>
                <li>	Immobilization of 15 secs leads to disqualification of the bot.<br /></li>
                <li>	Direct goals are accepted.<br /></li>
            </ul>
          </section>

          {/* RObot specification Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">ROBOT SPECIFICATION</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	The dimensions of the bot must not exceed (30 cm x 30 cm x 30 cm) at any point of the game and weight of the robot should not exceed 8kgs.<br /></li>
                <li>	Both wired and wireless robots are allowed<br /></li>
                <li>	Maximum working voltage of the bot should not exceed 12V.<br /></li>
                <li>	In case of wired control, the participants must ensure that the wire length should be minimum 5 meters.<br /></li>
                <li>	In case of wireless robots, each robot must be able to support dual frequency, so that there is no interference with the opponents’ robots.<br /></li>
                <li>	In case of wired control, the participants must ensure that the wires are out of a pole of height at least 45 cm. The height of the pole is not counted during dimension check. The wire must be slack at any instant of the match.<br /></li>
                <li>	RF modules from toy cars may be used. However use of IC engines and LEGO kits will leads to disqualification.<br /></li>
                <li>	No direct use of remote controlled (wired or wireless) cars will be entertained.<br /></li>
                <li>	The robot may not hold the ball stationary with it while moving (i.e, ball must be moving when the bot is moving with the ball).Dribbler mechanisms can be used.<br /></li>
                <li>	The ball can be dribbled and hit from any part of the robot.<br /></li>
                <li>	Each bot may or may not have a mechanism to hit the ball.<br /></li>
                <li>	Hydraulics should not be used for any mechanisms.<br /></li>
            </ul>
          </section>

          {/* Student Coordinators Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">STUDENT COORDINATORS</h2>
            <ul className="space-y-4 text-xl font-light text-gray-300">
              <li>HARIKRISHNAN S - 9361285226  </li>
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
              href="https://drive.google.com/file/d/1m7l___j_9yzEmjdy0S61_NuHJU1_iN3a/view?usp=sharing"
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
