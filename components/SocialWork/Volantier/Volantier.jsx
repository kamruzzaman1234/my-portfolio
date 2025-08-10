"use client";

import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})


const Volantier = ()=>{
    return(
        <div className="">
            <div className="max-w-6xl w-full mx-auto px-10 lg:px-0">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-black`}>Volunteer work</h2>    
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="px-4 py-6 shadow-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>

                    <div className="px-4 py-6 shadow-lg  rounded-tl-lg ">
                        <img src="https://i.ibb.co.com/KS35Z50/img2.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>

                    <div className="px-4 py-6 shadow-lg rounded-tl-lg ">
                        <img src="https://i.ibb.co.com/wN51V07M/img5.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>

                    <div className="px-4 py-6 shadow-lg  rounded-tl-lg ">
                        <img src="https://i.ibb.co.com/rfF46Kqt/img6.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg  rounded-tl-lg ">
                        <img src="https://i.ibb.co.com/FkVXRVfW/img1.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className="px-4 py-6 shadow-lg  rounded-tl-lg ">
                        <img src="https://i.ibb.co.com/KS35Z50/img2.jpg"
                        className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Volantier;