import React, { memo } from "react";
import { members } from "./MembersData";

const Member = () => {
  return (
    <div className="bg-transparent p-6 flex flex-col items-center mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:max-w-screen-2xl max-w-screen-md place-content-center">
        {Object.values(members).map((member, index) => (
          <div
            key={index}
            className="bg-transparent border-2 border-teal-500 rounded-lg shadow-lg transform transition-transform duration-500 hover:skew-x-3 hover:shadow-2xl hover:border-teal-300 perspective"
          >
            <div className="relative p-4">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-60 object-fit rounded-lg border border-teal-500 transform transition-transform duration-500 hover:-translate-y-10 hover:shadow-2xl"
                loading="lazy"
              />
              <div className="mt-4 p-4 flex items-center justify-center flex-col transform transition-transform duration-500 hover:scale-125 hover:-rotate-3">
                <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mb-2">{member.name}</h3>
                <p className="text-xl md:text-2xl text-teal-300 mb-1">{member.role}</p>
                <p className="text-xl md:text-2xl text-teal-300">{member.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Member);