import React from "react";

// Mock education data for a runnable example
const education = [
  {
    id: 0,
    school: "Madan Mohan Malviya University of Technology, Gorakhpur",
    date: "2022 - 2026",
    grade: "8.14 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering. I have a strong foundation in data structures, algorithms, and web development.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    img: "https://placehold.co/100x100/171721/ffffff?text=MMMUT",
  },
  {
    id: 1,
    school: "Allahabad Public School and College",
    date: "2021 - 2022",
    grade: "90%",
    desc: "I completed my intermediate studies with a focus on Physics, Chemistry, and Mathematics.",
    degree: "Intermediate",
    img: "https://placehold.co/100x100/171721/ffffff?text=APS",
  },
  {
    id: 2,
    school: "Allahabad Public School and College",
    date: "2019 - 2020",
    grade: "90%",
    desc: "I completed my high school education with a strong academic record.",
    degree: "High School",
    img: "https://placehold.co/100x100/171721/ffffff?text=APS",
  },
];

// --- Reusable Timeline Item Component ---
const TimelineItem = ({ item, isLast, theme }) => {
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const gradeColor = theme === 'dark' ? 'text-teal-300' : 'text-teal-700';
  const degreeColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-500';

  return (
    <div className="relative flex items-start">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center mr-6">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${theme === 'dark' ? 'border-teal-400 bg-gray-900' : 'border-teal-500 bg-gray-100'}`}></div>
        {!isLast && <div className={`w-px h-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>}
      </div>

      {/* Timeline Content */}
      <div className={`w-full pb-12 transform transition-all duration-300 hover:scale-[1.02]`}>
        <div className={`p-6 rounded-xl shadow-md ${cardBg}`}>
            <div className="flex items-start gap-4">
                <img src={item.img} alt={item.school} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                    <h3 className={`text-xl font-bold ${titleColor}`}>{item.school}</h3>
                    <p className={`text-sm font-medium mt-1 ${degreeColor}`}>{item.degree}</p>
                    <p className={`text-sm mt-1 ${textColor}`}>{item.date}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className={`text-lg font-semibold ${gradeColor}`}>{item.grade}</p>
                <p className={`mt-2 text-sm ${textColor}`}>{item.desc}</p>
            </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Education Component ---
function Education({ theme = 'dark' }) { // Defaulting theme to dark
  const mainBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`py-20 px-4 sm:px-6 lg:px-8 ${mainBg}`}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${titleColor}`}>
            Education
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textColor}`}>
            My education has been a journey of self-discovery and growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div>
          {education.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={index === education.length - 1}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
