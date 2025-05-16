"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Menu } from "lucide-react"
import { SideMenu } from "./side-menu"
import { MobileNavigation } from "./mobile-navigation"

interface MobileContainerProps {
  children: React.ReactNode
  title?: string
  showHeader?: boolean
  showBackButton?: boolean
  backUrl?: string
  showMenuButton?: boolean
  showNotificationButton?: boolean
  hideBottomNav?: boolean
}

export function MobileContainer({
  children,
  title,
  showHeader = true,
  showBackButton = false,
  backUrl = "/",
  showMenuButton = false,
  showNotificationButton = false,
  hideBottomNav = false,
}: MobileContainerProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <div className="relative w-full max-w-[420px] mx-auto h-screen overflow-hidden bg-[#f2f5fa] text-slate-800">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4 pt-7 pb-4">
        <span className="text-xs font-medium text-slate-500">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-accent opacity-70"></div>
          <div className="w-3 h-3 rounded-full border border-slate-400"></div>
          <div className="w-3 h-3 rounded-full border border-slate-400"></div>
        </div>
      </div>

      {/* Header */}
      {showHeader && (
        <header className="px-6 pb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showBackButton && (
              <Link href={backUrl}>
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ArrowLeft className="w-4 h-4 text-slate-600" />
                </div>
              </Link>
            )}

            {title && <h1 className="text-xl font-medium">{title}</h1>}
          </div>

          <div className="flex items-center gap-2">
            {showNotificationButton && (
              <Link href="/notifications">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm relative">
                  <Bell className="w-4 h-4 text-slate-600" />
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
                </div>
              </Link>
            )}

            {showMenuButton && (
              <button
                onClick={() => setIsSideMenuOpen(true)}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm"
              >
                <Menu className="w-4 h-4 text-slate-600" />
              </button>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="px-6 pb-24">{children}</main>

      {/* Bottom Navigation */}
      {!hideBottomNav ? <MobileNavigation /> : null}

      {/* Side Menu */}
      <SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
    </div>
  )
}
