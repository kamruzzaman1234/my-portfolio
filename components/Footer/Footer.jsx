import { Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    display: "swap",
})

const Footer =()=>{
    return(
        <div className="py-4 bg-slate-900">
            <div className="max-w-5xl w-full mx-auto">
                <h2 className={`${poppins.className} text-lg text-white text-center uppercase font-nornal`}>Design by <span>MD Kamruzzaman</span> </h2>
            </div>
        </div>
    )
}

export default Footer;