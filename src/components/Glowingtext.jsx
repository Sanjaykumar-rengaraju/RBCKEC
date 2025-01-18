import React from 'react';

const Glowingtext = ({ text, height }) => {
  // Map height prop to corresponding text size class
  const textSizeClass = {
    1: 'sm:text-xl',
    2: 'sm:text-2xl',
    3: 'sm:text-3xl',
    4: 'sm:text-4xl',
    5: 'sm:text-5xl',
    6: 'sm:text-6xl',
    7: 'sm:text-7xl',
    8: 'sm:text-8xl',
    9: 'sm:text-9xl',
  }[height] || 'sm:text-3xl'; // Default to 'sm:text-3xl' if no match

  return (
    <div className="relative flex items-center justify-center">
      {/* Text with blur effect */}
      <span
        className={`absolute mx-auto py-4 w-fit bg-gradient-to-r blur-xl from-teal-400 via-teal-500 to-teal-600 bg-clip-text font-extrabold text-transparent text-center select-none text-3xl ${textSizeClass}`}
      >
        {text}
      </span>
      {/* Text without blur effect */}
      <h1
        className={`relative py-4 w-fit bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text font-extrabold text-transparent text-center select-auto text-3xl ${textSizeClass}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Glowingtext;
