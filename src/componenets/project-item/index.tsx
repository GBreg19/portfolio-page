import { FaAngleRight, FaGithub } from "react-icons/fa";

type Props = {
  itemData: {
    title: string;
    description: string;
    date: number;
    address?: string;
    addressLabel?: string;
    repository?: string;
    note?: string;
  };
};

const ProjectItem = (props: Props) => {
  const { itemData } = props;

  return (
    <li className="hover:bg-slate-900 p-2 rounded-md flex flex-col gap-3">
      <span className="flex items-center gap-3">
        <h1 className="font-spaceMonoBold text-white text-xl">
          {itemData.title}
        </h1>
        <span className="font-vtReg bg-slate-700 px-2 rounded-md text-sm  tracking-wide text-white">
          {itemData.date}
        </span>
      </span>
      <p className="font-spaceMonoReg">{itemData.description}</p>
      {itemData.repository ? (
        <a
          href={itemData.repository}
          target="_blank"
          className="flex items-center gap-2 group"
        >
          <FaGithub className="text-gray-300 group-hover:text-white" />
          <span className="font-spaceMonoReg group-hover:text-gray-300">
            - Code
          </span>
        </a>
      ) : null}
      {itemData.address ? (
        <a
          href={itemData.address}
          target="_blank"
          className="flex items-center text-blue-400 hover:text-blue-300 font-spaceMonoReg"
        >
          {itemData.addressLabel || "Live demo"}
          <span>
            <FaAngleRight className="text-sm ml-2" />
          </span>
        </a>
      ) : null}
      {itemData.note ? (
        <p className="font-spaceMonoReg text-sm text-gray-400">{itemData.note}</p>
      ) : null}
    </li>
  );
};

export default ProjectItem;
