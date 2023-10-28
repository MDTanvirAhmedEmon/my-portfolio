import image from "../../../public/imagelogo.jpg";

const About = () => {
  return (
    <div id="about" className="md:h-[700px] py-20 md:py-0">
      <div className="w-auto xl:w-[1200px] h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 h-full mx-3 xl:mx-0">
          <div>
            <h1 className="text-4xl text-white font-bold mb-2 ">About Me</h1>
            <div className="mt-2 border-b-4 border-purple-500 w-20 mx-auto float-left mb-5"></div>
            <p className="text-lg text-white clear-both">
              Hi! My name is Tanvir Ahmed Emon. I am Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus pariatur iure aut autem,
              quod sapiente nihil, est quo velit odio id ad ut ipsa sit error
              neque necessitatibus consectetur ratione!consectetur adipisicing elit. Repellendus pariatur iure aut autem,quod sapiente nihil, est quo velit odio id ad ut ipsa sit errorneque necessitatib consectetur ratione!
            </p>
          </div>
          <div>
            <img className="w-auto shadow-md" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
