import React from 'react'
import './globals.css';
import Navbar from '../components/sections/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Grandiflora+One&family=Josefin+Slab:wght@400;700&family=Oswald:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>

    </html>
  )
}
