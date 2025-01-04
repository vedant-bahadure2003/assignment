'use client';
import { useState, useRef } from "react";
import { blogData } from "../../app/blogdata.js";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
    const [blogDetails, setBlogDetails] = useState(blogData);
    const blogContainerRef = useRef(null);

    const scrollBlog = () => {
        if (blogContainerRef.current) {
            blogContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="w-[90%] lg:w-[80%] mx-auto mt-[20px] md:mt-[70px] relative">
                <h1 className="text-2xl md:text-4xl font-bold text-center">
                    Our Latest <span className="text-[#16A8AF] underline">Blog</span>
                </h1>
                <p className="text-center mt-2 text-sm md:text-lg text-[#282828]">
                    Empowering Future Doctors with <br className="sm:hidden" /> Valuable Information!
                </p>
                <div className="flex overflow-x-auto gap-5 mt-5 md:mt-10 scrollbar-hide" ref={blogContainerRef}>
                    {blogDetails.map((blog) => (
                        <div key={blog.id} className="w-[290px] lg:w-[300px] flex-shrink-0">
                            <div className="w-[290px] lg:w-[300px] border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                                <div>
                                    <img
                                        src={blog.blogImage}
                                        alt="Loading"
                                        className="w-full h-[200px] object-cover"
                                    />
                                </div>
                                <div className="p-3 flex flex-col gap-2">
                                    <p className="text-black flex items-center gap-1">
                                        <span className="bg-[#16A8AF] w-[7px] h-[7px] rounded-full"></span>
                                        {blog.date}
                                    </p>
                                    <h1 className="text-xl font-semibold">{blog.blogHeading}</h1>
                                    <p className="text-gray-700 text-justify text-sm">
                                        {blog.blogContent}
                                    </p>
                                    <button className="bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Scroll Button */}
                <button
                    className="absolute right-0 top-[60%] transform -translate-y-1/2 bg-[#16A8AF] p-3 rounded-full text-white shadow-lg"
                    onClick={scrollBlog}
                >
                    <IoIosArrowForward className="text-xl" />
                </button>
            </div>
        </>
    );
};

export default Blog;
