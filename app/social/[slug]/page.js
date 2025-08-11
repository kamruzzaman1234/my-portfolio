"use client";

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

const Page = ({params})=>{
    console.log(params.slug)
    const {title, description} = blogs.find((blog)=> blog.slug == params.slug)
    return(
        <div className="pt-30 pb-20">
            <h3 classNam="text-black">Details page is ready</h3>
            <h3 classNam="text-black">{title}</h3>
            <h3 classNam="text-black">{description}</h3>
        
        </div>
        
    )
}

export default Page;