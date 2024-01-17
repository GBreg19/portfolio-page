import { Fragment } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { PiTerminalLight } from "react-icons/pi";

const Intro = () => {
  return (
    <Fragment>
      <section className="flex flex-col gap-5">
        <h1 className="font-spaceMonoBoldIta font-black text-4xl text-white flex items-center gap-3">
          <PiTerminalLight className="animate-fade" /> Hi, I'm Giorgi
        </h1>
        <p className="font-spaceMonoReg">I'm a Front-end developer</p>
        <p className="font-spaceMonoReg leading-7">
          I started my journey in cultural anthropology at Tbilisi State
          University and later transitioned to Ethnicity and Nationalism
          Studies. Along the way, I discovered my passion for web development.
          From learning HTML/CSS to mastering JavaScript and React.js, I am
          dedicated to becoming a skilled full-stack developer.
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
              <MdLocationOn className="text-xl" />
            </span>
            {/* <p className="font-spaceMonoReg ml-2">Available for work</p> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
