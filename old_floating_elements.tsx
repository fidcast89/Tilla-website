"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 15 + 5,
            height: Math.random() * 15 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-b from-primary/20 to-primary/5 blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[60%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-b from-blue-500/20 to-blue-500/5 blur-3xl"
      ></motion.div>

      {/* Grid lines - fixed to match the original design */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,198,150,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,198,150,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  )
}
