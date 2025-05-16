"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Settings,
  LogOut,
  X,
  ChevronRight,
  ShoppingBag,
  BarChart2,
  Users,
  Bell,
  CreditCard,
  Home,
  Package,
  HelpCircle,
  Sparkles,
} from "lucide-react"

interface SideMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/", color: "text-primary" },
    { icon: ShoppingBag, label: "Sales", href: "/sales", color: "text-amber-500" },
    { icon: CreditCard, label: "Credit Sales", href: "/credit-sales", color: "text-accent" },
    { icon: Package, label: "Products", href: "/products", color: "text-blue-500" },
    { icon: BarChart2, label: "Analytics", href: "/analytics", color: "text-green-500" },
    { icon: Users, label: "Customers", href: "/customers", color: "text-purple-500" },
    { icon: Bell, label: "Notifications", href: "/notifications", color: "text-orange-500" },
    { icon: Settings, label: "Settings", href: "/settings", color: "text-slate-500" },
    { icon: HelpCircle, label: "Support", href: "/support", color: "text-slate-500" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 shadow-xl rounded-l-3xl flex flex-col"
          >
            <div className="p-6 border-b border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-primary">iHustle POS</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Cameron Smith</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C696]"></span>
                    <p className="text-xs text-slate-500">Premium Account</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 py-4 px-3 flex flex-col justify-between">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                    <div className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors">
                      <div
                        className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center ${item.color}`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 mx-4">
                {/* AI Assistant Card */}
                <div className="bg-[#E7F9F4] rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[#00C696]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-medium text-slate-800">AI Assistant</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Get help with inventory management, sales forecasting, and more.
                  </p>
                  <Link href="/ai-assistant">
                    <button className="w-full py-2 bg-[#00C696] text-white rounded-lg text-sm font-medium">
                      Ask AI Assistant
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100">
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Profile</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </Link>

              <Link href="/auth" onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-red-50 transition-colors text-red-500">
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                    <LogOut className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Sign Out</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
