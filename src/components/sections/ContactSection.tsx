'use client'
import React from 'react'
import {
  FaEnvelope, FaPhoneAlt,
  FaLinkedinIn, FaGithub, FaTwitter, FaInstagram,
} from 'react-icons/fa'

const socialLinks = [
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/amrutha-ach/', color: 'hover:bg-blue-500' },
  { icon: <FaGithub />, href: 'https://github.com/amrutha9501', color: 'hover:bg-gray-800' },
  { icon: <FaTwitter />, href: 'https://twitter.com', color: 'hover:bg-sky-400' },
  { icon: <FaInstagram />, href: 'https://instagram.com/amrutha.0', color: 'hover:bg-pink-500' },
];

const ContactSection = () => (
  <>
    <section
      id='contact'
      className="min-h-[45vh] w-full bg-[#010315] text-[#e8e2db] flex flex-col items-center justify-center px-6 font-josefin text-center pt-10 py-10"
    >
      <div className="max-w-4xl w-full mb-12">
        <h2 className="text-4xl font-bold mb-8">CONTACT</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Feel free to reach out to me through any of the following ways!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6 items-center">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-white text-lg" />
            <p>+91 93803 94258</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-white text-lg" />
            <p>amruthaacharya2001@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center gap-6 text-lg">
        <div className="flex gap-6 justify-center">
          {socialLinks.map(({ icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 text-xl flex items-center justify-center border border-white rounded-full transition duration-300 ${color} hover:bg-white hover:text-[#0D0F2A]`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Copyright Footer */}
    <footer className="w-full bg-[#010315] py-4">
      <p className="text-sm text-[#b3cfe5] text-center tracking-widest">
        © {new Date().getFullYear()} Amrutha Acharya. All rights reserved.
      </p>
    </footer>

  </>
)

export default ContactSection
