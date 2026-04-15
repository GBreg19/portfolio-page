import SectionContextProvider from "@/store/section-context";
import Header from "@/sections/Header";
import MyWork from "@/sections/my-work";
import AboutMe from "@/sections/about-me";
import Now from "@/sections/now";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";

const Home = () => {
  return (
    <SectionContextProvider>
      <Header />
      <MyWork />
      <AboutMe />
      <Experience />
      <Now />
      <Contact />
    </SectionContextProvider>
  );
};

export default Home;
