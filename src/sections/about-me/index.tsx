import { useContext, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Card from "@/componenets/layout/card";
import { SectionContext } from "@/store/section-context";

type EducationItemProps = {
  title: string;
  subtitle?: string;
  period: string;
  children: ReactNode;
};

const EducationItem = ({ title, subtitle, period, children }: EducationItemProps) => (
  <div className="flex flex-col gap-3 mb-8 last:mb-0">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
      <div>
        <h2 className="font-spaceMonoBold text-white">{title}</h2>
        {subtitle ? (
          <p className="font-spaceMonoReg text-gray-300 text-sm mt-1">{subtitle}</p>
        ) : null}
      </div>
      <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white shrink-0 w-fit">
        {period}
      </p>
    </div>
    <p className="font-spaceMonoReg leading-7 text-gray-200">{children}</p>
  </div>
);

const AboutMe = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card>
      <section
        className="mb-10 flex flex-col gap-5"
        ref={SectionCtx.navRefs.aboutMe}
      >
        <h1 className="font-spaceMonoBoldIta text-3xl text-white">About me</h1>
        <p className="font-spaceMonoReg text-lg leading-7">
          I enjoy building intuitive frontend experiences and exploring programming
          more broadly, including AI, backend, and other areas as I grow. This site
          doubles as a personal space where I sometimes share thoughts on topics I
          care about, not only code — more formal articles will live on the{" "}
          <Link
            to="/blog"
            className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline"
          >
            Blog
          </Link>
          .
        </p>
        <p className="font-spaceMonoReg text-lg leading-7">
          Day to day I work with modern frontend tooling, TypeScript, React, and
          APIs. I care about interfaces that are clear, usable, and maintainable.
        </p>
      </section>

      <section>
        <h2 className="font-spaceMonoBold text-xl text-white mb-6">Education</h2>

        <EducationItem
          title="Tbilisi State University"
          subtitle="Bachelor's degree, Cultural Anthropology"
          period="2016 – 2020"
        >
          Studied cultural anthropology: fieldwork, ethnography, and how people
          make meaning in social worlds. That training still informs how I think
          about products, users, and the contexts software lives in.
        </EducationItem>

        <EducationItem
          title='College — Information Technologies Academy'
          period="05.2021 – 07.2021"
        >
          Intensive program covering HTML, CSS, and JavaScript: structure and
          semantics, layout and responsive design, and core JS from fundamentals
          through DOM interaction and practical scripting for the web.
        </EducationItem>

        <EducationItem
          title="JavaScript course"
          subtitle="Academy of Digital Industries"
          period="06.2022 – 08.2022"
        >
          Hands-on course deepening JavaScript with real-world exercises and an
          emphasis on clear, maintainable code.
        </EducationItem>

        <EducationItem
          title="React.js course"
          subtitle="Academy of Digital Industries"
          period="11.2022 – 01.2023"
        >
          Core React concepts with project-style work: components, hooks, and
          patterns used in production-style UIs.
        </EducationItem>
      </section>
    </Card>
  );
};

export default AboutMe;
