'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-black text-white gap-40 px-6 md:px-28 pt-32 pb-10 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[415px] h-[459px] bg-[#2f2921]/40 rounded-full blur-3xl top-0 left-30" />
        <div className="absolute w-[400px] h-[400px] bg-[#2f2921]/40 rounded-full blur-2xl -bottom-20 -right-20" />
      </div>

      {/* Text Section */}
      <div className="relative z-10 w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6 text-[#e4e0db]">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-grandiflora font-medium leading-tight">
          H<span className="italic">e</span>ll<span className="italic">o, I</span> Am <br />
          <span className="inline-block pt-6">
            <span className="italic">A</span>mrutha Acharya
          </span>
        </h1>

        {/* Arrow + Content */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 sm:gap-10 md:pl-32">

          {/* Arrow */}
          <div className="relative w-52 h-24 hidden sm:block">
            <Image
              src="/images/arrow-curve.png"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>

          {/* Paragraph + Button */}
          <div className="flex flex-col items-center">
            <p className="mt-10 max-w-md text-sm md:text-base font-mono text-[#aba69e] md:text-justify">
              I&apos;m Amrutha Amrutha — a full-stack developer and creative thinker with a growing interest in AI.
              <br />
              This is my space to share projects, ideas, and my journey of building meaningful digital experiences. I enjoy turning concepts into engaging web applications and leveraging AI to create smarter, more impactful solutions, while continuously learning and evolving.
            </p>

            <a
              href="/images/Amrutha_resume.pdf"
              download
              className="mt-6 px-6 py-3 rounded-full text-sm font-semibold bg-[#8491d9] shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 w-full md:w-1/3 flex justify-center mt-12 md:mt-6 mb-8">
        
        <motion.div
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="relative cursor-pointer"
        >

          {/* Glow Layer */}
          <motion.div
            variants={{
              rest: { scale: 1, opacity: 0.2 },
              hover: { scale: 1.1, opacity: 0.4 }
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-2xl blur-2xl bg-[#8491d9]/10"
          />

          {/* Rotated Border Frame */}
          <motion.div
            variants={{
              rest: { rotate: 6 },
              hover: { rotate: 10 }
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
          />

          {/* Image Container */}
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.4 }}
            className="relative w-[300px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_25px_rgba(132,145,217,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

            <Image
              src="/images/tied_photo.png"
              alt="Amrutha Acharya"
              fill
              className="object-cover"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;