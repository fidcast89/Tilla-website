"use client"

import { motion } from "framer-motion"
import { Brain, Camera, ArrowRight, Zap, ShoppingBag, Wifi, Battery, Signal, DollarSign } from "lucide-react"
import Image from "next/image"

interface FeatureMockupProps {
  imageSrc?: string
  alt?: string
  className?: string
}

export function FeatureMockup(props: FeatureMockupProps) {
  const { imageSrc, alt, className } = props;

  return (
    <div className="relative">
      <div className="relative mx-auto w-[320px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={`relative ${className || ''}`}
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
                  {imageSrc ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={imageSrc}
                        alt={alt || "Feature mockup"}
                        fill
                        className="object-cover"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                      {/* Camera Controls */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                          <div className="h-3 w-3 rounded-full bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* AR Guidelines */}
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect
                            x="40"
                            y="40"
                            width="120"
                            height="120"
                            rx="8"
                            stroke="#00C696"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                          />
                          <circle cx="100" cy="100" r="50" stroke="#00C696" strokeWidth="2" strokeDasharray="6 4" />
                          <path d="M80 100H120" stroke="#00C696" strokeWidth="2" />
                          <path d="M100 80V120" stroke="#00C696" strokeWidth="2" />
                        </svg>

                        {/* AR Indicators */}
                        <div className="absolute top-10 right-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Zap className="h-3 w-3 text-primary" />
                        </div>
                        <div className="absolute bottom-10 left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Zap className="h-3 w-3 text-primary" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                          <div className="h-3 w-3 rounded-full bg-primary"></div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* AI Processing */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Brain className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-white">AI is analyzing your product</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                    <p className="text-xs text-gray-400">Identifying product details...</p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="rounded-xl bg-gray-800 p-4">
                  <h3 className="mb-3 text-sm font-medium text-white">AI Generated Product</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Product Name</p>
                      <p className="text-sm text-white">Premium Black Cotton T-Shirt</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Category</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">Clothing</span>
                        <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">T-Shirts</span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Suggested Price</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-white">KES 1,200</p>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">AI Recommended</span>
                      </div>
                    </div>
                  </div>
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
