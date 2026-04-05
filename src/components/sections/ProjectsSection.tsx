'use client'

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from "next/image";

type Project = {
    title: string;
    type: string;
    image: string;
    github: string;
    video?: string;
};

const projects: Project[] = [
    {
        title: 'GITI-Music-Streaming-Website',
        type: 'image',
        image: '/images/GITI.png',
        github: 'https://github.com/amrutha9501/GITI-Music-Streaming-Website',
    },
    {
        title: 'Learning Management System',
        type: 'image',
        image: '/images/LMS.png',
        github: 'https://github.com/amrutha9501',
    },
    {
        title: 'Conversational AI Form Submission',
        type: 'image',
        image: '/images/AI.png',
        github: 'https://github.com/amrutha9501/AI-Form-Submission-Agent',
    },
    {
        title: 'Sign Up and Login Page',
        type: 'image',
        image: '/images/Login.png',
        github: 'https://github.com/amrutha9501/GITI-Music-Streaming-Website',
    },
    {
        title: 'Book It - Ticket Booking Android App',
        type: 'image',
        image: '/images/BookIt.png',
        github: 'https://github.com/amrutha9501/BookIt-Ticket-Booking-App',
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects" className="w-full px-4 py-20 bg-gray-100 dark:bg-[#00020a] pt-24 ">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading - animates on scroll */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#b3cfe5] dark:text-[#b3cfe5] mb-6"
                >
                    MY PROJECTS
                </motion.h2>

                {/* Paragraph - fades in from below after heading */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-[#d3cdc3] dark:text-[#d3cdc3] mb-10 text-sm md:text-base font-mono max-w-3xl mx-auto"
                >
                    A collection of personal projects where I experiment, learn, and bring ideas to life with code. Each one is a small step in my journey of turning curiosity into creativity.
                </motion.p>

                {/* Projects Grid */}
                <div className="flex flex-wrap justify-center gap-14">
                    {projects.map((project, index) => {
                        // Direction and scale based on position
                        let directionX = 0;
                        if (index % 3 === 0) directionX = -100; // left
                        else if (index % 3 === 1) directionX = 0; // center
                        else directionX = 100; // right

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: directionX, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-xl w-[350px] h-[350px]"
                            >
                                <div className="relative w-full h-full">
                                    {project.type === 'image' ? (
                                        <Image 
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <video
                                            src={project.video}
                                            controls
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2 px-4 text-lg font-josefin">
                                    {project.title}
                                </div>

                                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-sm md:text-base flex items-center gap-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
                                    >
                                        <FaGithub className="text-xl" /> View on GitHub
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
