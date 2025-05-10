import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {

    useEffect(() => {
        if (window.location.hash === '#contact' && window.location.hash === '#whychooseus') {
            window.history.replaceState(null, null, window.location.pathname); // Remove the #contact from the URL
        }
    }, []);

    return (
        <section
        id="home" 
            className="relative bg-cover bg-center text-white py-40 px-6 min-h-[calc(100vh-64px)] pt-80 "
            style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/010/648/396/small_2x/business-people-or-accountants-are-analyzing-graphs-on-finance-investment-graph-chart-business-strategy-ideas-data-analysis-technology-free-photo.jpg) ' }} // Set opacity to 1}
        >
            <div className="max-w-3xl mx-auto flex flex-col justify-center h-full text-center">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r bg-clip-text from-blue-500 to-pink-500 text-transparent z-1"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Resell Your Software Licenses with Ease
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-purple-500 dark:text-blue-700 mb-8 z-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Turn unused licenses into cash—fast, secure, and hassle-free.
                </motion.p>
                <Link
                    to="contact" // The ID of the section you want to scroll to
                    smooth={true} // Enable smooth scrolling
                    duration={500} // Duration for scrolling (500ms)
                    offset={-70} // Offset to account for fixed headers, if any
                    className="z-1"
                >
                    <button className="bg-pink-500 text-white py-4 px-10 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:scale-110 transition-all ease-in duration-300 ">
                        Get in Touch
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default Hero;
