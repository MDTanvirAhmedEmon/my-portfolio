import html from "../../../public/skills/html.png"
import css from "../../../public/skills/css.png"
import js from "../../../public/skills/js.png"
import ts from "../../../public/skills/ts.png"
import react from "../../../public/skills/react.png"
import redux from "../../../public/skills/redux.png"
import next from "../../../public/skills/nextjs.png"
import node from "../../../public/skills/nodejs.png"
import express from "../../../public/skills/express.png"
import mongodb from "../../../public/skills/mongodb.png"
import mongoose from "../../../public/skills/mongoose.png"
import postgresql from "../../../public/skills/postgresqul.png"
import prisma from "../../../public/skills/prisma.webp"



const Skills = () => {
    return (
        <div id="skills" className=" md:h-[700px] py-20">
            <div className="w-auto xl:w-[1200px] h-full mx-auto">
                <div className="flex items-center justify-between text-white w-full">
                    <div className="w-full mx-3 xl:mx-0">
                        <h1 className="text-4xl text-white font-bold mb-2">Skills</h1>
                        <div className="mt-2 border-b-4 border-purple-500 w-14 mx-auto float-left mb-14"></div>
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-16 justify-center items-center clear-left ">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                            <img src={ts} alt="" />
                            <img src={react} alt="" />
                            <img src={redux} alt="" />
                            <img src={next} alt="" />
                            <img src={node} alt="" />
                            <img src={express} alt="" />
                            <img src={mongodb} alt="" />
                            <img src={mongoose} alt="" />
                            <img src={postgresql} alt="" />
                            <img src={prisma} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;