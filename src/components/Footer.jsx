"use client";
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-blue-800">
        <Image
        src="/enf.png"
        loading="lazy"
        width={300}
        height={600}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        className="w-[400px] h-[700px] ml-[100px]"
      />
      <div>
        <h2>We are an Artificial intelligence platform that helps talents get decent jobs.</h2>
        <div>
        <Image
        src="/icons8-facebook-50.png"
        loading="lazy"
        width={50}
        height={50}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-github-60.png"
        loading="lazy"
        width={50}
        height={50}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-instagram-50.png"
        loading="lazy"
        width={50}
        height={50}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-twitter-50.png"
        loading="lazy"
        width={50}
        height={50}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="w-[400px] h-[700px] ml-[100px]"
        />
        <Image
        src="/icons8-world-50.png"
        loading="lazy"
        width={60}
        height={60}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        // className="ml-[100px]"
        />
        </div>
      </div>
    </div>
  )
}

export default Footer