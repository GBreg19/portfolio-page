import React, { useRef } from "react";

export const SectionContext = React.createContext({
  navRefs: {
    projects: null as React.RefObject<HTMLElement> | null,
    aboutMe: null as React.RefObject<HTMLElement> | null,
    experience: null as React.RefObject<HTMLElement> | null,
    now: null as React.RefObject<HTMLElement> | null,
    contact: null as React.RefObject<HTMLElement> | null,
  },
  handleClick: (_ref: React.RefObject<HTMLElement> | null) => {},
});

type Props = {
  children?: React.ReactNode;
};

const SectionContextProvider = (props: Props) => {
  const projectsRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const nowRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const clickHandler = (ref: React.RefObject<HTMLElement> | null) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contextValue = {
    navRefs: {
      projects: projectsRef,
      aboutMe: aboutMeRef,
      experience: experienceRef,
      now: nowRef,
      contact: contactRef,
    },
    handleClick: clickHandler,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {props.children}
    </SectionContext.Provider>
  );
};

export default SectionContextProvider;
