import React from 'react';
import {Fade} from 'react-awesome-reveal';

const MazeSolver = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">MAZE SOLVER</h1>
          
          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">GENERAL RULES</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>Maximum number of members in a team is 4.</li>
              <li>Each member must produce a valid ID card of their respective institution.</li>
              <li>Only one autonomous bot allowed per team.</li>
              <li>Only two members per team should be present near the track area when the event starts.</li>
              <li>The bot should be able to maneuver without any human interactions.</li>
              <li>The objective of the competition is for the robot to track the line and reach the final destination in the shortest time.</li>
              <li>
                For your reference kindly go through this video:{" "}
                <a
                  href="https://www.youtube.com/watch?v=mJV-KDqHgDQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00df9a] underline"
                >
                  video
                </a>
              </li>
              <li>The track will not be the same; it's just a reference.</li>
              <li>
                Participants are allowed to inspect the maze layout before the event but cannot touch or adjust the track.
                This will only be done by event coordinators.
              </li>
              <li>The game will start when the signal is given by the organizer.</li>
              <li>Violating any rules will result in disqualification of the team.</li>
              <li>The coordinator's decision is final and binding.</li>
              <li>Further event details and rules will be shared later.</li>
            </ul>
          </section>

          {/* Bot Specifications Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">BOT SPECIFICATIONS</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
              <li>Using voltage greater than 12V is prohibited.</li>
              <li>Use IR sensors to detect the line and follow them.</li>
              <li>The bot must use a microcontroller or IC gates for automatic movement (no manual control).</li>
              <li>Participants should bring their own equipment for the entire competition.</li>
            </ul>
          </section>

          {/* Student Coordinators Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">STUDENT COORDINATORS</h2>
            <ul className="space-y-4 text-xl font-light text-gray-300">
              <li>PRASANNA S - 7418149588  </li>
              <li>RITHIK T M - 8825833084</li>
            </ul>
          </section>

          {/* Registration Fees */}
          <div className="mb-12">
            <h2 className="text-2xl text-center text-[#00df9a] font-semibold">Registration Fees ₹500</h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhUKjpvPc_JCFznyMd7ZWOSUTKVzCm7dp7ymtuCzuk08Yn0A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00df9a] text-white rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-transparent hover:text-[#00df9a] border-2 border-[#00df9a]"
            >
              Register
            </a>
            <a
              href="https://drive.google.com/file/d/1b0iNFl7G5xlH0g7qW0PND8V4jZV2JCu9/view?usp=sharing"
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

export default MazeSolver;
