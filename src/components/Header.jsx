import React, { useState } from "react";

export default function Header({ setSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (section) => {
    setSection(section); // إرسال القيمة للمكون الأب
  };

  const styleA =
    "mx-1 font-bold text-slate-300 hover:text-white block px-4 py-2 text-left";

  return (
    <div className="flex fixed top-0 w-full z-30 justify-between items-center p-3 bg-slate-800 text-slate-300">
      {/* Logo Section */}
      <h1 className="text-3xl font-bold">Bakr Talib</h1>

      {/* Navigation Menu for larger screens */}
      <div className="hidden md:flex justify-around items-center w-4/6">
        <button className={styleA} onClick={() => handleButtonClick("Hero")}>
          Main
        </button>
        <button className={styleA} onClick={() => handleButtonClick("Cv")}>
          Cv
        </button>
        <button className={styleA} onClick={() => handleButtonClick("Projects")}>
          Projects
        </button>
        <button className={styleA} onClick={() => handleButtonClick("Course")}>
          Course
        </button>
      </div>

      {/* Menu Button for smaller screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-slate-300"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isMenuOpen && (
        <div className="z-10 absolute top-14 right-0 w-full bg-slate-800 bg-opacity-80 shadow-lg md:hidden">
          <button
            className={`${styleA} block px-4 py-2`}
            onClick={() => handleButtonClick("Hero")}
          >
            Main
          </button>
          <button
            className={`${styleA} block px-4 py-2`}
            onClick={() => handleButtonClick("Cv")}
          >
            Cv
          </button>
          <button
            className={`${styleA} block px-4 py-2`}
            onClick={() => handleButtonClick("Projects")}
          >
            Projects
          </button>
          <button
            className={`${styleA} block px-4 py-2`}
            onClick={() => handleButtonClick("Course")}
          >
            Course
          </button>
        </div>
      )}
    </div>
  );
}
