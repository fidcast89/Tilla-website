"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo_n_tagline_horizontal.png" alt="iHustle Logo" className="h-8" />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: "Features", href: "/features" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" className="mr-3 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
              Log in
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">Sign up</Button>
          </div>

          <div className="md:hidden">
            <button type="button" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        {isOpen && (
          <div className="bg-gray-900 px-4 py-2">
            <ul className="space-y-4 py-4">
              {[
                { name: "Features", href: "/features" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-base text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Log in
                </Button>
              </li>
              <li className="pt-2">
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Sign up</Button>
              </li>
            </ul>
          </div>
        )}
      </motion.div>
    </header>
  )
}
