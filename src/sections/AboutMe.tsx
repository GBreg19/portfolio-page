import { useContext } from "react";
import Card from "../layout/Card";
import { SectionContext } from "../store/section-context";

const AboutMe = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card>
      <section
        className="mb-10 flex flex-col gap-5 justify-between"
        ref={SectionCtx.navRefs.aboutMe}
      >
        <h1 className="font-spaceMonoBoldIta text-3xl text-white">About me</h1>
        <p className="font-spaceMonoMedIta tracking-wider">Hey there!</p>
        <p className="font-spaceMonoReg text-lg leading-7">
          I'm Giorgi, a front-end developer and freelancer. Over the past 3
          years, I've immersed myself in the world of front-end web development
          and discovered a genuine love for what I do. Embracing challenges and
          finding solutions is a thrilling learning process that pushes me to
          continuously improve and excel in my field.
        </p>
        <p className="font-spaceMonoReg text-lg leading-7">
          My skill set includes HTML/CSS, along with CSS frameworks like
          Tailwind CSS, Material UI, and Bootstrap, as well as JavaScript,
          TypeScript, React JS, Redux/Redux Toolkit, Git, and RESTful Services
          and APIs.
        </p>
        <p className="font-spaceMonoReg text-lg leading-7">
          Looking ahead, I'm excited to expand my knowledge into back-end
          development, as I aspire to become a proficient full stack developer,
          capable of crafting comprehensive and dynamic web applications.
        </p>
      </section>
      <section>
        <h1 className="font-spaceMonoBold text-xl text-white mb-6">
          Education
        </h1>
        <span className="flex flex-col justify-between gap-3 mb-5">
          <span className="flex items-center gap-5">
            <h2 className="font-spaceMonoBold text-white">
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </h2>
            <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white">
              06.2022 - 01.2023
            </p>
          </span>
          <p className="font-spaceMonoReg">
            Course by Maximilian Schwarzmuller. Learned basic concepts of
            functional and class based ReactJS and its lifecycles, hooks, state
            management.
          </p>
        </span>
        <span className="flex flex-col justify-between gap-3 mb-5">
          <span className="flex items-center gap-5">
            <h2 className="font-spaceMonoBold text-white">
              ReactJS Workshop - Academy of Digital Industries
            </h2>
            <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white">
              11.2022 - 01.2023
            </p>
          </span>
          <p className="font-spaceMonoReg">
            During the workshop we went through core concepts of React with
            real-world project examples and using best practices of coding.
          </p>
        </span>
        <span className="flex flex-col justify-between gap-3 mb-5">
          <span className="flex items-center gap-5">
            <h2 className="font-spaceMonoBold text-white">
              JavaScript Workshop - Academy of Digital Industries
            </h2>
            <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white">
              06.2022 - 08.2022
            </p>
          </span>
          <p className="font-spaceMonoReg">
            Attended a highly interactive and hands-on workshop that deepened my
            understanding of JavaScript. Focused on real-world applications and
            best practices for writing clean, efficient and maintanable code.
          </p>
        </span>
        <span className="flex flex-col justify-between gap-3 mb-5">
          <span className="flex items-center gap-5">
            <h2 className="font-spaceMonoBold text-white">
              The Complete JavaScript Course 2022: From Zero to Expert
            </h2>
            <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white">
              01.2022 - 06.2022
            </p>
          </span>
          <p className="font-spaceMonoReg">
            Completed a comprehensive course in JavaScript, covering basics of
            programming, including data types, variables, loops, functions,
            objects and arrays. Also learned about JavaScript's advanced
            features such as event handling, DOM manipulation, and asynchronous
            programming using promises and async/await. Additionally, gained
            knowledge for pre-requisites React JavaScript.
          </p>
        </span>
        <span className="flex flex-col justify-between gap-3 mb-5">
          <span className="flex items-center gap-5">
            <h2 className="font-spaceMonoBold text-white">
              College "Information Technologies Academy"{" "}
            </h2>
            <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white">
              05.2021 - 07.2021
            </p>
          </span>
          <p className="font-spaceMonoReg">
            Completed a comprehensive course in HTML and CSS, which included
            building and styling websites from scratch. Learned about HTML
            syntax, semantic tags, and creating well-structured content. Also
            gained experience in styling with CSS, including layout techniques,
            responsive design, and utilizing CSS preprocessors like SASS.
          </p>
        </span>
      </section>
    </Card>
  );
};

export default AboutMe;
