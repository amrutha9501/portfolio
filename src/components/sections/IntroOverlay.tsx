'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const [lineWidth, setLineWidth] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000); // total display time

        // Set line width based on h1 after render
        if (h1Ref.current) {
            setLineWidth(h1Ref.current.offsetWidth);
        }

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-[200vh] z-[60]"
                    initial={{ y: 0 }}
                    animate={{ y: '-100%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 4 }}
                >
                    {/* Black Layer with Background Image and Text */}
                    <div
                        className="h-screen bg-black bg-cover bg-center text-[#F6AA1C] flex items-center justify-center"
                        style={{
                            backgroundImage: 'url("/images/brand-bg.jpg")',
                        }}
                    >
                            <h1
                                ref={h1Ref}
                                className="md:text-[9rem] font-genos tracking-widest uppercase flex scale-x-125"
                            >
                                CODELIXER
                            </h1>
                            
                        
                    </div>

                    {/* Yellow Layer */}
                    <div className="h-screen bg-yellow-400" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroOverlay;
