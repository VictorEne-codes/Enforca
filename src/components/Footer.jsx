"use client";
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="md:mt-20 mt-[1000px] bg-blue-800 flex justify-center md:justify-between items-center flex-col md:flex-row pr-5 md:pr-[150px]">
        <Image
        src="/enf.png"
        loading="lazy"
        width={300}
        height={400}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        className="w-[400px] h-[400px] ml-0 md:ml-[100px] hidden md:flex"
      />
      <div className="flex justify-between w-[300px] md:w-[200px] items-center flex-col pt-10 md:pt-0">
        <h2 className="text-white text-lg">We are an Artificial intelligence platform that helps talents get decent jobs.</h2>
        <div className="flex justify-start items-start gap-[15px] mt-5">
        <Image
        src="/icons8-facebook-50.png"
        loading="lazy"
        width={30}
        height={30}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-github-60.png"
        loading="lazy"
        width={30}
        height={30}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-instagram-50.png"
        loading="lazy"
        width={30}
        height={30}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-twitter-50.png"
        loading="lazy"
        width={30}
        height={30}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-world-50.png"
        loading="lazy"
        width={30}
        height={30}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="ml-[100px]"
        />
        </div>
        <Image
        src="/enf2.png"
        loading="lazy"
        width={300}
        height={300}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        className="my-[-80px]"
        />
      </div>
      <div className="flex justify-center items-start w-[300px] py-2 md:py-8 flex-col gap-[20px]">
      <p className="text-white text-lg text-left">Get in touch with us</p>
      <p className="text-white text-lg">Nigeria: Ajao estate Lagos</p>
      <p className="text-white text-lg">United kingdom: 2nd Floor College House 17 King Edwards Road Ruislip London</p>
      <p className="text-white text-lg">United states: Delaware, United states</p>
      <p className="text-white text-lg">Whatsapp: +2348127575385, +974 7064 0796</p>
      <p className="text-white text-lg">Copyright © 2024 Mentor Techies. Powered by Mentor Techies</p>
      </div>
    </div>
  )
}

export default Footer