"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171635] text-white border-b border-white/10">
      <div className="relative mx-auto max-w-350 px-6 py-6 flex items-center">

        <Link href="/" className="text-xl font-bold shrink-0">
          <Image
            src="/abhiwan.svg"
            alt="Abhiwan logo"
            width={77}
            height={48}
            priority
          />
        </Link>

        <nav 
          className="hidden md:flex 
          absolute left-1/2 -translate-x-1/2 
          items-center 
          gap-6 lg:gap-10
          max-w-200
          w-full
          justify-center">
          <Link href="#home" className="text-sm hover:text-[#D227FC] transition-colors">HOME</Link>

          <Link
            href="#services"
            className="group text-sm hover:text-[#D227FC] transition-colors flex items-center gap-1"
          >
            SERVICES
            <Image
              src="/DownFrame.svg"
              alt="toggle"
              width={19}
              height={19}
              priority
              className="inline-block transition-transform duration-300 ease-in-out group-hover:-rotate-180"
            />
          </Link>
          <Link href="#portfolio" className="text-sm hover:text-[#D227FC] transition-colors">PORTFOLIO</Link>
          <Link href="#blog" className="text-sm hover:text-[#D227FC] transition-colors">BLOG</Link>
          <Link href="#about" className="text-sm hover:text-[#D227FC] transition-colors">ABOUT US</Link>
          <Link href="#contact" className="text-sm hover:text-[#D227FC] transition-colors">CONTACT US</Link>
        </nav>
        
        <div className="ml-auto hidden md:block p-px bg-linear-to-r from-[#7300FF] to-[#cda4FF] rounded-2xl">
          <Button className="bg-radial from-[#525AFF] from-10% to-[#0900FF] to-90% text-white px-6 rounded-2xl">
            Free Quote
          </Button>
        </div>

        {/* hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>



      {/* for screens less than 768px */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-6 px-6 py-8 bg-[#171635] border-t border-white/10">
          <Link href="#home" onClick={() => setOpen(false)}>HOME</Link>
          <Link href="#services" onClick={() => setOpen(false)}>SERVICES</Link>
          <Link href="#portfolio" onClick={() => setOpen(false)}>PORTFOLIO</Link>
          <Link href="#blog" onClick={() => setOpen(false)}>BLOG</Link>
          <Link href="#about" onClick={() => setOpen(false)}>ABOUT US</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>CONTACT US</Link>

          <Button className="mt-4 bg-radial from-[#525AFF] to-[#0900FF] text-white">
            Free Quote
          </Button>
        </nav>
      </div>
    </header>
  )
}
