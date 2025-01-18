// ParticleBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const SpagettiBG = () => {
  const particlesInit = async (main) => {
    // You can initialize the tsParticles instance here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // You can use the container here to do something after particles are loaded
  };

  return (
    <div className="relative w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 500, density: { enable: true, value_area: 800 } },
            color: { value: "#71A9" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#71A9" },
              polygon: { nb_sides: 12 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#7149",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              grab: { distance: 191.80819180819182, line_linked: { opacity: 1 } },
              bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
              repulse: { distance: 695.3046953046953, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
};

export default SpagettiBG;
