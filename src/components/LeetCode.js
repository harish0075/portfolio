import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const LEETCODE_TOTALS = {
  easy: 771,
  medium: 1636,
  hard: 664,
};

export default function LeetCode() {
  const [stats, setStats] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const username = "Harish_1205";

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.status || data.status === "success") setStats(data);
      })
      .catch((err) => console.error("LeetCode fetch error:", err));

    setTimeout(() => setFadeIn(true), 300);
  }, []);

  const solved = stats?.totalSolved ?? 0;
  const total =
    LEETCODE_TOTALS.easy + LEETCODE_TOTALS.medium + LEETCODE_TOTALS.hard;
  const progress = Math.min(100, Math.round((solved / total) * 100));

  return (
    <section className="bg-black px-6 py-10 font-[Poppins] min-h-[35vh] flex flex-col md:flex-row justify-between items-start gap-10">
      
      {/* LEFT: LeetCode Stats Card */}
      <div className="relative group w-full md:w-[50%] p-6 rounded-xl border border-slate-300 overflow-hidden bg-white hover:bg-red-600 transition duration-300">
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />

        <div className="relative z-10 flex items-center gap-6">
          {/* Circle */}
          <div
            className="relative w-20 h-20 rounded-full"
            style={{
              background: `conic-gradient(#22c55e ${progress * 3.6}deg, #e5e7eb ${progress * 3.6}deg)`,
            }}
          >
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-xl font-bold text-red-600 group-hover:text-red transition">
              {solved}
            </div>
          </div>

          {/* Info */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-lg font-semibold mb-1 text-slate-900 group-hover:text-white">
              {username}
            </h3>
            <p className="text-sm text-gray-500 mb-4 group-hover:text-white">
              Ranking: #{stats?.ranking ?? "—"}
            </p>

            {/* Bars */}
            <div className="space-y-2 text-sm">
              <StatBar
                label="Easy"
                value={stats?.easySolved}
                total={LEETCODE_TOTALS.easy}
                color="bg-green-400"
              />
              <StatBar
                label="Medium"
                value={stats?.mediumSolved}
                total={LEETCODE_TOTALS.medium}
                color="bg-yellow-400"
              />
              <StatBar
                label="Hard"
                value={stats?.hardSolved}
                total={LEETCODE_TOTALS.hard}
                color="bg-red-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Profile Buttons */}
      <div className="w-full md:w-[40%] flex flex-col gap-4 items-start justify-center text-white">
        <a
          href="https://github.com/harish0075"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-md hover:bg-gray-700 transition"
        >
          <FaGithub size={20} />
          <span className="text-base">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sai-harish-s-5163a52a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-700 px-5 py-3 rounded-md hover:bg-blue-600 transition"
        >
          <FaLinkedin size={20} />
          <span className="text-base">LinkedIn</span>
        </a>

        <a
          href="/SaiHarish_Resume.pdf"
          download
          className="flex items-center gap-3 bg-green-700 px-5 py-3 rounded-md hover:bg-green-600 transition"
        >
          <FaDownload size={20} />
          <span className="text-base">Download Resume</span>
        </a>
      </div>
    </section>
  );
}

// Stat bar component
function StatBar({ label, value = 0, total = 1, color }) {
  const percentage = Math.round((value / total) * 100);
  return (
    <div className="flex items-center gap-2 relative z-10">
      <span className="w-20 font-medium text-slate-800 group-hover:text-white">
        {label}
      </span>
      <div className="flex-1 bg-gray-300 rounded h-2 overflow-hidden">
        <div
          className={`${color} h-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-20 text-right font-semibold text-slate-800 group-hover:text-white">
        {value} / {total}
      </span>
    </div>
  );
}
