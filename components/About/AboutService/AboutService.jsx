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
        <div className="py-20">
            <div className="max-w-5xl w-full mx-auto">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-center`}>My Quality Services</h2>    
                </div> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                    <div className="border-r-8 border-black rounded-lg
                     shadow-lg p-6 shadow-black flex flex-col gap-6 items-center">
                        <div>
                            <FaCode  className="text-7xl text-black"/>
                        </div>
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-3xl
                            font-semibold text-black mb-4`}>Web design</h3>
                            <ul className="space-y-3" >
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*Project Completed</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*Mobile responsivenes</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*E-commerce functionality</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-r-8 border-black rounded-lg
                     shadow-lg p-6 shadow-black flex flex-col gap-6 items-center">
                        <div>
                            <FaCode  className="text-7xl text-black"/>
                        </div>
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-3xl
                            font-semibold text-black mb-4`}>Web design</h3>
                            <ul className="space-y-3" >
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*Project Completed</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*Mobile responsivenes</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*E-commerce functionality</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-r-8 border-black rounded-lg
                     shadow-lg p-6 shadow-black flex flex-col gap-6 items-center">
                        <div>
                            <FaCode  className="text-7xl text-black"/>
                        </div>
                        <div>
                            <h3 className={`${cinzel_decorative.className} text-3xl
                            font-semibold text-black mb-4`}>Web design</h3>
                            <ul className="space-y-3" >
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*Project Completed</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*Mobile responsivenes</li>
                                <li className={`${cinzel_decorative.className}
                                text-sm text-black font-bold`}>*E-commerce functionality</li>
                            </ul>
                        </div>
                    </div>

                   

                    
                </div>
            </div>
        </div>
    )
}

export default AboutService;