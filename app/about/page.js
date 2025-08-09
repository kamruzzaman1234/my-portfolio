"use client";

import AboutDetails from "@/components/About/AboutDetails/AboutDetails";

const { default: divider } = require("daisyui/components/divider");

const About = ()=>{
    return(
    <div className="py-32">
        <AboutDetails></AboutDetails>
    </div>

    )
}

export default About;