"use client";

import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";

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
                    <p className={`${poppins.className} text-sm text-black`}>Any Question or remarks ? just write as a message</p>  
                </div> 
            </div>
        </div>
    )   
}

export default ContactArea;