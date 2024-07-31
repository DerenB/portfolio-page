import React from "react";

const HeroBanner = () => {
    return (
        <div className="bg-blue-500 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
                <p className="text-lg md:text-2xl mb-8">This is a brief description of what my website is about.</p>
                <a href="#learn-more" className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-200">
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default HeroBanner