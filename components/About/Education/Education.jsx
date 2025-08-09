"use client";

import { Cinzel_Decorative } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap"
})


const Education = ()=>{
    return(
        <div className="pt-20">
            <div className="max-w-5xl w-full mx-auto">
                 <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-center`}>My Education</h2>    
                </div> 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3 px-6 py-6 shadow-lg shadow-black">
                        <div className="flex justify-between items-center">
                            <h3 className={`${cinzel_decorative.className}
                            text-lg text-black font-bold`}>Bachelor of Science in CSE</h3>
                            <h3 className={`${cinzel_decorative.className} text-sm
                             font-semibold`}>(2022 - 2025)</h3>
                        </div>
                        <div>
                            <h2 className={`${cinzel_decorative.className} text-2xl font-semibold`}>Daffodil Internationl University</h2>
                        </div>
                    </div>
                     <div className="flex flex-col gap-3 px-6 py-6 shadow-lg shadow-black">
                        <div className="flex justify-between items-center">
                            <h3 className={`${cinzel_decorative.className}
                            text-lg text-black font-bold`}>Diploma Engineering</h3>
                            <h3 className={`${cinzel_decorative.className} text-sm
                             font-semibold`}>(2016 - 2020)</h3>
                        </div>
                        <div>
                            <h2 className={`${cinzel_decorative.className} text-2xl font-semibold`}>Dinajpur Polytechnic Institute</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;