"use client"

import { motion } from "framer-motion"
import { Users, Wifi, Battery, Signal, Clock, Calendar, ArrowRight, Bell, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function CustomerCreditMockup() {
  return (
    <div className="relative">
      <div className="relative mx-auto w-[320px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative"
        >
          {/* Shadow */}
          <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[280px] h-[15px] bg-black/20 blur-md rounded-full"></div>

          {/* Smartphone Frame */}
          <div className="relative w-[320px] h-[650px] rounded-[40px] bg-gray-800 p-3 shadow-xl">
            {/* Bezel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-800 rounded-b-[16px] z-20">
              {/* Front Camera & Sensors */}
              <div className="absolute top-[10px] left-[50px] w-[8px] h-[8px] rounded-full bg-gray-700"></div>
              <div className="absolute top-[10px] left-[70px] w-[12px] h-[12px] rounded-full bg-gray-700"></div>
              <div className="absolute top-[10px] right-[50px] w-[8px] h-[8px] rounded-full bg-gray-700"></div>
            </div>

            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gray-900">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 bg-gray-900">
                <div className="text-xs text-white font-medium">9:41</div>
                <div className="flex items-center gap-2">
                  <Signal className="h-3 w-3 text-white" />
                  <Wifi className="h-3 w-3 text-white" />
                  <Battery className="h-3 w-3 text-white" />
                </div>
              </div>

              {/* App Content Container */}
              <div className="px-5 py-3">
                {/* App Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                      <Users className="h-4 w-4 text-purple-400" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Credit Sales</h2>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                    <Bell className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Customer Profile */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Users className="h-7 w-7 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white">John Kamau</h3>
                      <p className="text-xs text-gray-400">Regular Customer • 8 purchases</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="inline-block rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-400">
                          Credit: KES 5,200
                        </span>
                        <span className="inline-block rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                          Paid: KES 3,800
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Schedule */}
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">Payment Schedule</h3>
                    <span className="text-xs text-purple-400">View All</span>
                  </div>

                  <div className="space-y-3">
                    {/* Payment 1 - Completed */}
                    <div className="rounded-lg bg-gray-800 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white">First Payment</h4>
                            <span className="text-xs font-medium text-green-400">Paid</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-400">May 15, 2025</span>
                            </div>
                            <span className="text-xs font-medium text-white">KES 2,000</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment 2 - Completed */}
                    <div className="rounded-lg bg-gray-800 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white">Second Payment</h4>
                            <span className="text-xs font-medium text-green-400">Paid</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-400">June 15, 2025</span>
                            </div>
                            <span className="text-xs font-medium text-white">KES 1,800</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment 3 - Upcoming */}
                    <div className="rounded-lg bg-gray-800 p-3 border border-purple-500/30">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                          <Clock className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white">Final Payment</h4>
                            <span className="text-xs font-medium text-purple-400">Upcoming</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-400">July 15, 2025</span>
                            </div>
                            <span className="text-xs font-medium text-white">KES 5,200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Credit Sale Details */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <h3 className="mb-3 text-sm font-medium text-white">Sale Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Original Amount</span>
                      <span className="text-xs text-white">KES 9,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Paid Amount</span>
                      <span className="text-xs text-green-400">KES 3,800</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Remaining</span>
                      <span className="text-xs text-purple-400">KES 5,200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Next Payment</span>
                      <span className="text-xs text-white">July 15, 2025</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg bg-gray-800 py-3 text-sm font-medium text-white">
                    Send Reminder
                  </button>
                  <button className="flex-1 rounded-lg bg-purple-500 py-3 text-sm font-medium text-white">
                    Record Payment
                  </button>
                </div>
              </div>
            </div>
          </div>

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
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                <Bell className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">Payment Reminder</p>
                <p className="text-xs text-gray-400">Send automatic reminders 3 days before due date</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
