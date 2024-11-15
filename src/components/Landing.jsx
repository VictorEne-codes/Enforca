"use client";
import React from 'react'
import Image from 'next/image';


const Landing = () => {
  return (
    <div>
        <Image
        src="/bg2.jpeg"
        loading="lazy"
        width={300}
        height={600}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        className="absolute -z-10 w-full h-[500px]"
      />
      <div className="md:pl-20 pl-5 pt-20">
      <span className="text-white text-2xl md:text-6xl font-bold text-center">Land your dream job <br />faster with</span>
      <h2 className="text-blue-700 text-2xl md:text-6xl font-bold text-left">personalized support <br />every step of the way.</h2>
        <p className="text-white text-sm md:text-xl md:w-[600px] w-[200px] pt-5">Never face the job search alone. Our app connects you with a dedicated mentor, personalizes your CV for success, and equips you with interview skills through realistic simulations and expert feedback. Land your dream job faster with all-in-one support.</p>
      </div>
    </div>
  )
}

export default Landing