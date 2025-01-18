import React from "react";
import Lottie from "lottie-react";
import OpenBOT from "../assets/media/OpenBOT.json";
import MissionBOT from "../assets/media/MissionBOT.json";
import VissionBOT from "../assets/media/VisionBOT.json";
import ObjectiveBOT from "../assets/media/ObjectiveBOT.json";
import GlowingText from "./Glowingtext";
import { Fade } from "react-awesome-reveal";

const Objective = () => {
  return (
    <div className="bg-transparent p-4">
      {/* Main container for layout */}
      <div className="space-y-8">
        {/* Intro section */}
        <Fade direction="left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center order-1 md:order-none">
              <Lottie
                animationData={OpenBOT}
                loop={true}
                className="w-2/3 h-auto"
              />
            </div>
            <div className="md:w-3/4 p-4 order-2 md:order-none">
              <GlowingText
                text="Proudly Presented By ROBOTICS CLUB OF KEC"
                height={4}
              />
              <GlowingText
                text="FOR THE STUDENTS BY THE STUDENTS."
                height={4}
              />
              <GlowingText
                text="From Mechatronics Engineering Department"
                height={4}
              />
            </div>
          </div>
        </Fade>

        {/* Objective section */}
        <Fade direction="up">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 p-4 order-2 md:order-1">
              <GlowingText text="Objective" height={5} />
              <GlowingText
                text="“To transform our culture by creating a world where science and technology are celebrated and where young people dream of becoming science and technology leaders”"
                height={4}
              />
            </div>
            <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
              <Lottie
                animationData={ObjectiveBOT}
                loop={true}
                className="w-1/2 h-auto"
              />
            </div>
          </div>
        </Fade>

        {/* Mission section */}
        <Fade direction="left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center order-1 md:order-none">
              <Lottie
                animationData={MissionBOT}
                loop={true}
                className="w-2/3 h-auto"
              />
            </div>
            <div className="md:w-3/4 p-4 order-2 md:order-none">
              <GlowingText text="Mission" height={5} />
              <GlowingText
                text="Our mission is to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership."
                height={4}
              />
            </div>
          </div>
        </Fade>

        {/* Vision section */}
        <Fade direction="right">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 p-4 order-2 md:order-1">
              <GlowingText text="Vision" height={5} />
              <GlowingText
                text="To become the greatest Robotics team in the South Zone and an annual competitor at the international level Robotics Competitions. Exemplifying the importance of service through continual expansion in focus and scale of community service projects within India. Acknowledging and addressing contemporary environmental issues through the adoption and innovation of new forms of clean building measures."
                height={4}
              />
            </div>
            <div className="md:w-1/2 flex justify-center order-1 md:order-2">
              <Lottie
                animationData={VissionBOT}
                loop={true}
                className="w-2/3 h-auto"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Objective;