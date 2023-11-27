/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProjectCart = ({ project }) => {
  return (
    <div className="text-center py-10  shadow-xl">
      <img className="" src={project?.image} alt="" />
      <div>
        <p className="text-white text-3xl mt-4 font-bold">{project.name}</p>
        <Link to={`/project/${project._id}`}>
          <button className="text-md uppercase bg-purple-500 py-2 px-4 rounded-md text-white font-bold mt-7 shadow-lg">
            Project Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCart;
