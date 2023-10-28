import { Link } from "react-router-dom";
import Header from "../../shared/Header";
import { FaArrowUp } from "react-icons/fa";
import bgImage from "../../../public/bg-3.jpg";
import About from "../../componenets/About/About";
import Skills from "../../componenets/Skills/Skills";
import { useEffect, useState } from "react";

const Home = () => {
  const imageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "100vh",
  };
//  to top button
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div id="home" style={imageStyle}>
      <div className=" bg-[#000000c2] h-full">
        <Header></Header>
        <div className="  h-[90%]">
          <div className="container mx-auto h-full ">
            <div className="flex flex-col justify-center items-center h-full mx-3">
              <p className="text-lg font-bold text-white">
                Hi There, I Am{" "}
              </p>

              <h1 className="text-4xl text-white md:text-7xl font-bold mt-5">Tanvir Ahmed Emon</h1>
              <p className="text-lg text-white mt-5 text-center md:text-left">
                Web developer focused on MERN stack and related technologies
              </p>
              <Link
                target="_blank"
                to={`https://drive.google.com/file/d/1DGiKP4bEe1FAxBY98zu_XaFSmt5CqICX/view?usp=drive_link`}
              >
                <button className="text-md uppercase bg-purple-500 py-2 px-4 rounded-md text-white font-bold mt-7 shadow-lg">
                  Download Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {isButtonVisible && (
        <button className="scroll-button fixed right-4 md:right-8 bottom-8 md:bottom-10  text-white bg-purple-500 py-3 px-3" onClick={scrollToTop}>
          <FaArrowUp className="animate-bounce" />
        </button>
      )}
    <About></About>
    <Skills></Skills>
    </>
  );
};

export default Home;
