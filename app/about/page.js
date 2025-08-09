"use client";

import AboutDetails from "@/components/About/AboutDetails/AboutDetails";
import AboutService from "@/components/About/AboutService/AboutService";
import Education from "@/components/About/Education/Education";
import Experience from "@/components/About/Experience/Experience";

const { default: divider } = require("daisyui/components/divider");

const About = ()=>{
    return(
    <div className="pt-32 pb-28">
        <AboutDetails></AboutDetails>
        <AboutService></AboutService>
        <Education></Education>
        <Experience></Experience>
    </div>

    )
}

export default About;