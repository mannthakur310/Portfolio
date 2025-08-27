import React from "react";

// Mock skills data for a runnable example
const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: "https://reactjs.org/logo-og.png" },
      { name: "Redux", image: "https://cdn.jsdelivr.net/gh/reduxjs/redux/logo/logo.svg" },
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
      { name: "Bootstrap", image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express Js", image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
      { name: "MongoDB", image: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" },
      { name: "MySQL", image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
      { name:  "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" },
      { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
];


function Skill({ theme = 'dark' }) {
  const mainBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  return (
    <div className={`${mainBg} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${titleColor}`}>
            Skills
          </h2>
          <p className={`mt-4 text-lg ${textMuted} max-w-2xl mx-auto`}>
            Here are some of the technologies I've been working with. I'm always
            eager to learn and grow my skill set.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.title}
              className={`${cardBg} border-2 ${borderColor} rounded-2xl p-8 transform transition-all duration-300 hover:border-teal-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20`}
            >
              <h3 className="text-2xl font-bold text-center text-teal-500 mb-8">
                {skillCategory.title}
              </h3>
              
              {/* Individual Skills Wrapper */}
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.skills.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-3 w-full h-12 ${theme === 'dark' ? 'bg-gray-900 border-gray-600' : 'bg-gray-50 border-gray-200'} border rounded-lg px-4`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.name} logo`}
                      className="w-6 h-6 object-contain shrink-0"
                    />
                    <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} font-medium truncate`}
                      title={item.name}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
