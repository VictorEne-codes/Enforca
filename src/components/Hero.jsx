"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="image h-[600px] md:h-full">
      <Image
        src="/bg1.jpg"
        loading="lazy"
        width={300}
        height={600}
        style={{ objectFit: "cover" }}
        alt="Background Image"
        className="absolute -z-10 w-full"
      />
      <div>
        <div className="flex justify-between items-center p-6">
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <button className="md:hidden flex bg-blue-600 p-2 px-2 text-sm text-white rounded-2xl hover:bg-blue-900 hover:underline">
          <Link href="/">Start Here</Link>
        </button>
        </div>

        <div
          className={`flex-col md:flex-row md:flex ml-5 md:ml-0 py-10 justify-end pr-20 gap-5 ${
            isOpen ? "flex" : "hidden"
          } md:gap-10`}
        >
          <Link
            className="text-sm lg:text-xl text-white hover:text-blue-800 hover:underline"
            href="/"
          >
            For Mentorship
          </Link>
          <Link
            className="text-sm lg:text-xl text-white hover:text-blue-800 hover:underline"
            href="/"
          >
            For Job Seekers
          </Link>
        </div>
      </div>
      <div className="mt-10 md:mt-1 px-5 md:px-10 lg:px-28">
        <h1 className="text-[30px] md:text-[60px] text-white ">Welcome To Enforca</h1>
        <h1 className="text-[18px] md:text-[35px] text-white w-[350px] md:w-[600px] py-3">
          The First <span className="text-blue-400">AI</span> job application
          and support platform.
        </h1>
        <h1 className="text-[12px] md:text-[20px] text-white w-[350px] md:w-[700px] pt-0 md:pt-5">
          Land your dream job with personalized preparation and expert guidance
          aided with our AI-powered job processing platform
        </h1>
        <button className="bg-blue-600 p-2 md:px-8 text-sm md:text-xl text-white rounded-2xl md:mt-10 mt-3 hover:bg-blue-900 hover:underline">
          <Link href="/">Start Here</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <Image
//         src="/bg1.jpg"
//         loading="lazy"
//         width={1200}
//         height={600}
//         style={{ objectFit: "cover" }}
//         alt="Background Image"
//         className="absolute inset-0 w-full h-full -z-10"
//       />

{
  /* Navbar */
}
// <div className="flex flex-col justify-end items-center py-10 pr-8 md:pr-20 gap-5 md:gap-10">
{
  /* Hamburger Menu Button */
}
// <button
//   className="md:hidden text-white text-3xl"
//   onClick={() => setIsOpen(!isOpen)}
// >
//   {isOpen ? "✕" : "☰"}
// </button>

{
  /* Links */
}
//   <div className={`flex-col md:flex-row md:flex gap-5 ${isOpen ? 'flex' : 'hidden'} md:gap-10`}>
//     <Link
//       className="text-lg md:text-xl text-white hover:text-blue-800 hover:underline"
//       href="/"
//     >
//       For Mentorship
//     </Link>
//     <Link
//       className="text-lg md:text-xl text-white hover:text-blue-800 hover:underline"
//       href="/"
//     >
//       For Job Seekers
//     </Link>
//   </div>
// </div>

{
  /* Main Content */
}
//       <div className="mt-10 px-5 md:px-28">
//         <h1 className="text-4xl md:text-[60px] text-white">Welcome To Enforca</h1>
//         <h2 className="text-2xl md:text-[35px] text-white max-w-md md:max-w-lg">
//           The First <span className="text-blue-400">AI</span> job application and support platform.
//         </h2>
//         <p className="text-base md:text-[20px] text-white max-w-lg pt-5">
//           Land your dream job with personalized preparation and expert guidance aided with our AI-powered job processing platform
//         </p>
//         <button className="bg-blue-600 p-2 px-5 md:px-8 text-lg md:text-xl text-white rounded-2xl mt-5 md:mt-10 hover:bg-blue-900 hover:underline">
//           <Link href="/">Start Here</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
