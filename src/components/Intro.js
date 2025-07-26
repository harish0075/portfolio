import { useEffect, useState } from "react";
import TrueFocus from "./TrueFocus";

const skills = [
  "Frontend Developer",
  "React.js Enjoyer",
  "Python Programmer",
  "AI/ML Enthusiast",
];

const combinedSentence = ` Python  SQL  HTML  CSS  JavaScript  Flask  Git  GitHub  Bash  React`;

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-[#1e1e1e] text-white font-[Poppins]">
      <section className="flex h-screen overflow-hidden">
        
        {/* Left Half */}
        <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center px-8 space-y-6">
          <p className="text-lg text-gray-300">Hello, I'm</p>
          <h1 className="text-6xl font-extrabold text-red-500">Sai Harish</h1>
          <h2 className="text-3xl font-semibold text-white h-10 flex items-baseline gap-2">
            {(() => {
                const words = skills[currentSkill].split(" ");
                const isEven = currentSkill % 2 === 0;
                return (
                <>
                    <span className={isEven ? "text-xl text-gray-300" : "text-4xl text-white font-bold"}>
                    {words[0]}
                    </span>
                    <span className={isEven ? "text-4xl text-white font-bold" : "text-xl text-gray-300"}>
                    {words[1]}
                    </span>
                </>
                );
            })()}
          </h2>

          
        </div>

        {/* Right Tech Stack */}
        <div className="w-1/2 h-screen flex items-center justify-center px-4 hidden md:flex">
          <div className="max-w-md text-left whitespace-pre-line text-2xl leading-relaxed text-white font-bold">
            <TrueFocus
              sentence={combinedSentence}
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
