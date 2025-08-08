import { Cinzel_Decorative } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const Navbar = ()=>{
    return(
        <div className="py-4 bg-slate-900">
                <div className="max-w-6xl w-full mx-auto">
                    <div className="max-w-3xl w-full mx-auto">
                        <h3>text-white</h3>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;