import React, { useState } from "react";
import MainSection from "./components/MainSection";
import Header from "./components/Header"
import Footer from './components/Footer'
export default function App() {
  const [section, setSection] = useState("Hero"); // الحالة التي تحتوي على القيمة الحالية للقسم

  return (
    <div className="flex flex-col min-h-screen">
      <Header setSection={setSection} /> {/* تمرير setSection إلى Header */}
      <MainSection section={section} /> {/* تمرير section إلى MainSection */}
      <Footer></Footer>

    </div>
  );
}
