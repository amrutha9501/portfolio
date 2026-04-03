import React from 'react'
import './globals.css';
import Navbar from '../components/sections/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>

    </html>
  )
}
