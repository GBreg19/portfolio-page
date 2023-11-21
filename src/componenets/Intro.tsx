import { Fragment } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbUserCode } from "react-icons/tb";
import { PiTerminalLight } from "react-icons/pi";

const Intro = () => {
  return (
    <Fragment>
      <section className="flex flex-col gap-5 basis-11/12">
        <h1 className="font-spaceMonoBoldIta font-black text-4xl text-white flex items-center gap-3">
          <PiTerminalLight className="animate-fade" /> Hi, I'm Giorgi
        </h1>
        <p className="font-spaceMonoReg">I'm a Front-end developer</p>
        <p className="font-spaceMonoReg leading-7">
          I completed my bachelor's degree at Tbilisi State University, majoring
          in cultural anthropology and furthered my academic journey with a
          master's in Ethnicity and Nationalism Studies at the International
          Relations Faculty. Alongside my studies, I ventured into the exciting
          realm of web development, starting with HTML/CSS, progressing to
          JavaScript, and honing my skills in React.js. With a clear goal in
          mind, I am putting in the effort to become a proficient full-stack
          developer, continually honing my skills and expanding my knowledge.
        </p>
        <div className="flex gap-5">
          <div className="flex items-center">
            <span>
              <CiLocationOn />
            </span>
            <p className="font-spaceMonoReg ml-2">Tbilisi, Georgia</p>
          </div>
          <div className="flex items-center">
            <span>
              <TbUserCode className="text-2xl" />
            </span>
            {/* <p className="font-spaceMonoReg ml-2">Available for work</p> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
