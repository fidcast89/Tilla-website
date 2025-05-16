"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", duration = 0.5, className = "" }: FadeInProps) {
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 20 }, animate: { y: 0 } }
      case "down":
        return { initial: { y: -20 }, animate: { y: 0 } }
      case "left":
        return { initial: { x: 20 }, animate: { x: 0 } }
      case "right":
        return { initial: { x: -20 }, animate: { x: 0 } }
      case "none":
        return { initial: {}, animate: {} }
      default:
        return { initial: { y: 20 }, animate: { y: 0 } }
    }
  }

  const { initial, animate } = getDirectionValues()

  return (
    <motion.div
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ ...animate, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
