import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                iHustle<span className="text-primary">POS</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              The AI-powered POS system built for small businesses that want to work smarter, not harder.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} iHustle POS. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/security" className="text-xs text-gray-400 hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
