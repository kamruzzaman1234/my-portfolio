"use client";

import { Cinzel_Decorative } from "next/font/google";
const cinzel_decorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap"
})


const Tools  =()=>{
    return(
        <div className="max-w-full w-full mx-auto">
            <div>              
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-white`}>Tools & Ecosystem</h2>    
                </div>
                <div className="shadow-lg shadow-white">
                    
                </div>
            </div>
        </div>
    )
}

export default Tools;