"use client";
import { Cinzel_Decorative, Poppins } from "next/font/google";
import Link from "next/link";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const blogs = [
    {
        slug:1,
        title:"Volantier",
        description:"Lorema ispum dolar sit amet and conceptetur and other evulation for the volantieer"
    },
    {
        slug:2,
        title:"Social work",
        description: "Loream ispum dollar sit amet and concepture and other evulation"
    },
    {
        slug:3,
        title: "Work Dairy",
        description:"Loream ispum dolar sit amet and concepteture and other evulation"
    },

]

const HelpPeople = ()=>{
    return(
        <div className="pt-32 ">
            <div className="max-w-6xl w-full mx-auto">
                <div className="mb-10">
                    <h2 className={`${cinzel_decorative.className} text-3xl font-semibold text-black`}>Social work</h2>    
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {blogs.map((blog)=> <div key={blog.slug} className="border-2 p-8 ">
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button className="bg-green-500 text-white px-8 py-4">
                        <Link href={`/social/${blog.slug}`}>View Details</Link></button>
                 </div>)}   
                </div>
            </div>
        </div>
    )
}

export default HelpPeople;