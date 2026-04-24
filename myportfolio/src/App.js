import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/NavBar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/banner/banner";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/tabs/tabs";
import Loader from "./Components/loader/loader";
import Contact from "./Components/contact/contact";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
