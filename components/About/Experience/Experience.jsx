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
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-center`}>My Job Experience</h2>    
                </div> 
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-3 shadow-lg p-6 border-b-4 border-cyan-500">
                        <h4 className={`${cinzel_decorative.className} text-lg font-semibold text-yellow-500`}>2024 <span>(Decmber)</span>
                         - 2025 <span>(March)</span></h4>
                        <h2 className={`${cinzel_decorative.className} text-2xl text-cyan-800 font-semibold`}>Frontend Developer</h2>
                        <h4 className={`${cinzel_decorative.className} text-lg  font-bold`}>Softvence Agency</h4>
                    </div>

                <div className="space-y-3 shadow-lg p-6 border-b-4 border-cyan-500">
                        <h4 className={`${cinzel_decorative.className} text-lg font-semibold text-yellow-500`}>2025 <span>(Octobor)</span>
                         - Present<span></span></h4>
                        <h2 className={`${cinzel_decorative.className} text-2xl text-cyan-800 font-semibold`}>Technical Support Engineer</h2>
                        <h4 className={`${cinzel_decorative.className} text-lg  font-bold`}>XeonBD</h4>
                    </div>
                    
                    
                 
                </div>
            </div>
        </div>
    )
}

export default Experience;