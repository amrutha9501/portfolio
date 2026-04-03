'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="w-full fixed top-0 z-50 shadow-md bg-black border-b-2 border-[#000000]">
      <div className="w-full mx-auto px-16 md:px-28 py-3 flex items-center justify-between">

        <Link href="/" className="flex flex-col items-start select-none" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 mt-6 mr-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={`font-oswald text-md transition-all duration-200
                ${active === item.href 
                  ? 'text-[#8491d9] border-b-2 border-[#8491d9]' 
                  : 'text-[#E4D6C5] hover:text-[#8491d9]'
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-2 text-center bg-black text-white shadow-md px-6 pb-4 pt-4">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-2 font-medium transition
                ${active === item.href 
                  ? 'text-[#8491d9] underline' 
                  : 'text-white hover:text-[#8491d9]'
                }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}