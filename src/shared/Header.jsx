import image from '../../public/imagelogo.jpg'

const Header = () => {
  return (
    <div className=" ">
      <div className="container mx-auto ">
        <div className="navbar bg-transparent">
          <div className="w-full navbar-end">
            <div className="w-full flex justify-between">
            <div className="avatar lg:hidden left-3 md:left-0">
              <div className="w-12 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                <img src={image} />
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
                  <li className='text-lg'>
                    <a href='#portfolio'>Portfolio</a>
                  </li>
                  <li className='text-lg'>
                    <a href='#about'>About</a>
                  </li>
                  <li className='text-lg'>
                    <a href='#skills'>Skills</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="navbar-center hidden w-full lg:flex justify-between items-center">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                <img src={image} />
              </div>
            </div>

            <div className="flex items-center">
              <ul className="menu menu-horizontal text-white px-1 mr-8 text-lg font-bold">
                <li>
                  <a href='#portfolio' className='hover:text-purple-500'>Portfolio</a>
                </li>
                <li>
                  <a href='#about' className='hover:text-purple-500'>About</a>
                </li>
                <li>
                  <a href='#skills' className='hover:text-purple-500'>Skills</a>
                </li>
              </ul>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
