import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Get Career Roadmap",
      description: "Upload your CV for review analysis and initial feedback on key skills and experience.",
    },
    {
      title: "Get real experience with expert guidance",
      description: "We take you into the real world of how to do in your chosen career beyond the theory knowledge.",
    },
    {
      title: "Simulated Interview Session",
      description: "Practice answering both behavioral and technical interview questions in a safe and supportive environment.",
    },
    {
      title: "Land the Job",
      description: "Track your job applications and schedule interviews with ease using our automated and streamlined platform.",
    },
  ];

  return (
    <div className="h-[600px] w-full md:mt-24 mt-[200px] py-10 flex flex-col items-center gap-8">

      <h2 className="text-2xl font-bold text-center pb-10">We built our business on customer service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-100 shadow-lg rounded-lg p-5 flex flex-col items-center justify-center text-center h-[300px]"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-700">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
