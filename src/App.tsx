import SectionContextProvider from "./store/section-context";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Now from "./sections/Now";
import Contact from "./sections/Contact";

function App() {
  return (
    <SectionContextProvider>
      <Header />
      <Projects />
      <AboutMe />
      <Now />
      <Contact />
    </SectionContextProvider>
  );
}

export default App;
