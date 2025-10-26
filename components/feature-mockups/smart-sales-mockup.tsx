"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function SmartSalesMockup() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-shrink-0"
      >
        {/* Phone frame - Reduced size */}
        <div className="relative overflow-hidden rounded-[32px] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
          {/* Screen with proper padding */}
          <div className="relative h-[435px] w-[210px] overflow-hidden bg-gray-900 p-2">
            {isClient && (
              <Image
                src="/images/newsale_mobile.png"
                alt="Smart Sales"
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
          className="absolute -inset-1 rounded-[40px] bg-indigo-500/20 blur-xl -z-10"
        ></motion.div>
      </motion.div>
    </div>
  )
}
