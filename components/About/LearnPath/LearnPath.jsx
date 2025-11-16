"use client";

import { Cinzel_Decorative } from "next/font/google";
import { FaCity } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { Poppins } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap"
})
const poppins = Poppins ({
    subsets: ["latin"],
    weight:["400", "500", "600", "700", "800"],
    display: "swap",
})

const LearnPath = ()=>{
    return(
        <div className="pt-20 ">
            <div className="max-w-7xl mx-auto w-full px-10 lg:px-0">
                <div className="mb-10"> 
                      <h2 className={`${cinzel_decorative.className} 
                      text-3xl font-semibold text-center`}>Skill Development Journey</h2>    
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
                  <div className="rounded-lg
                                        p-6 bg-cyan-800  transition-all shadow-lg shadow-black
                                           ease-in-out duration-300 delay-150 hover:bg-cyan-800  flex flex-col gap-6 items-center">
                                          <div className="p-5 border-4 border-cyan-500  rounded-full">
                                              < FaCity  className="text-5xl text-white"/>
                                          </div>
                                          <div>
                                              <h3 className={`${cinzel_decorative.className} text-center text-3xl
                                              font-semibold text-white mb-4`}>Euporean It</h3>
                                              <p className={`${poppins.className} text-center text-white font-semibold`}>Started my professional journey by learning core development skills and gaining hands-on
experience as an Intern.</p>
                                          </div>
                 </div>
                   <div className="rounded-lg
                                        p-6 bg-cyan-800  transition-all shadow-lg shadow-black
                                           ease-in-out duration-300 delay-150 hover:bg-cyan-800  flex flex-col gap-6 items-center">
                                          <div className="p-5 border-4 border-red-500  rounded-full">
                                              <FaYoutube   className="text-5xl text-red-500"/>
                                          </div>
                                          <div>
                                              <h3 className={`${cinzel_decorative.className} text-center text-3xl
                                              font-semibold text-white mb-4`}>Youtube</h3>
                                              <p className={`${poppins.className} text-center text-white font-semibold`}>
                                                Enhanced my understanding of development through online resources from Anisul Islam and
Stack Learner.
experience as an Intern.</p>
                                          </div>
                    </div>
                    <div className="rounded-lg
                                        p-6 bg-cyan-800  transition-all shadow-lg shadow-black
                                           ease-in-out duration-300 delay-150 hover:bg-cyan-800  flex flex-col gap-6 items-center">
                                          <div className="p-5 border-4 border-blue-500  rounded-full">
                                              <FaProductHunt   className="text-5xl text-blue-500"/>
                                          </div>
                                          <div>
                                              <h3 className={`${cinzel_decorative.className} text-center text-3xl
                                              font-semibold text-white mb-4`}>Programming Hero</h3>
                                              <p className={`${poppins.className} text-center text-white font-semibold`}>
                                               Strengthened my full MERN stack skills, completing structured modules and real-world
project-based learning.
experience as an Intern.</p>
                                          </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LearnPath;