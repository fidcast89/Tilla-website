"use client"

import { motion } from "framer-motion"
import { Brain, Camera, ArrowRight, Zap, ShoppingBag, Wifi, Battery, Signal, DollarSign } from "lucide-react"
import Image from "next/image"

export function AIProductCreationMockup() {
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
                      <Camera className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold text-white">New Product</h2>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* AR Camera View */}
                <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl bg-gray-800">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/product-scan.jpg"
                      alt="Product scan"
                      fill
                      className="object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                    {/* AR Overlay Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-40 w-40 rounded-lg border-2 border-dashed border-primary/70 flex items-center justify-center">
                        <div className="h-6 w-6 rounded-full bg-primary/30 animate-ping"></div>
                      </div>
                    </div>

                    {/* Scanning Animation */}
                    <motion.div
                      initial={{ top: "0%" }}
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-primary/50"
                    ></motion.div>

                    {/* Scanning Status */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-gray-900/70 px-3 py-1.5 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-xs text-white">Scanning...</span>
                      </div>
                      <div className="bg-gray-900/70 px-3 py-1.5 rounded-full">
                        <span className="text-xs text-white">Kitenge Shirt</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Generated Content */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-medium text-white">AI Generated Details</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-400">Product Name</label>
                      <p className="text-sm text-white">African Print Kitenge Shirt</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Description</label>
                      <p className="text-sm text-white">Handcrafted men's shirt made from authentic African kitenge fabric. Vibrant pattern with traditional motifs.</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Category</label>
                      <p className="text-sm text-white">Men's Clothing</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <label className="text-xs text-gray-400">Suggested Price</label>
                        <p className="text-sm text-white">KES 1,200</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Cost</label>
                        <p className="text-sm text-white">KES 800</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg bg-gray-800 py-3 text-sm font-medium text-white">Edit</button>
                  <button className="flex-1 rounded-lg bg-primary py-3 text-sm font-medium text-white">Save</button>
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
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <DollarSign className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">Price Suggestion</p>
                <p className="text-xs text-gray-400">Similar items sell for KES 1,100-1,300</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
