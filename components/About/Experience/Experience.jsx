"use client";

import { Cinzel_Decorative } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap"
})

const Experience  =()=>{
    return(
        <div className="pt-20">
            <div className="max-w-7xl px-10 lg:px-0 w-full mx-auto"> 
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-center`}>My Experience</h2>    
                </div> 
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-3 shadow-lg p-6 shadow-gray-200">
                        <h4 className={`${cinzel_decorative.className} text-lg `}>2021 - 2022</h4>
                        <h2 className={`${cinzel_decorative.className} text-2xl font-semibold`}>Website designer</h2>
                        <h4 className={`${cinzel_decorative.className} text-lg  `}>European It</h4>
                    </div>
                    <div className="space-y-3 shadow-lg p-6 shadow-gray-200">
                        <h4 className={`${cinzel_decorative.className} text-lg `}>2022 - 2024</h4>
                        <h2 className={`${cinzel_decorative.className} text-2xl font-semibold`}>MERN STACK</h2>
                        <h4 className={`${cinzel_decorative.className} text-lg  `}>Programming Hero</h4>
                    </div>
                    <div className="space-y-3 shadow-lg p-6 shadow-gray-200">
                        <h4 className={`${cinzel_decorative.className} text-lg `}>2024 - 2025</h4>
                        <h2 className={`${cinzel_decorative.className} text-2xl font-semibold`}>webflow Designer & Developer</h2>
                        <h4 className={`${cinzel_decorative.className} text-lg  `}>Softvence</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;