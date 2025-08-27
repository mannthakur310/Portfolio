
import React, { useState } from "react";

// Mock projects data for a runnable example
const projects = [
  {
    id: 1,
    title: "GoFood Website",
    description: "A full-stack food ordering application built with the MERN stack. Features secure JWT authentication, menu management for customers, and a seamless checkout process. The frontend is deployed on Vercel and the backend on Render.",
    image: "https://placehold.co/600x400/171721/ffffff?text=GoFood",
    tags: ["MongoDB", "Express.js", "Reactjs", "Node.js", "JWT"],
    category: "full stack",
    webapp: "https://gofood-one.vercel.app/",
  },
  {
    id: 2,
    title: "YouTube Frontend Clone",
    description: "A visually appealing YouTube frontend clone created with React. It features a search functionality, a delete feature for video history, and a home button. The focus was on creating an intuitive and aesthetically pleasing user interface using Material UI.",
    image: "https://placehold.co/600x400/171721/ffffff?text=YouTube+Clone",
    tags: ["React", "Material UI", "CSS", "Bootstrap"],
    category: "frontend",
    webapp: "https://youtube-fclone.netlify.app/",
  },
  {
    id: 3,
    title: "Predictive Website",
    description: "A full‑stack predictive analytics app with Clerk authentication, Vite + React + Tailwind UI, Gemini API for fetching insights, and server‑side PDF export. Users can upload datasets, view predictions, and download reports as PDFs.",
    image: "https://placehold.co/600x400/171721/ffffff?text=Predictive",
    tags: ["Clerk", "Vite", "React", "Tailwind CSS", "Gemini API", "jspdf"],
    category: "full stack",
    webapp: "https://predictive-lime.vercel.app/",
  },
  {
    id: 4,
    title: "Simon Game",
    description: "A classic Simon memory game built with React and Tailwind. Features progressive difficulty, sound/visual cues, and score tracking.",
    image: "https://placehold.co/600x400/171721/ffffff?text=Simon+Game",
    tags: ["JavaScript", "CSS" , "HTML"],
    category: "frontend",
    webapp: "https://mannthakur310.github.io/Simon-Game-Challenge-Starting-Files/",
  },
];

// --- Reusable Project Card Component ---
function ProjectCard({ project, theme }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const tagBg = theme === 'dark' ? 'bg-teal-900/50' : 'bg-teal-100';
  const tagText = theme === 'dark' ? 'text-teal-300' : 'text-teal-800';
  const buttonColor = theme === 'dark' ? 'border-teal-400 text-teal-400' : 'border-teal-500 text-teal-500';

  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 ${cardBg} h-full flex flex-col`}>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-3 py-1 text-xs font-semibold rounded-full ${tagBg} ${tagText}`}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${titleColor}`}>{project.title}</h3>
        <p className={`mb-4 text-sm ${textColor}`}>
          {isExpanded ? project.description : `${project.description.substring(0, 100)}...`}
        </p>
        <div className="mt-auto flex items-center gap-4">
           <button 
             onClick={() => setIsExpanded(!isExpanded)}
             className={`px-4 py-2 text-sm font-medium border-2 rounded-full transition-colors duration-300 hover:bg-teal-500 hover:text-white ${buttonColor}`}
           >
             {isExpanded ? "Show Less" : "Read More"}
           </button>
           <a href={project.webapp} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 text-sm font-medium border-2 rounded-full transition-colors duration-300 hover:bg-teal-500 hover:text-white ${buttonColor}`}>
             Visit
           </a>
        </div>
      </div>
    </div>
  );
}


// --- Main Projects Component ---
function Project({ theme = 'dark' }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
      
  const mainBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const buttonBase = 'px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none';
  const buttonActive = theme === 'dark' ? 'bg-teal-500 text-white' : 'bg-teal-600 text-white';
  const buttonInactive = theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-200';

  return (
    <div className={`py-20 px-4 sm:px-6 lg:px-8 ${mainBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${titleColor}`}>
            Projects
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textColor}`}>
            Here are some of the projects I've been working on.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <button onClick={() => setSelectedCategory("all")} className={`${buttonBase} ${selectedCategory === 'all' ? buttonActive : buttonInactive}`}>
            All
          </button>
          <button onClick={() => setSelectedCategory("frontend")} className={`${buttonBase} ${selectedCategory === 'frontend' ? buttonActive : buttonInactive}`}>
            Frontend
          </button>
          <button onClick={() => setSelectedCategory("full stack")} className={`${buttonBase} ${selectedCategory === 'full stack' ? buttonActive : buttonInactive}`}>
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
