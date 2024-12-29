import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Cv from "./Cv";
import Projects from "./Projects";
import Course from "./Course";

export default function MainSection({ section }) {
  const [previousSection, setPreviousSection] = useState(section);
  const [isTransitioning, setIsTransitioning] = useState(false);
  let content;

  // استخدام switch لتحديد المحتوى
  switch (section) {
    case "Hero":
      content = <Hero></Hero>;
      break;
    case "Cv":
      content = <Cv></Cv>;
      break;
    case "Projects":
      content = <Projects></Projects>;
      break;
    case "Course":
      content = <Course></Course>;
      break;
    default:
      content = <h1>Section Not Found</h1>;
  }

  // عند تغيير الـ section، قم بتفعيل التأثير
  useEffect(() => {
    if (section !== previousSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setPreviousSection(section);
      }, 100); // مدة التأثير (تتوافق مع مدة الـ transition)
    }
  }, [section, previousSection]);

  return (
    <div className="w-full py-20  flex-grow  bg-slate-400  text-slate-800 flex justify-center items-center ">
        
      <div
        className={`transition-transform duration-100 ${
          isTransitioning ? "transform translate-x-full" : "transform translate-x-0"
        }`}
      >
        {content} {/* عرض المحتوى المحفوظ في المتغير content */}
      </div>
    </div>
  );
}
