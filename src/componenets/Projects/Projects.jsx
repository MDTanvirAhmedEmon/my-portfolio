import { useQuery } from "react-query";
import ProjectCart from "./ProjectCart";
const Projects = () => {
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("https://portfolio-server-olive-omega.vercel.app/projects").then(
      (res) => res.json()
    )
  );
console.log(data);

  if (isLoading || !data || !data.data || !Array.isArray(data.data)) {
    return <p className="text-4xl text-center mt-11 text-white">Loading...</p>;
  }

  return (
    <div id="portfolio" className="pt-6 md:pt-0 mb-20 md:mb-32">
      <div className="w-auto xl:w-[1200px] mx-3 xl:mx-auto">
        <h1 className="text-4xl text-white font-bold mb-2 ">Portfolio</h1>
        <div className="mt-2 border-b-4 border-purple-500 w-28 mb-5 md:mb-10 mx-auto float-left"></div>
        <div className="w-full grid gird-cols-1 justify-center md:grid-cols-3 md:gap-10">
          {data?.data?.map((project) => (
            <ProjectCart key={project?._id} project={project}></ProjectCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
