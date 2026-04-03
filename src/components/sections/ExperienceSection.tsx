'use client'
import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const experiences = [
  {
    company: 'Utthunga Technologies Pvt Ltd',
    location: 'Jayanagara, Bengaluru',
    duration: 'Feb 2025 - Jun 2025',
    title: 'Full-stack Developer Intern',
    image: '/images/exp1.jpg',
    summary: [
      'Worked on a full-stack internal web app for employee learning using Angular and Django, focusing on UI improvements and API integration. Awarded "Going Above and Beyond" for exceptional contribution.',
    ],
    stack: ['Angular', 'Django', 'Bootstrap', 'MySQL', 'REST API', 'Docker', 'Git', 'Agile']
  },
  // {
  //   company: 'GITI Solutions',
  //   location: 'Remote',
  //   duration: 'Nov 2024 - Jan 2025',
  //   title: 'Frontend Developer Intern',
  //   image: 'https://googleusercontent.com/file_content/giti.png',
  //   summary: [
  //     'Developed responsive UIs using React and Tailwind CSS.',
  //     'Implemented pixel-perfect designs based on Figma wireframes.',
  //     'Improved app performance through component optimization and lazy loading.',
  //   ],
  //   stack: ['React', 'Tailwind CSS', 'JavaScript', 'UX/UI'],
  // },
  // {
  //   company: 'CodeKarma',
  //   location: 'Manipal, India',
  //   duration: 'May 2024 - Jul 2024',
  //   title: 'Software Engineering Intern',
  //   image: 'https://googleusercontent.com/file_content/codekarma.png',
  //   summary: [
  //     'Contributed to a Django-based placement portal backend.',
  //     'Wrote unit tests and improved backend validation and security.',
  //     'Assisted with deployment on Heroku using PostgreSQL.',
  //   ],
  //   stack: ['Django', 'PostgreSQL', 'Heroku', 'Unit Testing', 'Git'],
  // },
]

const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const cardWidth = container.querySelector('.experience-card')?.clientWidth || 700
      const gap = 16
      const scrollLeft = container.scrollLeft
      const index = Math.round(scrollLeft / (cardWidth + gap))
      setActiveIndex(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.experience-card')?.clientWidth || 600
      const gap = 16
      const scrollAmount = cardWidth + gap
      scrollRef.current.scrollTo({
        left: direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.experience-card')?.clientWidth || 600
      const gap = 16
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="experience"
      className="relative w-full px-24 py-12 p-12 text-white bg-black"
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-0" />
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
        {/* Left side content */}
        <div className="md:w-2/5 w-full text-center md:text-left">
          <h2 className="text-4xl font-bold mt-20 mb-10 text-[#cfb495]">
            WORK <br />
            <span className="block mt-2">EXPERIENCE</span>
          </h2>
          <p className=" leading-relaxed text-sm md:text-lg font-mono max-w-md mt-4 md:mt-8 text-[#d3cdc3]">
            Here&apos;s a snapshot of the roles I&apos;ve taken on, challenges I&apos;ve solved, and value I&apos;ve added to teams and projects.
            Each opportunity has helped shape my problem-solving skills, adaptability, and growth as a developer.
          </p>


        </div>

        {/* Right side cards */}
        <div className="relative w-full md:w-3/5 flex items-center justify-center">
          {/* Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 -ml-4 z-10 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300 focus:outline-none"
          >
            <ChevronLeft className="w-8 h-8 text-[#F6AA1C]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 -mr-4 z-10 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300 focus:outline-none"
          >
            <ChevronRight className="w-8 h-8 text-[#F6AA1C]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-20 overflow-x-hidden scroll-smooth snap-x snap-mandatory pb-2 mx-0 md:mx-32"

          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card font-bold flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[40vw]  rounded-2xl p-12 shadow-xl relative"
                style={{ scrollSnapAlign: 'start' }}
              >
                <h3 className="text-2xl text-center text-[#F6AA1C] mb-1">{exp.company}</h3>
                <h5 className="text-md text-center text-[#F6AA1C] mb-2">{exp.title}</h5>
                <h6 className="text-sm text-center text-[#F6AA1C] mb-2">[ {exp.duration} ]</h6>

                <div className="overflow-y-auto pt-2">
                  <ul className="list-none pl-0 text-sm text-[#d3cdc3] space-y-1 text-justify">
                    {exp.summary.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-5 py-2 rounded-full text-black font-semibold bg-[#ffffff]
                                 hover:scale-105 active:scale-95 transition-all duration-200
                                 hover:shadow-[4px_4px_6px_rgba(0,0,0,0.4)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="flex justify-center md:justify-start mt-4">
        <div className="flex items-center p-1 rounded-full border border-gray-600 bg-gray-700 bg-opacity-30">
          {experiences.map((_, index) => (
            <span
              key={index}
              className={`transition-all duration-300 mx-1 cursor-pointer
                    ${index === activeIndex
                  ? 'w-8 h-3 rounded-full bg-[#F6AA1C]'
                  : 'w-3 h-3 rounded-full bg-gray-300 opacity-60'
                }`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection