import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

const BirdsBG = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: '#000',
          color1: '#60ffb2',
          color2: '#000',
          colorMode: 'lerpGradient',
          birdSize: 0.9,
          wingSpan: 22.0,
          speedLimit: 7.0,
          separation: 65.0,
          alignment: 62.0,
          cohesion: 38.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef} className="fixed inset-0 -z-10" />;
};

export default React.memo(BirdsBG);