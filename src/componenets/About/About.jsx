import image from "../../../public/imagelogo.jpg";

const About = () => {
  return (
    <div id="about" className="md:h-[600px] py-20 md:py-0">
      <div className="w-auto xl:w-[1200px] h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 h-full mx-3 xl:mx-0">
          <div>
            <h1 className="text-4xl text-white font-bold mb-2 ">About Me</h1>
            <div className="mt-2 border-b-4 border-purple-500 w-20 mx-auto float-left mb-5"></div>
            <p className="text-lg text-white clear-both">
              Hi! My name is Tanvir Ahmed Emon a passionate and lifelong learner
              web developer with strength in MERN stack and related technology
              such as Redux-Toolkit, Next Js, Typescript, and Mongoose. I am eager to
              contribute my skills to dynamic web projects and learn from
              industry experts. I want to improve my web development skills and
              stay updated with industry trends. My long-term goal is to become
              a proficient full-stack web developer.
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
