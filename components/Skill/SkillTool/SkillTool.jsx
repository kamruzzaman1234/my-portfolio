"use client";

import { Cinzel_Decorative } from "next/font/google";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { RiNpmjsLine } from "react-icons/ri";
import { SiNotepadplusplus } from "react-icons/si";

const cinzel_decorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap"
})

const SkillTool = ()=>{
    return(
        <div className="">
            <div className="max-w-5xl px-10 lg:px-0 w-full mx-auto">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-white`}>My Skill</h2>    
                </div> 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="py-8 px-4 shadow-lg shadow-white">
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-white
                            font-semibold mb-6 text-2xl text-center`}>Frontend Development</h3>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <FaHtml5 className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>HTML</h4>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <FaCss3Alt className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Css</h4>
                            </div>
                             <div className="flex flex-col gap-2 items-center">
                                <SiTailwindcss className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Tailwind Css</h4>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <FaBootstrap className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Bootstrap</h4>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <FaJsSquare className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>javascript</h4>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <FaReact className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>React.js</h4>
                            </div>
                             <div className="flex flex-col gap-2 items-center">
                                <RiNextjsFill className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Next.js</h4>
                            </div>
                             
                        </div>
                    </div>
                    <div className="py-8 px-4 shadow-lg shadow-white">
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-white
                            font-semibold mb-6 text-2xl text-center`}>Backend Development</h3>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <IoLogoNodejs className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Node js</h4>
                            </div>

                            <div className="flex flex-col gap-2 items-center">
                                <IoLogoNodejs className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Express Js</h4>
                            </div>
                            
                             <div className="flex flex-col gap-2 items-center">
                                <SiMongodb className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>MongoDB</h4>
                            </div>
                         
                             <div className="flex flex-col gap-2 items-center">
                                <RiFirebaseFill className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Firebase</h4>
                            </div>
                        </div>
                    </div>

                    <div className="py-8 px-4 shadow-lg shadow-white">
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-white
                            font-semibold mb-6 text-2xl text-center`}>Tools & Ecosystem</h3>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <FaGitSquare className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white  font-semibold`}>Git</h4>
                            </div>

                            <div className="flex flex-col gap-2 items-center">
                                <FaGithub className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Express Js</h4>
                            </div>
                            
                             <div className="flex flex-col gap-2 items-center">
                                <IoLogoFigma className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>Figma</h4>
                            </div>
                         
                             <div className="flex flex-col gap-2 items-center">
                                <VscVscode className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>VS code</h4>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <RiNpmjsLine className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>npm</h4>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <SiNotepadplusplus className="text-white text-3xl"/>
                                <h4 className={`${cinzel_decorative.className} text-white font-semibold`}>npm</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SkillTool;