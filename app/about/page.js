"use client";

import AboutDetails from "@/components/About/AboutDetails/AboutDetails";
import AboutService from "@/components/About/AboutService/AboutService";

const { default: divider } = require("daisyui/components/divider");

const About = ()=>{
    return(
    <div className="pt-32 pb-28">
        <AboutDetails></AboutDetails>
        <AboutService></AboutService>
    </div>

    )
}

export default About;