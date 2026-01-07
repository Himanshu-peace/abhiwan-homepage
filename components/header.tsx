"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171635] text-white border-b border-white/10 overflow-visible">
      <div className="relative mx-auto max-w-350 px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold shrink-0">
          <Image
            src="/abhiwan.svg"
            alt="Abhiwan logo"
            width={77}
            height={48}
            priority
          />
        </Link>

        {/* Center nav (>= lg only) */}
        <nav
          className="
            hidden lg:flex
            absolute left-1/2 -translate-x-1/2
            items-center gap-10
          "
        >
          <Link href="#home" className="text-sm hover:text-[#D227FC] transition-colors">
            HOME
          </Link>

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

          <Link href="#portfolio" className="text-sm hover:text-[#D227FC] transition-colors">
            PORTFOLIO
          </Link>

          <Link href="#blog" className="text-sm hover:text-[#D227FC] transition-colors">
            BLOG
          </Link>

          <Link href="#about" className="text-sm hover:text-[#D227FC] transition-colors whitespace-nowrap">
            ABOUT US
          </Link>

          <Link href="#contact" className="text-sm hover:text-[#D227FC] transition-colors whitespace-nowrap">
            CONTACT US
          </Link>
        </nav>

        {/* CTA (>= lg only) */}
        <div className="ml-auto hidden lg:block p-px bg-linear-to-r from-[#7300FF] to-[#cda4FF] rounded-2xl">
          <Button className="bg-radial from-[#525AFF] from-10% to-[#0900FF] to-90% text-white px-6 rounded-2xl">
            Free Quote
          </Button>
        </div>

        {/* Hamburger (< lg) */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto lg:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile / Tablet menu (< lg) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
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

      {/* Curved header bottom – centered, full-width */}
      <div className="pointer-events-none absolute left-0 right-0 -bottom-[180px]">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="w-full h-[180px]"
        >
          <path
            d="
              M0 0
              C360 45 1080 45 1440 0
              L1440 -1
              L0 -1
              Z
            "
            fill="#171635"
          />
        </svg>
      </div>

    </header>
  )
}
