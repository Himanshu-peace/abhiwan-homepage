`use client`
import React from "react";

import Hero from "./hero";
import Blogs from "./blogs";
import PortfolioSection from "./portfoliosection";

export default function Thankyou() {
    return (
        <div id="thank-you" className="bg-[#ffffff]">
            <Hero />
            <PortfolioSection />
            <Blogs />
        </div>
    );
}