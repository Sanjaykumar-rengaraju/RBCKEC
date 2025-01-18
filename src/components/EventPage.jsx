import React from "react";
import { useParams } from "react-router-dom";
import { events } from "./EventsData.js"; // Event data imported here

const EventPage = () => {
  const { eventId } = useParams(); // Get the eventId from the URL
  const event = events[eventId]; // Find the specific event using the eventId

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center bg-black min-h-screen p-6">
        <h1 className="text-3xl text-teal-400 font-bold">Event Not Found</h1>
        <p className="text-teal-300 text-lg mt-4">Please check the URL and try again.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-12 mt-24">
      <img
        src={event.photo}
        alt={event.name}
        className="w-full max-w-lg rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-3xl text-teal-400 font-bold mb-4">{event.name}</h1>
      <p className="text-teal-300 text-xl w-1/2 text-justify">{event.description}</p>
    </div>
  );
};

export default EventPage;