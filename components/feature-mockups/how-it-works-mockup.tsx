"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HowItWorksMockup() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-shrink-0"
      >
        {/* Tablet frame - Reduced size */}
        <div className="relative overflow-hidden rounded-[24px] border-[10px] border-gray-800 bg-gray-800 shadow-2xl">
          {/* Screen with proper padding */}
          <div className="relative h-[360px] w-[540px] overflow-hidden bg-gray-900 p-2">
            {isClient && (
              <Image
                src="/images/new_sale.png"
                alt="How It Works - New Sale"
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
          className="absolute -inset-2 rounded-[32px] bg-pink-500/20 blur-xl -z-10"
        ></motion.div>
      </motion.div>
    </div>
  )
}
