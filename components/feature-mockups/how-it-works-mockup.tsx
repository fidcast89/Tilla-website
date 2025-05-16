"use client"

import { motion } from "framer-motion"
import { Smartphone, ShoppingBag, Users, Zap, ArrowRight, Check, DollarSign, Plus, Wifi, Battery, Signal } from "lucide-react"
import Image from "next/image"

export function HowItWorksMockup() {
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold text-white">New Sale</h2>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Cart Items */}
                <div className="mb-4 space-y-3">
                  <div className="rounded-lg bg-gray-800 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-md bg-gray-700 overflow-hidden">
                        <Image 
                          src="/images/product-kitenge.jpg" 
                          alt="Kitenge Shirt"
                          width={48}
                          height={48}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-white">African Print Shirt</h3>
                        <p className="text-xs text-gray-400">Size: L • Qty: 1</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-white">KES 1,200</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-800 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-md bg-gray-700 overflow-hidden">
                        <Image 
                          src="/images/product-beads.jpg" 
                          alt="Beaded Necklace"
                          width={48}
                          height={48}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-white">Maasai Beaded Necklace</h3>
                        <p className="text-xs text-gray-400">Color: Multi • Qty: 1</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-white">KES 850</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-2">
                    <button className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                      <Plus className="h-3 w-3" />
                      <span>Add Item</span>
                    </button>
                  </div>
                </div>

                {/* Customer Selection */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">Customer</h3>
                    <button className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">+ New</button>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-gray-700/50 p-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Sarah Johnson</p>
                      <p className="text-xs text-gray-400">Regular Customer • 12 purchases</p>
                    </div>
                    <div className="ml-auto">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Total and Checkout */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Subtotal</span>
                    <span className="text-sm text-white">KES 2,050</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Tax (16%)</span>
                    <span className="text-sm text-white">KES 328</span>
                  </div>
                  <div className="mb-2 border-t border-gray-700 pt-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Total</span>
                    <span className="text-sm font-bold text-white">KES 2,378</span>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <h3 className="mb-3 text-sm font-medium text-white">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-primary/10 p-3 border border-primary/30">
                      <div className="flex flex-col items-center gap-1">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="text-xs font-medium text-white">M-PESA</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-700 p-3">
                      <div className="flex flex-col items-center gap-1">
                        <ShoppingBag className="h-5 w-5 text-gray-400" />
                        <span className="text-xs font-medium text-gray-300">Cash</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white">
                  Complete Sale
                </button>
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
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">AI Suggestion</p>
                <p className="text-xs text-gray-400">Sarah might also like our beaded earrings</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
