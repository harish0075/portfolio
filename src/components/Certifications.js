import React, { useState } from 'react';

const certifications = [
  {
    id: 1,
    title: "IoT-based Air Quality Monitoring Internship",
    institution: "CSIR-CSIO, Chennai",
    level: "Internship",
    date: "June 2025",
    description: "Worked on designing and prototyping an IoT-based Air Quality Monitoring Node. Gained hands-on experience with Raspberry Pi, microcontrollers (MCUs), and a variety of environmental sensors for real-time data collection and analysis.",
    skills: ["IoT", "Raspberry Pi", "Microcontrollers", "Sensors", "Data Acquisition"],
    color: "from-yellow-500 to-green-600",
    icon: "🌫️"
  },
  {
    id: 2,
    title: "Diploma in Programming",
    institution: "IIT Madras",
    level: "Diploma",
    date: "Aug 2025",
    description: "Covers Python, object-oriented programming, data structures, and system commands. Focused on real-world problem-solving and full-stack development.",
    skills: ["Python", "OOP", "Data Structures", "System commands"],
    color: "from-blue-500 to-purple-600",
    icon: "💻"
  },
  {
    id: 3,
    title: "Foundation Certificate in Data Science",
    institution: "IIT Madras",
    level: "Foundation",
    date: "May 2024",
    description: "Built a strong base in statistics, linear algebra, Python programming, and data analysis. Developed practical skills for data wrangling and visualization.",
    skills: ["Statistics", "Python", "Data Analysis"],
    color: "from-green-500 to-teal-600",
    icon: "📊"
  },
  {
    id: 4,
    title: "Data Mining",
    institution: "NPTEL",
    level: "Certification",
    date: "2024",
    description: "Completed an 8-week NPTEL certification course covering data preprocessing, classification (including decision trees, Bayes classifiers), clustering, outlier detection, and visualization. The course concluded with real-world case studies.",
    skills: ["Data Preprocessing", "Clustering", "Outlier Detection", "Data Visualization"],
    color: "from-orange-500 to-red-600",
    icon: "📊"
  }
];

const Certifications = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-white font-[Poppins] py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-red-400 bg-clip-text text-transparent">Timeline</span>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">Intern and Certifications</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 z-0"></div>

        {certifications.map((cert, idx) => (
          <div
            key={cert.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
            }`}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Timeline dot */}
            <div
              className={`absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${cert.color} border-4 border-black z-10 ${
                hoveredId === cert.id ? 'scale-150' : 'scale-100'
              } transition-transform duration-300`}
            ></div>

            {/* Card */}
            <div className={`w-full sm:w-5/12 mt-10 sm:mt-0 ${idx % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
              <div
                className={`bg-gradient-to-br ${cert.color} p-6 rounded-2xl text-white shadow-2xl transition-all duration-500 transform ${
                  hoveredId === cert.id ? 'scale-105 rotate-1' : 'hover:scale-105'
                } ${idx % 2 === 0 ? 'sm:origin-right' : 'sm:origin-left'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <h3 className="text-md sm:text-lg font-bold">{cert.title}</h3>
                    <p className="text-white/80 text-sm">{cert.institution}</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm mb-3">{cert.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="bg-white/20 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-white/70 text-xs sm:text-sm font-medium">{cert.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
