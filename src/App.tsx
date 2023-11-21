import SectionContextProvider from "./store/section-context";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Now from "./sections/Now";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

function App() {
  return (
    <SectionContextProvider>
      <Header />
      <Projects />
      <AboutMe />
      <Experience />
      <Now />
      <Contact />
    </SectionContextProvider>
  );
}

export default App;
