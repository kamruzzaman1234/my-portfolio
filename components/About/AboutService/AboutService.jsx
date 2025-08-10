"use client";

import { Cinzel_Decorative, Poppins } from "next/font/google";
import { FaCode } from "react-icons/fa";

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

const AboutService = ()=>{
    return(
        <div className="pt-20">
            <div className="max-w-7xl px-10 lg:px-0 w-full mx-auto">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-center`}>My Quality Services</h2>    
                </div> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                    <div className="rounded-lg
                      p-6 bg-black  transition-all shadow-lg shadow-black
                         ease-in-out duration-300 delay-150 hover:bg-cyan-800  flex flex-col gap-6 items-center">
                        <div className="p-5 border-4 border-cyan-500  rounded-full">
                            <FaCode  className="text-5xl text-white"/>
                        </div>
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-3xl
                            font-semibold text-white mb-4`}>MERN stack</h3>
                            <ul className="space-y-3" >
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*Project Completed</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*Mobile responsivenes</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*E-commerce functionality</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg
                      p-6 bg-black  transition-all shadow-lg shadow-black
                         ease-in-out duration-300 delay-150 hover:bg-cyan-800  flex flex-col gap-6 items-center">
                        <div className="p-5 border-4 border-cyan-500  rounded-full">
                            <FaCode  className="text-5xl text-white"/>
                        </div>
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-3xl
                            font-semibold text-white mb-4`}>MERN stack</h3>
                            <ul className="space-y-3" >
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*Project Completed</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*Mobile responsivenes</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*E-commerce functionality</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-lg
                      p-6 bg-black  transition-all shadow-lg shadow-black
                         ease-in-out duration-300 delay-150 hover:bg-cyan-800  flex flex-col gap-6 items-center">
                        <div className="p-5 border-4 border-cyan-500  rounded-full">
                            <FaCode  className="text-5xl text-white"/>
                        </div>
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-3xl
                            font-semibold text-white mb-4`}>MERN stack</h3>
                            <ul className="space-y-3" >
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*Project Completed</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*Mobile responsivenes</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-white font-bold`}>*E-commerce functionality</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutService;