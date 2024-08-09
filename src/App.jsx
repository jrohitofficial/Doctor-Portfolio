import React, { useState, useEffect } from "react";
import About from "./components/about";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import Header from "./components/header";
import LatestEventsShow from "./components/latest-events";
import NavigationBar from "./components/navigation-bar";
import QualificationAwards from "./components/qualification-awards";
import SensitivePerson from "./components/sensitive-person";
import SuccessStory from "./components/success-story";
import Testimonial from "./components/testimonial";
import WorkHistory from "./components/work-history";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <button onClick={toggleTheme} style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: '1000' }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <NavigationBar />
      <Header />
      <About />
      <WorkHistory />
      <Testimonial />
      <QualificationAwards />
      {/* <SensitivePerson /> */}
      <SuccessStory />
      <LatestEventsShow />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
