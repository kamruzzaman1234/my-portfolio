"use client";

import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";

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
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-black`}>Contact us</h2>  
                    <p className={`${poppins.className} text-lg font-medium text-black`}>Any Question or remarks ? just write as a message</p>  
                </div> 
                <div className="py-10 px-6 bg-gray-600 shadow-lg rounded-lg shadow-slate-400">
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
                            w-full py-4 text-white bg-green-500 font-bold text-lg rounded-lg`}/>
                        </div>
                    </form>
                </div>
                <div className="pt-20">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-6 border-2 border-white shadow-lg shadow-gray-100 bg-cyan-400 rounded-full">
                                <MdManageAccounts className="text-5xl text-white"/>
                            </div>
                            <h3 className={`${cinzel_decorative.className} text-2xl font-bold`}>About Clun</h3>
                            <div className="text-center">
                                <h5 className={`${poppins.className}`}>Running Guide</h5>
                                <h5 className={`${poppins.className}`}>worksout</h5>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-6 border-2 border-white shadow-lg shadow-gray-100 bg-cyan-400 rounded-full">
                                <MdManageAccounts className="text-5xl text-white"/>
                            </div>
                            <h3 className={`${cinzel_decorative.className} text-2xl font-bold`}>Phone</h3>
                            <div className="text-center">
                                <h5 className={`${poppins.className}`}>Running Guide</h5>
                                <h5 className={`${poppins.className}`}>worksout</h5>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-6 border-2 border-white shadow-lg shadow-gray-100 bg-cyan-400 rounded-full">
                                <MdManageAccounts className="text-5xl text-white"/>
                            </div>
                            <h3 className={`${cinzel_decorative.className} text-2xl font-bold`}>About Clun</h3>
                            <div className="text-center">
                                <h5 className={`${poppins.className}`}>Running Guide</h5>
                                <h5 className={`${poppins.className}`}>worksout</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default ContactArea;