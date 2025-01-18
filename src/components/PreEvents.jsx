import React from "react";
import { Link } from "react-router-dom";

import event1 from "../assets/events/event1.png";
import event2 from "../assets/events/event2.png";
import event3 from "../assets/events/event3.png";
import event4 from "../assets/events/event4.jpg";
import event5 from "../assets/events/event5.jpg";

const PreEvents = () => {
  const buttons = [
    { id: 1, label: "Career Guidance Program", path: "/past-events/event1", img: event1 },
    { id: 2, label: "Inaugural Function", path: "/past-events/event2", img: event2 },
    { id: 3, label: "Teachers and Engineers Day Celebration", path: "/past-events/event3", img: event3 },
    { id: 4, label: "Tech Minds", path: "/past-events/event4", img: event4 },
    { id: 5, label: "Sumo Bot", path: "/past-events/event5", img: event5 },
  ];

  return (
    <div className="flex flex-col items-center p-6 mt-32">
      <h1 className="text-4xl font-extrabold text-teal-400 mb-6 underline hover:translate-x-8 hover:text-lime-400">
        Past Events
      </h1>

      <div className="relative w-full max-w-4xl">
        {/* Center glowing line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-lime-400 h-full animate-pulse"></div>

        {/* Timeline events */}
        {buttons.map((button, index) => (
          <div
            key={button.id}
            className={`flex items-center mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Event Card */}
            <div
              className={`relative w-2/3 md:w-1/2 bg-black border-2 border-teal-500 rounded-lg shadow-lg overflow-hidden ${
                index % 2 === 0 ? "-ml-8" : "-mr-8"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <img
                  src={button.img}
                  alt={button.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link
                to={button.path}
                className="block text-center px-8 py-4 text-teal-300 text-xl font-semibold bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-b-lg transition-all duration-300 hover:from-purple-500 hover:via-blue-500 hover:to-teal-500 hover:text-white hover:scale-105"
              >
                {button.label}
              </Link>
            </div>

            {/* Connector dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreEvents;
