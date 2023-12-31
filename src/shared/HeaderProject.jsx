import { Link } from "react-router-dom";
import image from "../../public/imagelogo.jpg";

const HeaderProject = () => {
  return (
    <div className=" ">
      <div className="container mx-auto ">
        <div className="navbar bg-transparent">
          <div className="w-full navbar-end">
            <div className="w-full flex justify-between">
              <div className="avatar lg:hidden left-3 md:left-0">
                <div className="w-12 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2 cursor-pointer">
                  <Link to={`/`}>
                    <img src={image} />
                  </Link>
                </div>
              </div>
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn btn-ghost lg:hidden relative text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box absolute top-14 right-0 w-52 "
                >
                  <li className="text-lg">
                    <Link to="/#portfolio">Portfolio</Link>
                  </li>
                  <li className="text-lg">
                    <Link to="/#about">About</Link>
                  </li>
                  <li className="text-lg">
                    <Link to="/#skills">Skills</Link>
                  </li>
                  <li className="text-lg">
                    <Link to="/#contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="navbar-center hidden w-full lg:flex justify-between items-center">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2 cursor-pointer">
                <Link to={`/`}>
                  <img src={image} />
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <ul className="menu menu-horizontal text-white px-1 mr-8 text-lg font-bold">
                <li>
                  <Link to="/#portfolio" className="hover:text-purple-500">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="hover:text-purple-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#skills" className="hover:text-purple-500">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="hover:text-purple-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProject;
