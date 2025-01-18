import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BirdsBG from "./BirdsBG";
import PreEvents from "./PreEvents";
import EventPage from "./EventPage";
import UpcEvents from "./UpcEvents"
import MazeSolver from './events/MazeSolver';
import RoboSoccer from './events/RoboSoccer';
import LineFollower from './events/LineFollower';
import RoboRace from './events/RoboRace';
import RoboSumo from './events/RoboSumo';
import Workshop from './events/Workshop';
import Footer from './Footer';

const Hero = lazy(() => import('./Hero'));
const Objective = lazy(() => import('./Objective'));
const Members = lazy(() => import('./Member'));

const Home = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Hero />
    <Objective />
    <Footer/>
  </Suspense>
);

const About = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Members />
  </Suspense>
);

const App = () => {
  return (
    <Router>
      {/* Wrapper div to control the layout */}
      <div className="relative min-h-screen overflow-hidden">
        <BirdsBG /> {/* Fixed background for entire page */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pre-events" element={<PreEvents />} />
            <Route path="/past-events/:eventId" element={<EventPage />} />
            <Route path="/upc-events" element={<UpcEvents />} />
            <Route path="/upc-events/events/MazeSolver" element={<MazeSolver/>}/>
            <Route path="/upc-events/events/RoboSoccer" element={<RoboSoccer/>}/>
            <Route path="/upc-events/events/LineFollower" element={<LineFollower/>}/>
            <Route path="/upc-events/events/RoboRace" element={<RoboRace/>}/>
            <Route path="/upc-events/events/RoboSumo" element={<RoboSumo/>}/>
            <Route path="/upc-events/events/Workshop" element={<Workshop/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;