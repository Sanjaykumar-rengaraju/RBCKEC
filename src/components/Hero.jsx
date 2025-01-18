// import { Link } from 'react-router-dom';
import React, { memo } from "react";
import Model3d from './Model3d';
import Glowingtext from './Glowingtext';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent"
      id="home"
    >
      <div className="flex flex-col justify-center px-6 md:px-10 gap-4 sm:gap-3">
        {["ROBOTICS CLUB OF KEC", "Kongu Engineering College", "For the Students, By the Students."].map((text, index) => (
          <Glowingtext key={index} text={text} height={5} />
        ))}
        {/* Register Button */}
        <div className="pointer-events-auto flex justify-center">
          <Button />
        </div>
        <span className="text-teal-400 flex justify-center">Event Date : 11-MAR-2025</span>
      </div>

      <div className="order-first pointer-events-none">
        <Model3d />
      </div>
    </div>
  );
};

export default memo(Hero);