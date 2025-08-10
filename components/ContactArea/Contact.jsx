"use client";

import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const poppins = Poppins({
    subsets: ["latin"],
    weight:["300", "500", "600", "700"],
    display:"swap",
})

const ContactArea = ()=>{
    return(
        <div className="">
            <div className="max-w-5xl w-full mx-auto">
                <div className="mb-10 flex flex-col gap-2 items-center">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-white`}>Contact us</h2>  
                    <p className={`${poppins.className} text-lg font-medium text-white`}>Any Question or remarks ? just write as a message</p>  
                </div> 
                <div className="py-10 px-6 bg-black shadow-lg rounded-lg shadow-slate-400">
                    <form action="" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="name" className={`${cinzel_decorative.className} text-2xl
                             font-semibold text-white`}>Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="name" className={`${cinzel_decorative.className} text-2xl
                             font-semibold text-white`}>Email</label>
                            <input type="email" name="email" placeholder="Enter Your email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"/>
                        </div>
                        <div className="flex flex-col gap-4 col-span-2">
                            <label htmlFor="name" className={`${cinzel_decorative.className} text-2xl
                             font-semibold text-white`}>Comments</label>
                            <input type="text" name="message" placeholder="Enter Your comments" 
                            className="w-full px-4 py-10 border border-gray-300 rounded-lg text-white
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"/>
                        </div>
                         <div className=" col-span-2">
                            <input type="submit" name="name" placeholder="Enter Your Name" 
                            className={`${cinzel_decorative.className} 
                            w-full py-4 text-white bg-cyan-500 font-bold text-lg rounded-lg`}/>
                        </div>
                    </form>
                </div>
                <div className="pt-20">
                    <div className="flex justify-between flex-col lg:flex-row items-center">
                        <div className="flex flex-col items-center">
                            <div className="p-6 border-2 border-white shadow-lg shadow-gray-100 bg-cyan-400 rounded-full">
                                <MdManageAccounts className="text-5xl text-white"/>
                            </div>
                            <div className="mt-8">
                                <h3 className={`${cinzel_decorative.className} text-2xl text-white font-bold`}>About Clun</h3>
                            </div>
                            <div className="text-center mt-3">
                                <h5 className={`${poppins.className} text-white`}>Running Guide</h5>
                                <h5 className={`${poppins.className} text-white`}>worksout</h5>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-6 border-2 border-white shadow-lg shadow-gray-100 bg-cyan-400 rounded-full">
                                <MdContactPhone className="text-5xl text-white"/>
                            </div>
                            <div className="mt-8">
                                <h3 className={`${cinzel_decorative.className} text-2xl text-white font-bold`}>Contact</h3>
                            </div>
                            <div className="text-center mt-3">
                               <ul>
                                <li className="text-white">01935024654</li>
                                <li className="text-white">01720503145</li>
                                <li className="text-white">kamruzzamancse22@gmail.com</li>
                               </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-6 border-2 border-white shadow-lg text-white shadow-gray-100 bg-cyan-400 rounded-full">
                                <FaLocationPinLock className="text-5xl text-white"/>
                            </div>
                            <div className="mt-8">
                                <h3 className={`${cinzel_decorative.className} text-2xl font-bold text-white`}>My Location</h3>
                            </div>
                            <div className="text-center mt-3">
                                <h5 className={`${poppins.className} text-white`}>Rangpur, Pirgonj</h5>
                                <h5 className={`${poppins.className} text-white`}>Dhaka</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default ContactArea;