import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FaGithub, FaTv } from "react-icons/fa";
import HeaderProject from "../../shared/HeaderProject";

const ProjectPage = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery("repoData", () =>
    fetch(
      `https://portfolio-server-olive-omega.vercel.app/projects/${id}`
    ).then((res) => res.json())
  );
console.log(data);
  if (isLoading) {
    return (
      <div>
        <div>
          <HeaderProject></HeaderProject>
        </div>
        <p className="py-20 text-center text-3xl text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <HeaderProject></HeaderProject>
      </div>
      <div className="py-20 md:py-32 md:container mx-3 md:mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="w-auto md:w-1/2">
          <img className="w-full" src={data?.data?.image} alt="" />
        </div>
        <div className="text-white md:w-1/2">
          <h4 className="text-4xl md:text-5xl font-semibold mb-4">
            Project Name: {data?.data?.name}
          </h4>
          <p className="text-xl">
            Description: <br />
            {data?.data?.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button>
              <Link
                className="flex items-center bg-slate-100 text-black py-2 px-4"
                target="_black"
                to={`${data?.data?.live_link}`}
              >
                <FaTv className="mr-1" /> Live link
              </Link>
            </button>
            <button>
              <Link
                className="flex items-center bg-slate-100 text-black py-2 px-4"
                target="_black"
                to={`${data?.data?.git_client}`}
              >
                <FaGithub className="mr-1" /> Github Client
              </Link>
            </button>
            {data?.data?.git_server && (
              <button>
                <Link
                  className="flex items-center bg-slate-100 text-black py-2 px-4"
                  target="_black"
                  to={`${data?.data?.git_server}`}
                >
                  <FaGithub className="mr-1" /> Github Server
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
