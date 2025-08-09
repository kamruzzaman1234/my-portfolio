"use client";

import { Cinzel_Decorative } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaRegChartBar } from "react-icons/fa6";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const Navbar = ()=>{
    const [open, setOpen] = useState(false);

    const handleClick = ()=>{
        setOpen(!open)
    }

    return(
        <div className="py-8 lg:py-4 bg-slate-950 fixed top-0 w-full">
                <div className="max-w-6xl px-4 lg:px-0 w-full mx-auto">
                    <div className="max-w-3xl lg:hidden w-full mx-auto relative lg:static">
                        {open ? <>
                            <ul className="flex justify-between flex-col lg:flex-row">
                            <li className=""><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Home</Link></li>
                            <li><Link href="/" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>About</Link></li>
                            <li><Link href="/about" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Skill</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Project</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Social Work</Link></li>
                            
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Social Media</Link></li>  
                        </ul>
                        </> : <></>}
                        

                    </div>
                    <FaRegChartBar className="text-white text-3xl lg:hidden fixed cursor-pointer
                         top-2 right-4 lg:static" onClick={()=>handleClick(!open)}/>
                    

                    <div className="max-w-3xl hidden lg:block w-full mx-auto relative lg:static">
                        <ul className="flex justify-between flex-col lg:flex-row">
                            <li className=""><Link href="/" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Home</Link></li>
                            <li><Link href="/about" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>About</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Skill</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Project</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Social Work</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Other Activity</Link></li>
                            <li><Link href="" className={`${cinzel_decorative.className}
                            text-white transition-all delay-70 duration-300 ease-in-out hover:text-lg font-semibold text-sm uppercase`}>Social Media</Link></li>  
                        </ul>

                        <h2 className="text-blue-400 hidden fixed cursor-pointer
                         top-1 right-4 lg:static">Open</h2>

                    </div>
                </div>
        </div>
    )
}

export default Navbar;