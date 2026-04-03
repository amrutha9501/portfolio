'use client'
import React from 'react'
import {
  FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaDocker, FaAndroid, FaNodeJs,
} from 'react-icons/fa'
import {
  SiCplusplus, SiMongodb, SiDjango, SiTailwindcss, SiBootstrap, SiExpress,
  SiVsco, SiPostman, SiMysql, SiAngular
} from 'react-icons/si'
import { FaLink } from 'react-icons/fa'
import { BiMessageAlt, BiSolidMessageAlt } from 'react-icons/bi'

const skillsData = {
  Languages: [
    { name: 'C++', icon: <SiCplusplus className="text-blue-500" />, link: 'https://cplusplus.com/' },
    { name: 'Python', icon: <FaPython className="text-yellow-500" />, link: 'https://docs.python.org/3/' },
    { name: 'Java', icon: <FaJava className="text-red-600" />, link: 'https://docs.oracle.com/en/java/' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'SQL', icon: <SiMysql className="text-blue-600" />, link: 'https://dev.mysql.com/doc/' },
  ],
  Technologies: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Django', icon: <SiDjango className="text-green-700" />, link: 'https://docs.djangoproject.com/' },
    { name: 'React', icon: <FaReact className="text-cyan-400" />, link: 'https://reactjs.org/docs/getting-started.html' },
    { name: 'Angular', icon: <SiAngular className="text-red-500" />, link: 'https://angular.io/docs' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, link: 'https://tailwindcss.com/docs' },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" />, link: 'https://getbootstrap.com/docs/' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, link: 'https://www.mongodb.com/docs/' },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-black" />, link: 'https://expressjs.com/en/4x/api.html' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, link: 'https://nodejs.org/en/docs/' },
  ],
  Tools: [
    { name: 'VS Code', icon: <SiVsco className="text-blue-500" />, link: 'https://code.visualstudio.com/docs' },
    { name: 'Git / GitLab', icon: <FaGitAlt className="text-orange-500" />, link: 'https://git-scm.com/doc' },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" />, link: 'https://docs.docker.com/' },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" />, link: 'https://learning.postman.com/docs/' },
    { name: 'MySQL Workbench', icon: <SiMysql className="text-blue-600" />, link: 'https://dev.mysql.com/doc/workbench/en/' },
    { name: 'Android Studio', icon: <FaAndroid className="text-green-500" />, link: 'https://developer.android.com/studio' },
  ],
}

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full px-6 py-10 bg-black dark:bg-[#f4f4f0] pt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black-800 dark:text-[#010626] text-center mb-6">
          TECHNICAL SKILLS
        </h2>
        <p className="text-center text-[#010626] dark:text-black-300 mb-10 text-sm md:text-base font-mono max-w-3xl mx-auto">
          A comprehensive overview of programming languages, development frameworks, and tools I use to build efficient and scalable software.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-black-800 dark:text-b-200 text-center">
                  {category}</h3>
                <div className="flex flex-wrap gap-4 justify-end">
                  {skills.map((skill, idx) => (
                    <a
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-xl border border-black hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
                    >
                      <div className="flex items-center gap-2 w-full h-full rounded-xl px-4 py-2 transition-all duration-300 relative">
                        <div className="text-xl text-black">{skill.icon}</div>
                        <span className="text-xs font-medium text-black">{skill.name}</span>
                        <FaLink className="absolute top-1 right-1 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs" />
                      </div>
                    </a>

                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col px-14 ">
            <h3 className="text-2xl font-semibold mb-10 text-center text-black-800 dark:text-black-200">
              Proficiency Overview
            </h3>
            {[
              { label: 'Web Development', percent: 93 },
              { label: 'Java', percent: 93 },
              { label: 'Python', percent: 80 },
              { label: 'C++', percent: 70 },
              { label: 'SQL', percent: 96 },
              { label: 'App Development', percent: 65 },
            ].map((item, idx) => (
              <div key={idx} className="mb-6 relative">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-black-700 dark:text-black-300">{item.label}</span>
                </div>
                <div className="relative w-full bg-black-200 h-1 dark:bg-gray-700 rounded-full">
                  {/* Colored Progress */}
                  <div
                    className="mt-4 h-1 bg-gradient-to-r from-[#010b40] to-[#010626] rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                  {/* Dot at the end */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-[#010626]"
                    style={{ left: `${item.percent}%`, transform: 'translate(-50%, -50%)' }}
                  ></div>
                  <div
                    className="absolute -top-8 transform -translate-x-1/2 group"
                    style={{ left: `${item.percent}%` }}
                  >
                    <div className="relative w-14 h-10 flex items-center justify-center">
                      <BiSolidMessageAlt className="text-[#010626] w-full h-full mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-md" />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] mb-5 font-bold text-white">
                        {item.percent}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


  )
}

export default SkillsSection
