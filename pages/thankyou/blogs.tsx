import React from "react";

const Blogs: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="relative mx-10 px-2 py-16 md:py-5">
                <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[40%_60%] md:gap-8">
                    <h1 className=" font-futura text-[40px] font-medium leading-tight tracking-tight text-gray-900 sm:text-6xl">
                        <span className="md:text-7xl">Blog</span>
                    </h1>

                    <div className="md:col-auto -mt-25">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-1.5 text-sm font-medium text-gray-500 shadow-sm">
                            <img
                                src="/heart-icon.svg"
                                alt="Heart"
                                className="h-3.5 w-3.5"
                            />
                            <span className=" font-sans">You’ve Made It Here!</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Blogs;