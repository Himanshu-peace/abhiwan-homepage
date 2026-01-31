`use client`
import React from "react";

import Hero from "./hero";
import Blogs from "./blogs";

export default function Thankyou() {
    return (
        <div id="thank-you" className="bg-[#ffffff]">
            <Hero />
            <Blogs />
        </div>
    );
}