import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

<div className="page-content">
  <Hero />
  <Projects />
  <Resume/>
  <Contact />
</div>

    </>
  );
}

export default App;
