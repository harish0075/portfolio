import { useEffect, useRef, useState } from "react";
import ScrambledText from "./ScrambledText";

export default function About() {
  const sectionRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0); // 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Compute how much of the section is visible (0 to 1)
      const visible = Math.min(
        Math.max(0, windowHeight - rect.top) / (rect.height + windowHeight),
        1
      );

      setScrollRatio(visible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-grey px-6 py-16 font-[Poppins] overflow-hidden"
    >
      {/* Scroll-synced expanding circle */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100 z-0 transition-transform duration-0"
        style={{
          width: "10rem",
          height: "10rem",
          transform: `translate(-50%, -50%) scale(${1 + scrollRatio * 19})`,
        }}
      ></div>

      {/* Content above circle */}
      <div className="relative z-10 mb-0 max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-1 text-red-500">About Me</h2>
        <ScrambledText
          className="scrambled-text-demo text-lg mb-4 leading-relaxed text-gray-700"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars={".:"}>I'm a passionate IT student with a knack for software development and problem solving. Adaptable and
          team-oriented, I’m always eager to expand my technical expertise, build impactful projects, and explore emerging technologies. Currently pursuing a B.Tech in IT from SSN College of Engineering, with parallel diplomas in Data Science and Programming from IIT Madras.
        </ScrambledText>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-gray-900">Projects</h3>

        <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 scrollbar-hide">
          {/* Project 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition min-w-full snap-start">
            <h4 className="text-2xl font-bold text-red-500 mb-2">
              SureCLAIM – ML-Powered Insurance Assessment
            </h4>
            <p className="text-xl text-gray-800 mb-4 leading-relaxed">
              A ML-powered Billing System for Insured Vehicles.
            </p>
            <ul className="text-base text-gray-700 list-disc list-inside space-y-1">
              <li>Aiming to implement a pipeline with object detection + classification with deep learning models</li>
              <li>Use NLP to read data from insurance documents and tabulate data</li>
              <li>Creates a bill based on claimable and non-claimable damage</li>
              <li>Make a user friendly UI where images are uploaded, insurance policy is selected and bill is generated</li>
              <li><span className="font-bold">Current status:</span> Planning on using a hybrid of YOLO and ResNet50 models. 
                  Exploring on transformer based models.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition min-w-full snap-start">
            <h4 className="text-xl font-bold text-red-500 mb-2">
              Household Services Web Application
            </h4>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              A full-stack platform that connects customers with local service professionals.
            </p>
            <ul className="text-base text-gray-700 list-disc list-inside space-y-1">
              <li>Built using Flask + SQLite</li>
              <li>3 user roles: Customer, Professional, Admin</li>
              <li>Features role-based login, service request handling, and CRUD logic.</li>
              <li>Dynamic request flow between customer and professionals.</li>
              <li><span className="font-bold">Current status:</span> Completed with future scope for review and rating system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
