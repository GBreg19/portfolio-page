import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string
};

const Card = (props: Props) => {
  return <div className={`m-auto 2xl:w-2/5 xl:w-1/2 lg:w-2/3 w-11/12 py-8 border-b-2 rounded-md border-gray-600 ${props.className ? props.className : ''}`}>{props.children}</div>;
};

export default Card;
