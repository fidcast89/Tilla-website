"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function BusinessInsightsMockup() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative w-full flex items-center justify-center overflow-visible">
      {/* Container for overlay effect */}
      <div className="relative w-full flex items-center justify-center">
        {/* Tablet Frame - Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 hidden md:block flex-shrink-0"
        >
          {/* Tablet frame - Reduced size */}
          <div className="relative overflow-hidden rounded-[24px] border-[10px] border-gray-800 bg-gray-800 shadow-2xl">
            {/* Screen with proper padding */}
            <div className="relative h-[360px] w-[540px] overflow-hidden bg-gray-900 p-2">
              {isClient && (
                <Image
                  src="/images/analytics_tablet.png"
                  alt="Analytics Dashboard Tablet"
                  fill
                  className="object-cover object-center"
                  priority
                />
              )}
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-[32px] bg-cyan-500/20 blur-xl -z-10"
          ></motion.div>
        </motion.div>

        {/* Mobile Phone Frame - Overlay on right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block relative z-20 -ml-12 flex-shrink-0"
        >
          {/* Phone frame - Reduced size */}
          <div className="relative overflow-hidden rounded-[32px] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
            {/* Screen with proper padding */}
            <div className="relative h-[435px] w-[210px] overflow-hidden bg-gray-900 p-2">
              {isClient && (
                <Image
                  src="/images/analytics_mobile.png"
                  alt="Analytics Dashboard Mobile"
                  fill
                  className="object-cover object-center"
                  priority
                />
              )}
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
            className="absolute -inset-1 rounded-[40px] bg-blue-500/20 blur-xl -z-10"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}
