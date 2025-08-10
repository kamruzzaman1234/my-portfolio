"use client";
import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})
const HelpPeople = ()=>{
    return(
        <div className="pt-32 ">
            <div className="max-w-6xl w-full mx-auto">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-black`}>Social work</h2>    
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpPeople;