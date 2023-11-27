import { useParams } from "react-router-dom";
import Header from "../../shared/Header";
import { useQuery } from "react-query";

const ProjectPage = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery("repoData", () =>
    fetch(
      `https://portfolio-server-olive-omega.vercel.app/projects/${id}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div>
        <p className="mt-10 text-center font-2xl">Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="py-32 container mx-auto flex gap-8 items-center justify-center">
        <div className="w-[600px]">
          <img className="w-full" src={data?.data[0].image} alt="" />
        </div>
        <div className="text-white">
          <h4 className="text-3xl font-semibold mb-4">Project Title: {data?.data[0].name}</h4>
          <p>Description: {data?.data[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
