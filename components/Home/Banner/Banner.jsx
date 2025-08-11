"use client";
import { Cinzel_Decorative } from "next/font/google";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { LuProjector } from "react-icons/lu";
import { MdAssuredWorkload } from "react-icons/md";
import { SlSocialDropbox } from "react-icons/sl";
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
  display: "swap",
})

const Banner = ()=>{
    return(
        <div className="py-32 bg-black">
            <div className="max-w-6xl px-4 lg:px-0 w-full mx-auto">
                <div>
                    <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
                        <div className="max-w-1xl mb-6 w-full mx-auto">
                           <ul className="flex gap-3 items-center flex-row lg:flex-col justify-center">
                                <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="/" className=" bg-slate-950">
                                 <FaHome className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>

                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="/about" className=" bg-slate-950">
                                 <IoManSharp className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>

                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="/skill" className=" bg-slate-950">
                                 <GiSkills className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="/project" className=" bg-slate-950">
                                 <LuProjector className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="/social" className=" bg-slate-950">
                                 <MdAssuredWorkload className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="/contact" className=" bg-slate-950">
                                 <SlSocialDropbox className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>
     
                        </ul>
                        </div>
                        <div className="max-w-4xl w-full mx-auto">
                            <div className="flex flex-col gap-8">
                                <div className="h-[350px]">
                                    <img src="https://i.ibb.co.com/3YmRVMzY/490531733-2037442036779050-2816608607527327536-n.jpg" 
                                     className="w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl" alt="" />
                                </div>
                                <div className="flex items-center gap-2 flex-col">
                                    <h2 className={`${cinzel_decorative.className} text-white text-2xl
                                     font-bold`}>MD Kamruzzamn</h2>
                                     <h4 className={`${cinzel_decorative.className} text-white text-2xl font-semibold`}>I'm <span>
                                         <TypeAnimation
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
                                        style={{ fontSize: '20px', color:'yellow', display: 'inline-block' }}
                                        repeat={Infinity}
                                    />    
                                    </span> </h4>

                                    <a
      href="/update_resume.pdf"
      download="Kamruzzaman_CV.pdf"  
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-md
                 bg-yellow-600 text-white font-semibold transition-transform
                 transform hover:-translate-y-1 active:translate-y-0"
      aria-label="Download CV"
    >
      <FaDownload />
      Download CV
    </a>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-1xl w-full mx-auto bg-black">
                            <ul className="flex gap-3 items-center flex-row lg:flex-col justify-center">
                                <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className=" bg-slate-950">
                                 <MdEmail className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>

                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="https://www.linkedin.com/in/md-kamruzzaman-298786249/" className=" bg-slate-950">
                                 <FaLinkedin className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>

                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="https://github.com/kamruzzaman1234" className=" bg-slate-950">
                                 <FaGithub className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="https://www.facebook.com/md.kamruzzaman.313086" className=" bg-slate-950">
                                 <FaFacebook className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>


                                 <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="https://www.youtube.com/" className=" bg-slate-950">
                                 <FaYoutube className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li>


                                 {/* <li className="p-3 transition-all delay-150 shadow-lg shadow-white duration-300 border-1 border-yellow-500 ease-in-out rounded-full hover:bg-slate-800"> 
                                <Link href="" className=" bg-slate-950">
                                 <SlSocialDropbox className="text-2xl
                                transition-all delay-150 duration-300 ease-in-out hover:text-4xl
                                 text-white"/> </Link> </li> */}
     
                        </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Banner;