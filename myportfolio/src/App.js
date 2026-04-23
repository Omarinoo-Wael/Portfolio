import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/NavBar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/banner/banner";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/tabs/tabs";
import Loader from "./Components/loader/loader";
function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
