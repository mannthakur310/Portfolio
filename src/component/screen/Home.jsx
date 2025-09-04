import React from "react";
import Typewriter from "typewriter-effect";
import resume from "../../assert/manvendra_resume.pdf";

// Mock Bio data for a runnable example
const Bio = {
  name: "Manvendra Prtap Singh",
  roles: [
    "Full Stack Developer",
    "MERN Stack Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],
  description:
    "I'm a passionate and creative full stack developer with a knack for building beautiful, functional, and scalable web applications. I love turning ideas into reality with code.",
};

// Using imported resume asset for download

function Home({ theme = 'dark' }) {
  const mainBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  const mutedText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const accent = theme === 'dark' ? 'text-teal-400' : 'text-teal-600';
  return (
    <>
      {/* This style tag contains the keyframes for the image morphing animation. */}
      <style>
        {`
          @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          .animate-morph {
            animation: morph 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* Main container */}
      <div className={`flex flex-col md:flex-row items-center justify-center min-h-screen ${mainBg} px-6 md:px-10 lg:px-20`}>
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I am <br />
            {Bio.name}
          </h1>
          
          <div className="flex items-center justify-center md:justify-center text-2xl md:text-3xl font-semibold mt-3 mb-5">
            I am a
            <span className={`${accent} ml-2`}>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <p className={`${mutedText} text-lg max-w-xl mx-auto md:mx-0`}>
            {Bio.description}
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center order-1 md:order-2 mb-10 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src="myphoto.jpg"
              alt="My Profile"
              className="w-full h-full object-cover shadow-2xl animate-morph"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
