'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const EducationSection = () => {
    return (
        <section id="education" className="w-full px-4 py-6 bg-black dark:bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center text-black-800 dark:text-black">EDUCATION</h2>
                <div className="relative flex flex-col gap-6">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black-300 dark:bg-[#68321f]" />
                    {educationData.map((edu, index) => {
                        const isLeft = index % 2 === 0
                        return (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${index === 0 ? 'mt-10' : index === educationData.length - 1 ? 'mb-10' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {isLeft ? (
                                    <>
                                        {/* LEFT SIDE: Course & Duration */}
                                        <div className="flex justify-end w-full pr-3 md:pr-4">
                                            <div className="text-right max-w-sm">
                                                <p className="text-xs text-black-500 dark:text-black-400">{edu.duration}</p>
                                                <h3 className="text-sm font-semibold text-black-500 dark:text-black-400">{edu.course}</h3>
                                            </div>
                                        </div>

                                        {/* ICON */}
                                        <div className="w-6 h-6 flex items-center justify-center bg-black dark:bg-black-950 border-2 border-black-800 dark:border-black rounded-full z-10 shrink-0">
                                            {/* <GraduationCap className="w-3 h-3 text-black-800 dark:text-white" /> */}
                                        </div>

                                        {/* LEFT SIDE: Institution Details */}
                                        <div className="flex justify-start w-full pl-4">
                                            <div className="group relative p-[3px] rounded-xl bg-gradient-to-r from-[#000000] via-[#002B2A] to-[#76400e] animate-gradient-border max-w-sm">
                                                <div className="bg-white p-3 rounded-lg shadow-sm w-full h-full">
                                                    <p className="text-xs font-medium text-black">{edu.institution}</p>
                                                    <p className="text-xs text-black-300">{edu.score}</p>
                                                    <p className="text-xs text-black-400">{edu.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* RIGHT SIDE: Institution Details */}
                                        <div className="flex justify-end w-full pr-4">
                                            <div className="group relative p-[3px] rounded-xl bg-gradient-to-r from-[#000000] via-[#002B2A] to-[#76400e] animate-gradient-border max-w-sm">
                                                <div className="bg-white p-3 rounded-lg shadow-sm w-full h-full text-right">
                                                    <p className="text-xs font-medium text-black">{edu.institution}</p>
                                                    <p className="text-xs text-black-300">{edu.score}</p>
                                                    <p className="text-xs text-black-400">{edu.location}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ICON */}
                                        <div className="w-6 h-6 flex items-center justify-center bg-black dark:bg-black-950 border-2 border-black-800 dark:border-black rounded-full z-10 shrink-0 text-sm">
                                            
                                        </div>

                                        {/* RIGHT SIDE: Course & Duration */}
                                        <div className="flex justify-start w-full pl-3 md:pl-4">
                                            <div className="text-left max-w-sm">
                                                <p className="text-xs text-black-500 dark:text-black-400">{edu.duration}</p>
                                                <h3 className="text-sm font-semibold text-black-800 dark:text-black">{edu.course}</h3>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const educationData = [
    {
        institution: 'Manipal Institute of Technology, MAHE University',
        duration: '2023 –  2025',
        course: 'Master of Computer Applications (MCA)',
        score: 'CGPA: 7.36',
        location: 'Manipal, Karnataka',
    },
    {
        institution: 'Dr. NSAM First Grade College Nitte, Mangaluru University',
        duration: '2018 – 2022',
        course: 'B.Com with Computer Applications',
        score: '82.89%',
        location: 'Karkala, Karnataka',
    },
    {
        institution: 'Viveka Pre-University College Kota, Karnataka Board',
        duration: '2016 – 2018',
        course: 'Commerce CEBA – Computer Science',
        score: '93.67%',
        location: 'Kota, Karnataka',
    },
    {
        institution: 'Government High School Brahmavar, Karnataka Board',
        duration: '2016',
        course: '10th',
        score: '91.84%',
        location: 'Brahmavar, Karnataka',
    },
]

export default EducationSection
