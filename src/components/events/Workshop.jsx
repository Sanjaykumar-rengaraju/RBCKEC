import React from 'react';
import {Fade} from 'react-awesome-reveal';

const Workshop = () => {
  return (
    <Fade bottom duration={2000}>
      <div className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-[#00df9a] font-semibold mb-6 text-center mt-24">MANIPULATOR WORKSHOP</h1>
          
          {/* General Rules Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">OVERVIEW</h2>
            <h2 className="text-3xl text-[#00df9a] font-semibold mt-2">Robot Specification</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>	Fanuc ER - 4iA <br /></li>
                <li>	ABB IRB 1410  <br /></li>
            </ul>
          </section>

          {/* Bot Specifications Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">LECTURE DETAILS</h2>
            <ul className="list-disc space-y-4 text-xl font-light text-gray-300 pl-6">
                <li>  A brief Lecture on Industrial Robots and its applications.</li>
                <li>	Hands-on work in Fanuc Roboguide (Robot Simulation software).</li>
                <li>	Robot Programming and Teach Pendant operation.</li>
                <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
            </ul>
          </section>

          {/* Student Coordinators Section */}
          <section className="space-y-8 mb-12">
            <h2 className="text-3xl text-[#00df9a] font-semibold">STUDENT COORDINATORS</h2>
            <ul className="space-y-4 text-xl font-light text-gray-300">
              <li>SANKAR SIVARAJ S - 8667868481</li>
            </ul>
          </section>

          {/* Registration Fees */}
          <div className="mb-12">
            <h2 className="text-2xl text-center text-[#00df9a] font-semibold">Registration Fees ₹400</h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUY-JJE6UQ09mlAraLqpG5v6ES0mUrNLws3mD-lopkRd7tpw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00df9a] text-white rounded-lg px-10 py-3 font-semibold transform transition duration-300 hover:bg-transparent hover:text-[#00df9a] border-2 border-[#00df9a]"
            >
              Register
            </a>
            <a
              href="https://drive.google.com/file/d/1Cm7yxmgTofkOP8-Yt_YRV8DZN8nI6Ajj/view?usp=sharing"
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

export default Workshop;