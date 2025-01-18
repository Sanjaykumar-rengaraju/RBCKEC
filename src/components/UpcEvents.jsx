import React from "react";
import { Link } from "react-router-dom";

// Importing images
import mazesolver from "../assets/events/mazesolver.gif";
import line from "../assets/events/line.gif";
import soccer from "../assets/events/soccer.gif";
import sumo from "../assets/events/sumo.gif";
import race from "../assets/events/race.gif";
import manipulator from "../assets/events/manipulator2.gif";

const UpcEvents = () => {
  const buttons = [
    { id: 1, label: "MAZE SOLVER", path: "/upc-events/events/MazeSolver", img: mazesolver },
    { id: 2, label: "LINE FOLLOWER", path: "/upc-events/events/LineFollower", img: line },
    { id: 3, label: "ROBO SOCCER", path: "/upc-events/events/RoboSoccer", img: soccer },
    { id: 4, label: "ROBO SUMO", path: "/upc-events/events/RoboSumo", img: sumo },
    { id: 5, label: "ROBO RACE", path: "/upc-events/events/RoboRace", img: race },
    { id: 6, label: "MANIPULATOR WORKSHOP", path: "/upc-events/events/Workshop", img: manipulator },
  ];

  const comboOffers = [
    { event: "Line Follower + Maze Solver", price: 700 },
    { event: "Robo Race + Robo Soccer", price: 1000 },
    { event: "Line Follower + Maze Solver + Robo Race", price: 1200 },
    { event: "Robo Soccer + Robo Sumo", price: 1000 },
  ];

  return (
    <div className="flex flex-col items-center p-6 mt-32">
      <h1 className="text-4xl font-extrabold text-teal-400 mb-6 underline hover:translate-x-8 hover:text-lime-400">
        Register for New Events
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
            <div
              className={`relative w-2/3 md:w-1/2 bg-black border-2 border-teal-500 rounded-lg shadow-lg overflow-hidden ${
                index % 2 === 0 ? "-ml-8" : "-mr-8"
              }`}
            >
              <img
                src={button.img}
                alt={`${button.label} GIF`}
                className="w-full object-cover"
              />
              <Link
                to={button.path}
                className="block text-center px-8 py-4 text-white text-xl font-semibold bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-b-lg transition-all duration-300 hover:from-purple-500 hover:via-blue-500 hover:to-teal-500 hover:text-white hover:scale-105"
              >
                {button.label}
              </Link>
            </div>

            {/* Connector dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-black"></div>
          </div>
        ))}
      </div>

      {/* Combo Offers Table */}
      <div className="mt-16 w-full max-w-4xl overflow-x-auto">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-4 underline hover:text-lime-400">
          Combo Offers
        </h2>
        <table className="w-full border-collapse border border-teal-500 text-center bg-black text-teal-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white">
              <th className="py-3 px-6 border border-teal-400 text-2xl sm:text-xl">Event Name</th>
              <th className="py-3 px-6 border border-teal-400 text-2xl sm:text-xl">Registration Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {comboOffers.map((offer, index) => (
              <tr
                key={index}
                className={`hover:bg-teal-500 hover:text-black transition duration-300 ${
                  index % 2 === 0 ? "bg-black" : "bg-gray-800"
                }`}
              >
                <td className="py-3 px-6 border border-teal-400 text-xl">{offer.event}</td>
                <td className="py-3 px-6 border border-teal-400 text-xl">{offer.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcEvents;