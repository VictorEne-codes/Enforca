"use client";
import React, { useState } from 'react'

const Partners = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const partners = ["Transistor", "Reform", "Tuple", "SavvyCal", "Statamic"];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  return (
    <div className="w-full h-[400px] md:my-20 flex flex-col justify-center items-center gap-10">
        <h2 className="font-bold text-xl">We are trusted by professionals from</h2>
        <div className="flex justify-center items-center gap-10">
        <button
          onClick={handlePrev}
          className="text-xl text-center p-1 rounded-lg bg-blue-700 md:hidden"
        >
          &#8592;
        </button>
        <div className="w-[200px] h-[200px] bg-blue-100 shadow-lg rounded-lg p-5 flex flex-col items-center text-center md:hidden justify-center text-blue-700 text-xl font-bold">
          {partners[currentIndex]}
        </div>
        <div className="hidden md:flex justify-center items-center gap-10">
        <p className="w-[200px] h-[200px] bg-blue-100 shadow-lg rounded-lg flex justify-center items-center text-blue-700 text-xl font-bold">Transistor</p>
        <p className="w-[200px] h-[200px] bg-blue-100 shadow-lg rounded-lg flex justify-center items-center text-blue-700 text-xl font-bold">Reform</p>
        <p className="w-[200px] h-[200px] bg-blue-100 shadow-lg rounded-lg flex justify-center items-center text-blue-700 text-xl font-bold">Tuple</p>
        <p className="w-[200px] h-[200px] bg-blue-100 shadow-lg rounded-lg flex justify-center items-center text-blue-700 text-xl font-bold">SavvyCal</p>
        <p className="w-[200px] h-[200px] bg-blue-100 shadow-lg rounded-lg flex justify-center items-center text-blue-700 text-xl font-bold">Statamic</p>
        </div>
        
        <button
          onClick={handleNext}
          className="text-xl text-center p-1 rounded-lg bg-blue-700 md:hidden"
        >
          &#8594;
        </button>
        </div>
    </div>
  )
}

export default Partners