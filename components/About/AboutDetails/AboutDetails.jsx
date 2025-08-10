"use client";

import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";
// import { FaHome } from "react-icons/fa";
// import { IoManSharp } from "react-icons/io5";
// import { GiSkills } from "react-icons/gi";
// import { LuProjector } from "react-icons/lu";
// import { MdAssuredWorkload } from "react-icons/md";
// import { SlSocialDropbox } from "react-icons/sl";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const cinzel_decorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap"
})

const poppins = Poppins({
    subsets:["latin"],
    weight: ["400", '500', '600', '700', '800'],
    display: 'swap',
})

const AboutDetails = ()=>{
    return(
        <div className="max-w-5xl px-10 lg:px-0 w-full mx-auto">
            <div className="flex flex-col gap-8 lg:gap-10 lg:flex-row justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="">
                        <img src="https://i.ibb.co.com/Tq010BP8/507426976-2084402595416327-7901733212978440883-n.jpg"
                        className="w-full h-full object-cover shadow-lg shadow-slate-500" alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-6">
                        <div className="">
                            <h2 className={`${cinzel_decorative.className} text-2xl
                            uppercase  font-bold mb-8`}>md kamruzzaman (<span className="text-sm">
                                 <TypeAnimation className="text-cyan-600"
                                      sequence={[
                                
                                             'Frontend Developer',
                                              1000, 
                                             'MERN STACK Developer',
                                             1000,
                                             'Youtuber',
                                             1000,
                                            'Content Creator',
                                               1000
                                        ]}
                                         wrapper="span"
                                         speed={50}
                                        style={{ fontSize: '14px', fontWeight:"bold", display: 'inline-block' }}
                                        repeat={Infinity}
                                    /> 
                            </span>) </h2>
                            <p className={`${poppins.className} text-[16px] text-slate-500 font-normal `}>I am Kamruzzaman, a passionate Frontend Developer with a strong foundation
                             in React.js, Next.js, Tailwind CSS, and the MERN stack. I have completed 
                             a Diploma in Computer Science from Dinajpur Polytechnic Institute and am
                              currently pursuing a BSc in CSE at Daffodil International University. 
                              I enjoy building responsive, user-friendly, and visually appealing
                               web applications with clean code and modern design principles. 
                               My goal is to create digital solutions 
                            that are not only functional but also engaging for users.</p>
                        </div>
                        <div>
                             <ul className="flex gap-3 items-center flex-row lg:flex-row ">
                                <li className="p-3 transition-all delay-150 shadow-lg shadow-black duration-300 border-1 border-cyan-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <MdEmail className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-slate-500 hover:text-white"/> </Link> </li>

                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-black duration-300 border-1 border-cyan-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <FaLinkedin className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-slate-500 hover:text-white"/> </Link> </li>

                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-black duration-300 border-1 border-cyan-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <FaGithub className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-slate-500 hover:text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-black duration-300 border-1 border-cyan-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <FaFacebook className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-slate-500 hover:text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-black duration-300 border-1 border-cyan-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <FaYoutube className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-slate-500 hover:text-white"/> </Link> </li>


                                 {/* <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <SlSocialDropbox className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li> */}
     
                        </ul>
                        </div>
                        <div className="mt-4">
                                               <a
                                          href="/update_resume.pdf"
                                          download="Kamruzzaman_CV.pdf"  
                                          className="inline-flex items-center gap-2  px-4 py-4 rounded-md shadow-md
                                                     bg-cyan-600 text-white font-semibold transition-transform
                                                     transform hover:-translate-y-1 active:translate-y-0"
                                          aria-label="Download CV"
                                        >
                                          <FaDownload />
                                          Download CV
                                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDetails;