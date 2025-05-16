"use client"

import { motion } from "framer-motion"
import { DollarSign, ShoppingBag, Users, Zap, ArrowUp, Plus, Home, Settings } from "lucide-react"

export function HeroPhone() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 overflow-hidden rounded-[40px] border-[8px] border-gray-800 bg-gray-800 shadow-xl"
      >
        <div className="absolute top-0 z-20 h-7 w-full bg-gray-800">
          <div className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-gray-700"></div>
        </div>

        <div className="relative h-[580px] w-[280px] overflow-hidden bg-gray-900">
          {/* App screen - Dashboard */}
          <div className="h-full w-full bg-gradient-to-b from-gray-900 to-gray-950 p-4">
            {/* Status bar */}
            <div className="flex items-center justify-between py-2">
              <span className="text-xs font-medium text-gray-300">9:41</span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-4 mt-2"
            >
              <h1 className="text-xl font-semibold text-white">Hey John</h1>
            </motion.div>

            {/* AI Assistant Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-4 rounded-lg bg-gray-800/80 p-3 backdrop-blur"
            >
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <Zap className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-primary">AI Assistant</p>
                  <p className="mt-1 text-xs text-gray-300">
                    Your sales are up 23% this week! Want me to analyze what's driving this growth?
                  </p>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Yes, analyze</button>
                <button className="rounded-full bg-gray-700/30 px-3 py-1 text-xs text-gray-300">Later</button>
              </div>
            </motion.div>

            {/* Today's Revenue Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 via-gray-800 to-gray-800/80 p-4 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-gray-300">Today's Revenue</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">KES 1,247</h3>
                  <div className="mt-1 flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                    <ArrowUp className="h-3 w-3" />
                    <span>18% from yesterday</span>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="h-12 w-24">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(0, 198, 150)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="rgb(0, 198, 150)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 35 L10 32 L20 28 L30 30 L40 25 L50 20 L60 15 L70 18 L80 10 L90 5 L100 8"
                      fill="none"
                      stroke="rgb(0, 198, 150)"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 35 L10 32 L20 28 L30 30 L40 25 L50 20 L60 15 L70 18 L80 10 L90 5 L100 8 V40 H0 Z"
                      fill="url(#chartGradient)"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mb-4 grid grid-cols-2 gap-3"
            >
              <div className="rounded-xl bg-gray-800/80 p-3">
                <div className="mb-1 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                    <ShoppingBag className="h-3 w-3 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400">Sales</span>
                </div>
                <p className="text-lg font-bold text-white">24</p>
                <p className="text-xs text-gray-400">Today</p>
              </div>

              <div className="rounded-xl bg-gray-800/80 p-3">
                <div className="mb-1 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
                    <Users className="h-3 w-3 text-purple-400" />
                  </div>
                  <span className="text-xs text-gray-400">Customers</span>
                </div>
                <p className="text-lg font-bold text-white">8</p>
                <p className="text-xs text-gray-400">New today</p>
              </div>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 p-4"
            >
              <h3 className="mb-2 text-sm font-medium text-white">AI Insights</h3>
              <div className="space-y-2">
                <div className="rounded-lg bg-gray-800/60 p-2 backdrop-blur">
                  <p className="text-xs text-gray-300">Your t-shirts are selling 2x faster this week</p>
                </div>
                <div className="rounded-lg bg-gray-800/60 p-2 backdrop-blur">
                  <p className="text-xs text-gray-300">3 items are running low on stock</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Navigation with FAB - Fixed positioning */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800 shadow-[0_-4px_16px_rgba(0,0,0,0.2)]">
              <div className="relative h-full">
                {/* Left side icons */}
                <div className="absolute left-0 top-0 flex h-full w-[40%]">
                  <div className="flex h-full flex-1 items-center justify-center">
                    <Home className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="flex h-full flex-1 items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-gray-500" />
                  </div>
                </div>

                {/* Right side icons */}
                <div className="absolute right-0 top-0 flex h-full w-[40%]">
                  <div className="flex h-full flex-1 items-center justify-center">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="flex h-full flex-1 items-center justify-center">
                    <Settings className="h-5 w-5 text-gray-500" />
                  </div>
                </div>

                {/* FAB - Perfectly centered */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary shadow-lg">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -inset-1 rounded-[48px] bg-gray-500/20 blur-xl"
      ></motion.div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 0 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          delay: 2,
          duration: 0.5,
          y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
        }}
        className="absolute -right-20 top-20 z-20 w-48 rounded-lg bg-gray-800 p-3 shadow-lg"
      >
        <div className="flex items-start gap-2">
          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
            <DollarSign className="h-4 w-4 text-green-400" />
          </div>
          <div>
            <p className="text-xs font-medium text-white">New Sale!</p>
            <p className="text-xs text-gray-400">KES 1,250 - Denim Jacket</p>
            <p className="mt-1 text-xs text-gray-500">Just now</p>
          </div>
        </div>
      </motion.div>

      {/* Floating AI suggestion */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 0 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{
          delay: 2.5,
          duration: 0.5,
          y: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" },
        }}
        className="absolute -left-20 bottom-40 z-20 w-48 rounded-lg bg-gray-800 p-3 shadow-lg"
      >
        <div className="flex items-start gap-2">
          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium text-white">AI Suggestion</p>
            <p className="text-xs text-gray-400">Order more hoodies before next week</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
