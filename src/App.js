import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Sun, Moon, Github, Linkedin, Menu, X, Phone, Code2, Code } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Home from "./component/screen/Home";
import Skill from "./component/screen/Skill";
import Project from "./component/screen/Project";
import Education from "./component/screen/Education";
import Contact from "./component/screen/Contact";

// --- MOCK DATA AND COMPONENTS (for a runnable example) ---
const Bio = {
  name: "Manvendra Pratap Singh",
  github: "https://github.com/mannthakur310",
  linkedin: "https://www.linkedin.com/in/mannthakur/",
  insta: "https://www.instagram.com/mann.pratap.singh/",
  twitter: "https://twitter.com/mann_pratap_",
  codeforces: "https://codeforces.com/profile/mannpratap310",
  codechef: "https://www.codechef.com/users/mannpratap310",
};
// Using actual section components from src/component/screen
// --- END MOCK DATA ---


// =================================================================================
// --- MODERNIZED NAVBAR COMPONENT ---
// =================================================================================
function Navbar({ theme, toggleTheme, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navBg = theme === 'dark' ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const hoverTextColor = theme === 'dark' ? 'hover:text-teal-400' : 'hover:text-teal-600';
  const logoColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const accentColor = theme === 'dark' ? 'text-teal-400' : 'text-teal-600';

  const navLinks = ["About", "Skills", "Projects", "Education"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={`text-2xl font-bold ${logoColor}`}>
              <span className={accentColor}>&lt;</span>
              Portfolio
              <span className={accentColor}> /&gt;</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
               <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.toLowerCase()); }} className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
                {link}
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={Bio.github} target="_blank" rel="noopener noreferrer" className={textColor}><Github className="w-6 h-6" /></a>
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className={textColor}><Linkedin className="w-6 h-6" /></a>
            <button onClick={() => scrollToSection('contact')} className={textColor}><Phone className="w-6 h-6" /></button>
            <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={toggleTheme} className={`p-2 mr-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={textColor}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden px-4 pt-2 pb-4 space-y-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.toLowerCase()); setIsOpen(false); }} className={`block px-3 py-2 rounded-md font-medium ${textColor} ${hoverTextColor}`}>
              {link}
            </a>
          ))}
          <div className={`border-t pt-4 flex items-center justify-center space-x-6 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
             <a href={Bio.github} target="_blank" rel="noopener noreferrer" className={textColor}><Github className="w-7 h-7" /></a>
             <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className={textColor}><Linkedin className="w-7 h-7" /></a>
             <button onClick={() => {scrollToSection('contact'); setIsOpen(false);}} className={textColor}><Phone className="w-7 h-7" /></button>
          </div>
        </div>
      )}
    </nav>
  );
}


// =================================================================================
// --- MODERNIZED FOOTER COMPONENT ---
// =================================================================================
function Footer({ theme }) {
  const footerBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const hoverColor = theme === 'dark' ? 'hover:text-white' : 'hover:text-black';

  return (
    <footer className={`py-12 ${footerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className={`text-2xl font-bold ${titleColor}`}>Portfolio</h3>
        <div className="flex justify-center gap-6 my-6">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className={`${textColor} ${hoverColor} transition-colors`}><Github className="w-6 h-6" /></a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className={`${textColor} ${hoverColor} transition-colors`}><Linkedin className="w-6 h-6" /></a>
          <a href="https://leetcode.com/u/mannpratap310/" target="_blank" rel="noopener noreferrer" className={`${textColor} ${hoverColor} transition-colors`} title="LeetCode">
            <Code2 className="w-6 h-6" />
          </a>
          <a href={Bio.codeforces} target="_blank" rel="noopener noreferrer" className={`${textColor} ${hoverColor} transition-colors`} title="Codeforces">
          <Code2 className="w-6 h-6" />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Codeforces_logo.svg" alt="Codeforces" className="h-6 w-auto" /> */}
          </a>
          <a href={Bio.codechef} target="_blank" rel="noopener noreferrer" className={`${textColor} ${hoverColor} transition-colors`} title="Codechef">
          <Code2 className="w-6 h-6" />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/CodeChef_Logo.svg" alt="CodeChef" className="h-6 w-auto bg-white rounded" /> */}
          </a>
        </div>
        <p className={textColor}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}


// =================================================================================
// --- MAIN APP COMPONENT ---
// =================================================================================
function App() {
  const [theme, setTheme] = useState("dark");
  const [init, setInit] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId) => {
    // The "About" link should scroll to the "home" section.
    const targetId = sectionId === 'about' ? 'home' : sectionId;
    const ref = sectionRefs[targetId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const particleColor = theme === 'dark' ? '#FFFFFF' : '#374151';

  return (
    <Router>
      <div className={theme}>
        {init && (
          <Particles
            id="tsparticles"
            className="fixed inset-0 -z-10 pointer-events-none"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                },
              },
              particles: {
                color: { value: particleColor },
                links: { color: particleColor, distance: 150, enable: true, opacity: 0.2, width: 1 },
                move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false },
                number: { density: { enable: true }, value: 80 },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        )}
        
        <Navbar theme={theme} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
        
        <main className="pt-24">
          <div ref={sectionRefs.home}><Home theme={theme} /></div>
          <div ref={sectionRefs.skills}><Skill theme={theme} /></div>
          <div ref={sectionRefs.projects}><Project theme={theme} /></div>
          <div ref={sectionRefs.education}><Education theme={theme} /></div>
          <div ref={sectionRefs.contact}><Contact theme={theme} /></div>
        </main>

        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
